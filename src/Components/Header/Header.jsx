import React from 'react'
import cart from '../assets/cart.png'
import search from '../assets/search.png'
import user from '../assets/user.png'

const Header = () => {
    return (
        <>
            <div className='mx-5'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <img src='' className='m-1' alt="img field" />
                        <a className="navbar-brand" href="#"><span className='text-success'>E</span>-shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav m-auto my-2">
                                <li className="">
                                    <a className="nav-link active" href="#">Men</a>
                                </li>
                                <li className="">
                                    <a className="nav-link active" href="#">Women</a>
                                </li>
                                <li className="">
                                    <a className="nav-link active" href="#">Kids</a>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <img src={search}  alt="" />
                                <img src={cart} style={{marginLeft:"20px"}} alt="" />
                                <img src={user} style={{marginLeft:"20px"}} alt="" />
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className='mx-3'/>
        </>
    )
}

export default Header