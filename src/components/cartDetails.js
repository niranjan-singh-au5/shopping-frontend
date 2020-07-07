import React from 'react'
import './cart.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, substractQuantity, deleteProduct, checkoutOrder } from '../actionCreator/actions'
function CartDetails({ addToCart, addQuantity, substractQuantity, totalPrice, deleteProduct, checkoutOrder, checkedOut }) {

    return (
        <div className="container">
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                Shipping cart
                <Link to="/products" className="btn btn-outline-info btn-sm pull-right float-right">Continue shopping</Link>
                    <div className="clearfix"></div>
                </div>
                {checkedOut
                    ? <div className="text-center"><h2>Thank You For Shopping!!</h2> </div>
                    :
                    <div className="card-body">
                        {addToCart && addToCart.map((elem, i) => {
                            return (
                                <div key={i}>
                                    < div className="row" >
                                        <div className="col-12 col-sm-12 col-md-2 text-center">
                                            <img className="img-responsive" src={elem.product.image} alt="prewiew" width="120" height="80" />
                                        </div>
                                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                            <h4 className="product-name"><strong>{elem.product.name}</strong></h4>
                                            <h4 className="text-truncate">
                                                <small >{elem.product.description}</small>
                                            </h4>
                                        </div>
                                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                            <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                                                <h6><strong>₹ {Number(elem.product.price) * elem.quantity}</strong></h6>
                                            </div>
                                            <div className="col-4 col-sm-4 col-md-4">
                                                <div className="quantity">
                                                    <input type="button" value="+" onClick={() => addQuantity(i)} className="plus" />
                                                    <input type="number" step="1" max="99" min="1" value={elem.quantity} title="Qty" className="qty"
                                                        size="4" readOnly />
                                                    <input type="button" value="-" className="minus" onClick={() => substractQuantity(i)} />
                                                </div>
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 text-right">
                                                <button type="button" className="btn btn-outline-danger btn-xs" onClick={() => deleteProduct(i)}>
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }

                <div className="card-footer">

                    <div className="pull-right" style={{ margin: '10px' }}>
                        <button type="button" className="btn btn-success pull-right" onClick={() => checkoutOrder(addToCart, totalPrice)} >Checkout</button>
                        <div className="pull-right" style={{ margin: '5px' }}>
                            Total price: <b>₹ {totalPrice}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

let stateToProps = (state) => {
    return {
        addToCart: state.addToCart,
        totalPrice: state.totalPrice,
        checkedOut: state.checkedOut
    }
}

export default connect(stateToProps, { addQuantity, substractQuantity, deleteProduct, checkoutOrder })(CartDetails)
