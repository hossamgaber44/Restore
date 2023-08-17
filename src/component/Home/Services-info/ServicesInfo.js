import React from 'react'
import './ServicesInfo.css'
import data from '../../../Data/data.json'

const ServicesInfo = () => {
  return (
    <section id='services' className="Services">
    <div className="container">
        <div className="services-title">
            <h2>Our Repair Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam et cum dolor qui nihil enim adipisci, omnis ipsum, commodi odio quaerat mollitia a nostrum.</p>
        </div>
        <div className="services-box">
            {data.repair_services.map((i)=>(
                <div key={i.id} className="servic">
                    <i className={i.icon}></i>
                    <h3><b>{i.title}</b></h3>
                    <p>{i.body}</p>
                    <div className="btn-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default ServicesInfo