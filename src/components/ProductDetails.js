import React from 'react'
import { connect } from 'react-redux'
import './productDetails.css'
import { cartCount } from '../actionCreator/actions'
function ProductDetails({ productDetails, cartCount }) {

    return (
        <div className="container mb-4">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={productDetails.image} /></div>
                                <div className="tab-pane" id="pic-2"><img src={productDetails.image} /></div>
                                <div className="tab-pane" id="pic-3"><img src={productDetails.image} /></div>
                                <div className="tab-pane" id="pic-4"><img src={productDetails.image} /></div>
                                <div className="tab-pane" id="pic-5"><img src={productDetails.image} /></div>
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={productDetails.image} /></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img src={productDetails.image} /></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img src={productDetails.image} /></a></li>
                                <li><a data-target="#pic-4" data-toggle="tab"><img src={productDetails.image} /></a></li>
                                <li><a data-target="#pic-5" data-toggle="tab"><img src={productDetails.image} /></a></li>
                            </ul>

                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{productDetails.name}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <h3> <span className="badge badge-warning">{productDetails.ratings}</span></h3>
                                </div>
                                <span className="review-no">41 reviews</span>
                            </div>
                            <p className="product-description">{productDetails.description}</p>
                            <h4 className="price">current price: <span>₹ {productDetails.price}</span></h4>
                            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <div className="action">
                                <button className="add-to-cart btn btn-default" type="button" onClick={() => cartCount(productDetails)}>add to cart</button>
                                <button className="like btn btn-default ml-3" type="button"><span className="fa fa-heart"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const stateToProps = (state) => {
    return {
        productDetails: state.productDetails
    }
}
export default connect(stateToProps, { cartCount })(ProductDetails)
