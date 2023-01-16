import React, { useEffect } from "react";
import image from "./assets/logo.svg";
import dollar from "./assets/icon-dollar.svg";
import { useState } from "react";

const page = () => {
  const [bill,setBill] = useState(20)
  const [button,setButton] =useState(0)
  const [tip,setTip] =useState(0)
  const [people,setPeople] = useState(0)
  const [total,setTotal] = useState(0)
  
  const handleButton =(value)=>{
    setButton(value)
    setTip((bill*button) / 100)
    
    console.log(total);
    

  }
  const totalAmount = (e)=>{
    setPeople(e.target.value)
    setTotal(tip * people)
  }
  useEffect(()=>{
    setTip((bill*button) / 100)
    setTotal(tip * people)

  }, [button,people])

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
              <button onClick={()=>handleButton('5')}>5%</button>
              <button onClick={()=>handleButton('10')}>10%</button>
              <button className="default-btn" onClick={()=>handleButton('15')}>15%</button>
              <button onClick={()=>handleButton('25')}>25%</button>
              <button onClick={()=>handleButton('50')}>50%</button>
              <input type="text" placeholder="Custom" className="select-input"/>
            </div>
          </div>
          <div className="people-available">
            <span>Number of people</span>
            <input type="text" className="profile" value={people} onChange={(e)=> totalAmount(e)}  />
          </div>
        </div>
        <div className="result-container">
          <div className="results">
          <div className="tip-amount">
            <div className="text">
              <h3>Tip Amount</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">${tip}</div>
          </div>
          <div className="total-amount">
            <div className="text">
              <h3>Total</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">${total}</div>
          </div>
          <button className="btn">RESET</button>
          </div>
          
          
        </div>
      </div>

    </main>
  );
};

export default page;
