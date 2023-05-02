import React from 'react'
import mobileImage from '../images/mobileImage.jpg';
import { Products } from './dummyData/DummyData';

const HomePage = () => {
  return (
    <div>
        <h1>New Arrival</h1>
        <div className='gridContainer'>
        {Products.map(() => (
            <div className='cardContainer'>
            <img src={mobileImage} className='mobileImage' />   
            <h4>Nillkin iphone X cover</h4>
            <p>10000 ks</p>
            <a href="/details">
            <button>Details</button>
            </a>
        </div>  
        ))}
        </div>
    </div>
  )
}

export default HomePage