import React from 'react'
import './Plans.css'
import data from '../../../Data/data.json'
const Plans = () => {
  return (
    <section id='plan' className="plans">
            <div className="container">
                <div className="plans-container">
                    <div className="plans-title">
                        <h2>Our Repair Plan</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, praesentium repudiandae. Illum illo nulla perspiciatis dolorum porro accusantium rem temporibus magnam magni consequuntur?</p>
                    </div>
                    <div className="plans-containt">
                        {data.repair_plan.map((i)=>(
                            <div key={i.id} className="plan">
                               <h4><b>{i.type}</b></h4>
                               <div className="plan-p">
                                  <span><b>{i.price}</b></span><span><b>$</b></span>
                               </div>
                               <p>@ {i.place}</p>
                               <p>{i.information}</p>
                               <button>CHECK THIS</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Plans