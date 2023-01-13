import React from 'react'
import image from './assets/logo.svg'
import dollar from "./assets/icon-dollar.svg"

const page = () => {
  return (
  <main>
    <img src={image} alt="" className='logo' />
    <div className='container'>
        
        <div className="bill-container">
          <div className="bill">
          <span>BILL</span>
          <div>
            <input type="text" className='bill-icon' />
          </div>
          </div>
          <div className="select-tip">
          <span>Select Tip %</span>
          <div className="tip-button">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <button>Costum</button>
          </div>

          </div>
          

        </div>

    </div>
  </main>
  )
}

export default page