import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mobileImage from "../images/mobileImage.jpg";
import { Products } from "./dummyData/DummyData";

const ProductDetails = () => {
  var { id } = useParams();
  const [data, setdata] = useState();

  useEffect(() => {
    Products?.map((product) => {
      if (id == product.id) {
        setdata(product)
      }
    })
  }, [id]);
 

  return (
    <div>
      <div className="productDetailsGrid">
        <div>
          <img src={mobileImage} className='detailMobileImage' />   
        </div>
        <div>

          <h4>{data?.name}</h4>
          <p>{data?.price}</p>
          <button>Add To Cart</button>
          <button>Buy Now</button>
          <h2>Details</h2>
          <div className="detailContainer">
            <h5>code</h5>
            <p>C001</p>
          </div>
          <div className="detailContainer">
            <h5>code</h5>
            <p>C001</p>
          </div>
          <div className="detailContainer">
            <h5>code</h5>
            <p>C001</p>
          </div>
          <div className="detailContainer">
            <h5>code</h5>
            <p>C001</p>
          </div>
          <div className="detailContainer">
            <h5>code</h5>
            <p>C001</p>
          </div>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            nam labore! Illo, perferendis voluptate error iusto maxime eligendi
            et ipsam minus consequatur necessitatibus corrupti maiores quia
            dolorem dolores corporis cupiditate.
          </p>
        </div>
      </div>
      <div className="relatedProductDetails">
        <div className="cardContainer">
          {/* <img src={mobileImage} className='mobileImage' />    */}
          <h4>Nillkin iphone X cover</h4>
          <p>10000 ks</p>
          <a href="/details">
            <button>Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
