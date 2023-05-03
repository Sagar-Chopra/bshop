import React from 'react'

const Navbar = () => {
  return (
    <div className='detailContainer'>
        <div className='flex'>
            <p className='links'>Shop</p>
            <p className='links'>Explore</p>
            <a href='/allproducts'>
            <p className='links'>All Products</p>
            </a>
        </div>
        <div className='flex'>
            <p>Add To Cart</p>
            <p>0</p>
        </div>
    </div>
  )
}

export default Navbar