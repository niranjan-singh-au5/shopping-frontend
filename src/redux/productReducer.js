
let intialState = {
    addToCart: [],
    totalPrice: 0,
    cartCount: 0,
    checkedOut: false
}
export function productReducer(state = intialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "get-products":
            stateCopy.products = action.payload
            return stateCopy
        case "product-details":
            stateCopy.productDetails = action.payload

            return stateCopy
        case "get-count":
            let duplicate = false
            let index = 0
            stateCopy.addToCart.forEach((e, i) => {
                if (e.product._id === action.payload._id) {
                    duplicate = true
                    index = i
                }
            })
            if (duplicate) {
                stateCopy.addToCart[index] = { quantity: stateCopy.addToCart[index].quantity += 1, product: action.payload }
                stateCopy.totalPrice += Number(action.payload.price)
            }

            else {
                stateCopy.addToCart = [...state.addToCart, { quantity: 1, product: action.payload }]
                stateCopy.totalPrice += Number(action.payload.price)
            }
            stateCopy.cartCount = stateCopy.addToCart.length
            stateCopy.checkedOut = false
            return stateCopy
        case 'add-quantity':
            let temp = stateCopy.addToCart[action.payload]
            temp.quantity += 1
            stateCopy.totalPrice += Number(temp.product.price)
            stateCopy.addToCart[action.payload] = temp
            return stateCopy
        case 'substract-quantity':
            let temp1 = stateCopy.addToCart[action.payload]
            if (temp1.quantity > 1) {
                temp1.quantity -= 1
                stateCopy.totalPrice -= Number(temp1.product.price)
                stateCopy.addToCart[action.payload] = temp1
            }
            return stateCopy
        case 'delete-product':
            let deleteProduct = stateCopy.addToCart[action.payload]
            stateCopy.totalPrice = stateCopy.totalPrice - (Number(deleteProduct.product.price) * deleteProduct.quantity)
            stateCopy.addToCart.splice(action.payload, 1)
            stateCopy.cartCount = stateCopy.addToCart.length
            return stateCopy
        case 'checked-out':
            stateCopy.addToCart = []
            stateCopy.cartCount = 0
            stateCopy.totalPrice = 0
            stateCopy.checkedOut = true
            return stateCopy

        default:
            return stateCopy
    }
}


