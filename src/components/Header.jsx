import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FilterContext } from '../contextapi/FilterContext'

const Header = () => {
    const [boxval,setBoxVal] = useState();
    const handleClick = ()=>{
        getFilter(boxval);
        setBoxVal("");
    }
    const {getFilter} = useContext(FilterContext);
    return (
        <>
            <header className="header-top py-3 pb-0">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-white text-end'>Hotline:<a href="tel:+91 933047857588" className='text-white'>+91 933047857588</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-0">
                <div className="container-xxl py-1 align-items-center">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <Link className='text-white mb-0' to="/"><h2>Dev Corner</h2></Link>
                        </div>
                        <div className="col-5">
                            <div className="input-group mb-3 align-item-center mt-3">
                                <input type="text" className="form-control " placeholder="Search Product Here.." id='searchfilter'  value = {boxval} onChange={(e)=>{
                                    getFilter(e.target.value)
                                    setBoxVal(e.target.value)
                                }} />
                                <div className="input-group-append ">
                                    <span className="input-group-text " id="basic-addon2" onClick={()=>{handleClick()}}> <BsSearch className='fs-3  p-1' /> </span>
                                </div>
                            </div>

                        </div>
                        <div className="col-5 ">
                            <div className=" d-flex justify-content-between align-items-center">
                                <div>
                                    <Link to='/compare-product' className='d-flex align-items-center mx-2 gap-10  align-self-center '>
                                        <img src='/images/compare.svg' alt="compare" />
                                        <p className="text-white mb-0 ">Compare Products</p>
                                    </Link>
                                </div>
                                <div >
                                    <Link to='/wishlist' className='d-flex align-items-center gap-10  '>
                                        <img src="/images/wishlist.svg" alt="wishlist" />
                                        <p className="text-white mb-0">Favorite wishlist</p>
                                    </Link>

                                </div>
                                <div>
                                    <Link to='/login' className='d-flex align-items-center gap-10 '>
                                        <img src="images/user.svg" alt="user" />
                                        <p className='text-white mb-0'>Login to my account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='cart' className='d-flex align-items-center '>
                                        <img src="images/cart.svg" alt="cart" />
                                        <div className='d-flex align-items-center flex-column mx-2'>
                                            <span className=' badge bg-white text-dark mb-2 px-3'>0</span>
                                            <p className="text-white mb-0">$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-down p-3">
                <div className="container-xxl">
                    <div className="row ">
                        <div className="col-12 d-flex gap-10 align-items-center ">
                            <div className="drop-down ">
                                <div className="dropdown  m-1">
                                    <button className="btn dropdown-toggle text-white gap-25" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img  src='images/menu.svg'/>
                                    <span className='mx-4'>Shop categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link><a className="dropdown-item m-3 text-white" to='/'>Action</a></Link>
                                        <Link><a className="dropdown-item m-3 text-white" to='/'>Another action</a></Link>
                                        <Link><a className="dropdown-item m-3 text-white" to='/'>Something else here</a></Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className='d-flex align-items-center gap-15 '>
                                    <div >
                                        <NavLink to='/' className='text-white'>Home</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to='/our-store' className='text-white'>Our Store</NavLink>
                                    </div>
                                    <div>
                                        <NavLink className='text-white' to='/blogs' >Blogs</NavLink>
                                    </div>
                                    <div>
                                        <NavLink className='text-white' to='/contact'>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
