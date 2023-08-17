
import React from 'react'
import './Experience.css'
import data from '../../../Data/data.json'
const Experience = () => {
  return (
    <section id='experience' className="services-information">
    <div className="container">
        {data.experience.map((i)=>(
           <div key={i.id} className="Services-parent">
                <div className="Services-img">
                   <img src={i.img} alt="" />
                </div>
                <div className="services-info">
                <div className="header">
                    <span>{i.number_Of_Years}</span>
                    <h3><b>{i.title}</b></h3>                     
                </div>
                <p>{i.information1}</p>
                <p>{i.information2}</p>
                <h4>CALL US TO GET FREE QUOTES</h4>
                <div>
                    <button>{i.phone}</button>
                    <button><span>{i.day}</span>{i.month}</button>    
                </div>
            </div>
           </div>
         ))}
    </div>
    </section>
  )
}
export default Experience