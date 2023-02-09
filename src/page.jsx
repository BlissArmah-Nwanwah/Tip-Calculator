import React, { useEffect } from "react";
import image from "./assets/logo.svg";
import dollar from "./assets/icon-dollar.svg";
import { useState } from "react";

const page = () => {

  const [bill,setBill] = useState('')
  const [button,setButton] =useState('')
  const [tip,setTip] =useState(0)
  const [customTip,setCustomTip] = useState()
  const [people,setPeople] = useState('')
  const [total,setTotal] = useState(0)
  

  const handleButton = (value) => {
    
    let all = (parseInt(bill)*value)/100
    let result = all / parseInt(people)
    setTip(result)

    setTotal(result+(bill/people))
    // console.log(total, tip);
   
  }

  const handleChange = () => {
    // setCustomTip(e.target.value)
    let all = (parseInt(bill)*parseInt(customTip))/100
    let result = all / parseInt(people)
    setTip(result)

    setTotal(result+(bill/people))
    console.log(total, tip);
  } 
  
 
  const handleReset = () =>{
    setBill(0)
    setPeople(0)
    setTotal(0)
    setButton(0)
    setTip(0)
    
  }



  useEffect(() => {
    if(bill > 0 && people > 0) {
      if(customTip > 0 ){
        handleChange()
      }
      if (button > 0  ) {
        handleButton(button)
      }

    }

  }, [button,customTip])
  
  
  


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
              <input type="text"  className="select-input" onChange={(e)=> setCustomTip(e.target.value)}    />
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
            
            <div className="figure">${tip.toFixed(2)}</div>
          </div>
          <div className="total-amount">
            <div className="text">
              <h3>Total</h3>
              <span>/ person</span>
            </div>
            
            <div className="figure">${total.toFixed(2)}</div>
          </div>
          <button className="btn" onClick={handleReset}>RESET</button>
          </div>
          
          
        </div>
      </div>

    </main>
  );
};

export default page;
