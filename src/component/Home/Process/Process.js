import React from 'react'
import './Process.css'
import data from '../../../Data/data.json'

const Process = () => {
  return (
    <section id='process' className="process">
            <div className="container">
                <div className="process-header">
                    <h2>Our Process</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod laudantium</p>
                </div>
                <div  className="process-item">
                    {data.process.map((i)=>(
                        <div key={i.id} className="item">
                           <div className="title">
                               <span>{i.device_num}</span>
                               <h4>{i.device_type}</h4>
                           </div>
                           <div className="process-information">
                               <p>{i.information}</p>
                           </div>
                       </div>
                    ))}
                </div>
            </div>
         </section>

  )
}

export default Process