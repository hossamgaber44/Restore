import React from 'react'
import './Guide.css'
import data from '../../../Data/data.json'
const Guide = () => {
  return (
    <section id='guide' className="guide">
            <div className="container">
                <div className="guide-title">
                    <h3>Free Repair Guide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora vel enim consectetur quia sit rerum est nemo perspiciatis!</p>
                </div>
                <div className="guide-information">
                    {data.repair_guide.map((i)=>(
                        <div key={i.id} className="guide-img">
                        <div>
                            <img src={i.img} alt="" />
                        </div>
                        <span>{i.date}</span>
                        <h4>{i.title}</h4>
                        <p>{i.information}</p>
                    </div>
                    ))}
                </div>
                <div className="guide-btn">
                    <button><b>LOAD ALL GUIDES</b></button>
                </div>
            </div>
         </section>
  )
}

export default Guide