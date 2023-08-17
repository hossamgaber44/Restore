import React from 'react'
import './AwesomeTeam.css'
import data from '../../../Data/data.json'
import { Link } from 'react-router-dom'
const AwesomeTeam = () => {
  return (
    <section id='team' className="team" >
            <div className="container">
                <div className="team-information">
                    <div className="team-title">
                        <h2>Our Awesome Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptas., ipsum dolor sit amet consectetur adipisicing elit. Rem, provident. Vero maxime delectus quo rem velit quaerat, dolore maiores iure!</p>
                    </div>
                    <div className="awesome-team">
                        {data.awesome_team.map((i)=>(
                            <div key={i.id} className="image">
                               <div className="awesome-team-img">
                                  <img src={i.img} alt=""  />
                               </div>
                               <h4>{i.name}</h4>
                               <p>{i.occupation}</p>
                               <div className="social-media">
                                  <Link> <i className="fab fa-facebook-f"></i></Link>
                                  <Link><i className="fab fa-twitter"></i></Link>
                                  <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </section>
  )
}

export default AwesomeTeam