import React from 'react'
// import { Steps } from 'antd';
import './homePage.css'
import cart from '../assets/cart.png'
import truck from '../assets/truck.jpg'
import { Link } from 'react-router-dom'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import mastercard1 from '../assets/mastercard-1.png'
import mastercard2 from '../assets/mastercard-2.png'
import discover from '../assets/discover.png'
import ideal from '../assets/ideal.png'
import inpost from '../assets/inpost-logo.png'
import dpd from '../assets/DPD-logo.png'
import dhl from '../assets/dhl-logo.png'
import fedex from '../assets/fedex-logo.png'
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.jpg'
import truck2 from '../assets/truck2.png'

const Homepage = () => {
    return (
        <div>
            <div className='mx-4 d-flex justify-content-between'>
                <h3>Shipping and Payment</h3>
                <div className=''>
                    <span className='d-flex'>
                        <img src={cart} className="img-cart" alt="" />
                        <i className='line'></i>
                        <img src={truck} className="truck" alt="" />
                    </span>
                </div>
            </div>

            <div className='mx-4 mt-3'>
                <div className="row">
                    <div className="col-5">
                        <div>
                            <Link to='/signin' className='btn btn-lg btn-outline-secondary custom-btn'>LOGIN</Link>
                            <Link to='/signup' className='btn btn-lg btn-outline-secondary btn-2'>SIGN UP</Link>
                        </div>
                        <div className='mt-4'>
                            <h5>Shipping information</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <input type="text" className='input-field mb-3 px-3' placeholder='Email' />
                                    <input type="text" className='input-field mb-3 px-3' placeholder='First name' />
                                    <input type="text" className='input-field mb-3 px-3' placeholder='Last name' />
                                    <input type="text" className='input-field px-3' placeholder='Phone number' />

                                </div>
                                <div className='col-6'>
                                    <input type="text" className='input-field mb-3 px-3' placeholder='Address' />
                                    <input type="text" className='input-field mb-3 px-3' placeholder='City' />
                                    <input type="text" className='input-field mb-3 px-3' placeholder='Postal Code/Zip' />
                                    {/* <input type="text" className='input-field p-3' placeholder='Poland' /> */}
                                    <div id='opt-sle'>
                                        <select className='input-opt px-3' >
                                            <option value="Poland">Poland</option>
                                            <option value="India">India</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='mt-4'>
                            <h5>Payment method</h5>
                            <div className='row'>
                                <div className='col'>
                                    <button className='payment'><img src={paypal} className='payment-icon' /></button>
                                </div>
                                <div className='col'>
                                    <button className='payment'><img src={visa} className='payment-icon' /></button>
                                </div>
                                <div className='col'>
                                    <button className='payment'><img src={mastercard1} className='payment-icon' /></button>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <button className='payment'><img src={mastercard2} className='payment-icon' /></button>
                                </div>
                                <div className='col'>
                                    <button className='payment'><img src={discover} className='payment-icon' /></button>
                                </div>
                                <div className='col'>
                                    <button className='payment'><img src={ideal} className='payment-icon' /></button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h5>Delivery method</h5>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <button className='payment'><img src={inpost} className='payment-icon Logo' /><span>$20.00</span></button>
                                </div>
                                <div className='col'>
                                    <button className='payment'><img src={dpd} className='payment-icon Logo' /><span>$12.00</span></button>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>
                                    <button className='payment'><img src={dhl} className='payment-icon Logo' /><span>$15.00</span></button>
                                </div>
                                <div className='col'>
                                    <button className='payment'><img src={fedex} className='payment-icon ' /><span>$10.00</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='mt-4'>
                            <h5>Your cart</h5>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={men1} className='display-pic' alt="" />
                                </div>
                                <div className='col-6'>
                                    <h6>Tshirts</h6>
                                    <h6>Summer Vibes</h6>
                                    <p>#261311</p>
                                </div>
                                <div className='col-3'>
                                    <h6>$89.99</h6>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src={men2} className='display-pic' alt="" />
                                </div>
                                <div className='col-6'>
                                    <h6>Tshirts</h6>
                                    <h6>Summer Vibes</h6>
                                    <p>#212315</p>
                                </div>
                                <div className='col-3'>
                                    <h6>$69.99</h6>
                                </div>
                            </div>
                            <div className='row total'>
                                <div className='col'>
                                    {/* <span className=''>Total cost</span>
                                    <span className=''>$159,98</span> */}
                                    <p className='mt-2'>Total</p>
                                </div>
                                <div className='col'>
                                    <p className='mt-2'>$159,98</p>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-2'> <img className="truck2" src={truck2} alt="" /></div>
                                <div className='col-8'> 
                                <p>You are $30,02 away <br /> from free shopping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5 mx-5'>
                <div className='col-8'>
                    <span >&larr;</span><span className='m-3'>back</span>
                </div>
                <div className='col-2'>
                    <button className='btn btn-outline-success btn-shopping'>CONTINUE SHOPPING</button>
                </div>
                <div className='col-2'>
                    <button className='btn btn-success btn-pay'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage