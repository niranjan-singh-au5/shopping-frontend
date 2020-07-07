import axios from 'axios'
export const productLists = () => {
    let data = axios.get("http://localhost:5000/api/product")
    return (dispatch) => {
        data.then((res) => {
            dispatch({
                type: "get-products",
                payload: res.data
            })
        }).catch(err => console.err(err))
    }
}
export const productDetails = (details) => {
    return {
        type: "product-details",
        payload: details
    }
}

export const cartCount = (data) => {
    return {
        type: "get-count",
        payload: data
    }
}

export const addQuantity = (index) => {

    return {
        type: "add-quantity",
        payload: index
    }
}

export const substractQuantity = (index) => {

    return {
        type: "substract-quantity",
        payload: index
    }
}

export const deleteProduct = (index) => {
    return {
        type: "delete-product",
        payload: index
    }
}

export const checkoutOrder = (cart, totalPrice) => {
    let data = axios.post('http://localhost:5000/api/product/add', {
        cart, totalPrice
    })
    return (dispatch) => {
        data.then((res) => {
            dispatch({
                type: "checked-out"
            })
        })
    }
}