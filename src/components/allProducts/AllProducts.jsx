import React, { useState, useEffect } from "react";
import { Products } from "../dummyData/DummyData";
import { SideBarData } from "../dummyData/DummyData";

const AllProducts = () => {
  const [initialState, setInitialState] = useState([]);
  const [queryRender, setQueryRender] = useState(true);
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();

  const handleCheckboxChange = (value) => {
    let newArr = [...initialState];
    if (!newArr.includes(value)) {
      newArr.push(value);
    } else {
      newArr.splice(newArr.indexOf(value), 1);
    }
    setInitialState(newArr);
  };

  useEffect(() => {
    setQueryRender(true);
    initialState.length > 0 && setQueryRender(false);
  }, [initialState]);

  const handleValue = (value) => {
    setMaxVal(value);
  };
  return (
    <div className="allProductsContainer">
      <div>
        {SideBarData &&
          SideBarData.map((item, i) => (
            <>
              <p>{item.name}</p>
              {item && (
                <div>
                  {item?.data &&
                    item?.data.map((value, index) => (
                      <>
                        {item?.name === "Browse" && (
                          <div
                            style={{
                              display: "grid",
                              gap: "5px",
                              gridTemplateColumns: "repeat(2, 1fr)",
                            }}
                            className={"check"}
                          >
                            <input
                              className="browsebutton"
                              key={index}
                              label={value}
                              type="checkbox"
                              disabled={false}
                              checked={initialState?.includes(value)}
                              onChange={(e) => handleCheckboxChange(value)}
                              id={value + index}
                            />
                            <p>{value}</p>
                          </div>
                        )}
                        {item?.name === "Brands" && (
                          <div style={{ display: "flex" }}>
                            <input
                              key={index}
                              label={value}
                              type="checkbox"
                              disabled={false}
                              checked={initialState?.includes(value)}
                              onChange={(e) => handleCheckboxChange(value)}
                              id={value + index}
                            />
                            <p>{value}</p>
                          </div>
                        )}
                        {item?.name === "Manufacturer" && (
                          <div style={{ display: "flex" }}>
                            <input
                              key={index}
                              label={value}
                              type="checkbox"
                              disabled={false}
                              checked={initialState?.includes(value)}
                              onChange={(e) => handleCheckboxChange(value)}
                              id={value + index}
                            />
                            <p>{value}</p>
                          </div>
                        )}

                        {item?.name === "Price Range" && (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setMinVal(e.target.value)}
                              value={minVal}
                            />
                            <input
                              type="text"
                              onChange={(e) => {
                                handleValue(e.target.value);
                              }}
                              value={maxVal}
                            />
                          </div>
                        )}
                      </>
                    ))}
                </div>
              )}
            </>
          ))}
      </div>
      <div>
        <div>
          <select onChange={(e) => handleCheckboxChange(e.target.value)}>
            <option value={"all"}>All Products</option>
            <option value={"Apple"}>Apple</option>
            <option value={"Samsung"}>Samsung</option>
          </select>
        </div>
        {queryRender &&
          Products.map(
            (item, index) =>
              (maxVal > 0 ? item.price < maxVal : true) && (
                <div key={index} className="cardContainer">
                  <img src={item.image} className="mobileImage" />
                  <h4>{item.name}</h4>
                  <p>{item.price} ks</p>
                  <a href="/details">
                    <button>Details</button>
                  </a>
                </div>
              )
          )}
        {!queryRender &&
          Products.map((item) => (
            <>
              {((!maxVal && initialState.join().includes(item.brand)) ||
                (initialState.join().includes(item.brand) &&
                  item.price < maxVal)) && (
                <div className="cardContainer">
                  <img src={item.image} className="mobileImage" />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <a href="/details">{/* <button>Details</button> */}</a>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
