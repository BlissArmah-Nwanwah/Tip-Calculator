import React, { useEffect } from "react";
import image from "./assets/logo.svg";
import dollar from "./assets/icon-dollar.svg";
import { useState } from "react";

const page = () => {

  const [bill,setBill] = useState(0)
  const [button,setButton] =useState(0)
  const [tip,setTip] =useState(0)
  const [customTip,setCustomTip] = useState(0)
  const [people,setPeople] = useState(0)
  const [total,setTotal] = useState(0)
  const [test, setTest] = useState(1)
  
 

  const handleButton = (value) => {
    
    let all = (parseInt(bill)*value)/100
    let result = all / parseInt(people)
    setButton(result)

    let final = (parseInt(bill) / parseInt(people)) + tip
    setTotal(final)
  }



  useEffect(() => {
    console.log("Test is " + button)
  }, [button])
  
  
  


  return (

    <main>
      <img src={image} alt="" className="logo" />
      <div className="container">
        <div className="bill-container">
          <div className="bill">
            <span>BILL</span>
            <div>
              <input type="text" className="bill-icon" value={bill} onChange={(e)=>setBill(e.target.value)} />
            </div>
          </div>
          <div className="select-tip">
            <span>Select Tip %</span>
            <div className="tip-button">
              <button onClick={() => {handleButton(5)}}>5%</button>
              <button onClick={()=>handleButton(10)}>10%</button>
              <button className="default-btn" onClick={()=>handleButton(15)}>15%</button>
              <button onClick={()=>handleButton(25)}>25%</button>
              <button onClick={()=>handleButton(50)}>50%</button>
              <input type="text" placeholder="Custom" className="select-input"    />
            </div>
          </div>
          <div className="people-available">
            <span>Number of people</span>
            <input type="text" className="profile" value={people}  onChange={(e)=>setPeople(e.target.value)}  />
          </div>
        </div>
        <div className="result-container">
          <div className="results">
          <div className="tip-amount">
            <div className="text">
              <h3>Tip Amount</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">${button.toFixed(2)}</div>
          </div>
          <div className="total-amount">
            <div className="text">
              <h3>Total</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">${total.toFixed(2)}</div>
          </div>
          <button className="btn">RESET</button>
          </div>
          
          
        </div>
      </div>

    </main>
  );
};

export default page;
