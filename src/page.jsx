import React from "react";
import image from "./assets/logo.svg";
import dollar from "./assets/icon-dollar.svg";

const page = () => {
  return (
    <main>
      <img src={image} alt="" className="logo" />
      <div className="container">
        <div className="bill-container">
          <div className="bill">
            <span>BILL</span>
            <div>
              <input type="text" className="bill-icon" />
            </div>
          </div>
          <div className="select-tip">
            <span>Select Tip %</span>
            <div className="tip-button">
              <button>5%</button>
              <button>10%</button>
              <button className="default-btn">15%</button>
              <button>25%</button>
              <button>50%</button>
              <input type="text" placeholder="Custom" className="select-input"/>
            </div>
          </div>
          <div className="people-available">
            <span>Number of people</span>
            <input type="text" className="profile" />
          </div>
        </div>
        <div className="result-container">
          <div className="results">
          <div className="tip-amount">
            <div className="text">
              <h3>Tip Amount</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">$4.27</div>
          </div>
          <div className="total-amount">
            <div className="text">
              <h3>Total</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">$32.79</div>
          </div>
          <button className="btn">RESET</button>
          </div>
          
          
        </div>
      </div>

    </main>
  );
};

export default page;
