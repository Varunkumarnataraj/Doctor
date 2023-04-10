import React from "react";

import { Link } from "react-router-dom";

const View = () => {
    // console.log("hos",hospital)
  return (
    <div>
      <div className="viewbox">
      
      <div className="viewpage-display">
        hello
        {/* {hospital?.map((data) => (
          <div className="view-content">
            <div className="viewimg">
              <img
                src={data.img}
                className="viewpic"
              />
            </div>
            <Link to="/booking">
            <button className="btndetails">Meet Doctor</button>
            </Link>
          </div>
        ))} */}
      </div>
    </div>
    </div>
  )
}

export default View;