import React, { useEffect } from "react";
import {
  productLists,
  productDetails,
  cartCount,
} from "../actionCreator/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Products({ productLists, products, productDetails, cartCount }) {
  useEffect(() => {
    productLists();
  }, []);

  const handleProductDetails = (details) => {
    productDetails(details);
  };
  const handlingCart = (elem) => {
    cartCount(elem);
  };
  return (
    <div className='d-flex flex-wrap'>
      {products &&
        products.map((elem, i) => {
          return (
            <div className='card offset-md-1 py-3 mt-5 mb-5' key={i}>
              <Link to='/productdetails'>
                <img
                  onClick={() => handleProductDetails(elem)}
                  src={elem.image}
                  className='card-img-top'
                  alt='...'
                  height='100%'
                  style={{ width: "14rem" }}
                />
              </Link>
              <div
                className='card-body'
                style={{ height: "7rem", width: "15rem" }}
              >
                <h6 className='card-title text-truncate'>{elem.name}</h6>

                <h6 className='d-flex justify-content-between'>
                  <span>
                    ₹ {elem.price} <del>{elem.price + elem.price * 0.1}</del>
                  </span>

                  <span className='badge badge-warning'>{elem.ratings}</span>
                </h6>
                <button
                  className='btn btn-warning '
                  onClick={() => handlingCart(elem)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

let stateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(stateToProps, {
  productLists,
  productDetails,
  cartCount,
})(Products);
