import React from 'react'
import './Quotations.css'
import data from '../../../Data/data.json'
const Quotations = () => {
  return (
    <div className="quotations">
            <div className="container">
                <div className="quotations-container">
                    <div className="quotations-img">
                        <img src="/img/services.png" alt=""  />
                    </div>
                    <div className="quotations-information">
                        <h4>REQUEST FREE QUOTE</h4>
                        <p>Send your request using the form and you will get a free estimation</p>
                        <form action="" method="post">
                            <input type="text" placeholder="John Smith"/>
                            <input type="number" placeholder="Your Phone"/>
                            <textarea placeholder="Your Message here ..."></textarea>
                            <div className='form-button'>
                                <button>SEND REQUEST</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
         </div>
  )
}

export default Quotations 