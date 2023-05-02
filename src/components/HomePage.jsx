import React from 'react'
import { useNavigate } from 'react-router-dom';
import mobileImage from '../images/mobileImage.jpg';
import { Products } from './dummyData/DummyData';

const HomePage = () => {
    const navigate = useNavigate()
    const handleNavigation = (id)=>{
        navigate(`/details/${id}`)
    }
  return (
    <div>
        <h1>New Arrival</h1>
        <div className='gridContainer'> 
        {Products.map((data, index) => (
            <div key={index} className='cardContainer' onClick={()=>handleNavigation(data.id)}>
            <img src={mobileImage} className='mobileImage' />   
            <h4>{data.name}</h4>
            <p>10000 ks</p>
            <button>Details</button>
        </div>  
        ))}
        </div>
    </div>
  )
}

export default HomePage