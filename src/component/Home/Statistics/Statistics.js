import React from 'react'
import './Statistics.css'
import data from '../../../Data/data.json'
const Statistics = () => {
  return (
    <section className="statistics">
            <div className="container">
                <div className="statistics-container">
                    <div className="statistics-title">
                        <h2>Our Statistics</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus veritatis asperiores amet libero, reiciendis nemo minima voluptatem.</p>
                    </div>
                    <div className="parent">
                        {data.statistics.map((i)=>(
                            <div key={i.id} className="statistics-information" data-goal="100">
                               <h1><b>{i.number}</b></h1>
                               <h4>{i.type} <span> {i.type1}</span></h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Statistics