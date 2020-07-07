import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
function App({ cartCount }) {
    return (
        <div id="navbar">
            <div className="container">
                <div className="row row1">
                    <ul className="largenav pull-right">
                        <li className="upper-links"><a className="links" href="http://clashhacks.in/">Login & SignUp</a></li>

                        <li className="upper-links">
                            <a className="links" > <svg className="" width="16px" height="12px" style={{ overflow: "visible" }}>
                                <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path>
                            </svg> </a> </li>
                        <li className="upper-links dropdown"><a className="links" >More</a>
                            <ul className="dropdown-menu">
                                <li className="profile-li"><a className="profile-links" >Contact Us</a></li>
                                <li className="profile-li"><a className="profile-links" >Advertise</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="row row2">
                    <Link to='/products' className="col-sm-2" style={{ textDecoration: "none", color: "white" }}>
                        <h1 style={{ margin: "-5px" }}><span className="largenav">Shopping </span></h1>
                    </Link>
                    <div className="navbar-search smallsearch col-sm-8 col-xs-11">
                        <div className="row"> <input className="navbar-input col-md-11 " placeholder="Search for Products, Brands and more" /> <button className="navbar-button  col-md-1 p-0" style={{ height: "45px" }}> <svg width="15px" height="18px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg> </button> </div>
                    </div>
                    <Link to='/cart' className="cart largenav col-sm-2 h-100"> <button className="cart-button h-100 text-white"> <svg className="cart-svg text-white " width="16 " height="16 " viewBox="0 0 16 16 ">
                        <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                    </svg> Cart <span className="item-number ">{cartCount}</span> </button> </Link>
                </div >
            </div >
        </div >
    )
}
const stateToProps = (state) => {
    return {
        cartCount: state.cartCount
    }
}
export default connect(stateToProps)(App)