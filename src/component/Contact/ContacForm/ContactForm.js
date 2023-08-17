import React from 'react'
import './ContactForm.css'
import { Link } from 'react-router-dom'
const ContactForm = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="contact-parent">
                    <div className="contact-form contact-flex">
                        <h2>Say hello to US</h2>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea type="text" placeholder="Your message here"></textarea>
                            <button onClick={(e) => e.preventDefault()} className="form-btn">SEND</button>
                        </form>
                    </div>
                    <div className="contact-data contact-flex">
                        <div className="contact-information-title">
                            <h2>Contact US</h2>
                        </div>
                        <div className="contact-information">
                            <div className="contact-us-icon">
                                <i className="fa-solid fa-location-dot"></i>
                                <p> Egypt,Cairo,Mokattam</p>
                            </div>
                            <div className="contact-us-icon">
                                <i className="fa-solid fa-phone"></i>
                                <p>+20 01152512799</p>
                            </div>
                            <div className="contact-us-icon">
                                <i className="fa-solid fa-envelope"></i>
                                <p>hossamgaber027@gmail.com</p>
                            </div>
                            <div className="contact-us-icon">
                                <i className="fa-solid fa-earth-americas"></i>
                                <p>https://www.yourdomain.com</p>
                            </div>
                        </div>
                        <div className="social">
                            <h2>We are Social</h2>
                        </div>
                        <div className="social-icon">
                            <Link to="https://www.facebook.com/profile.php?id=100054128583713&mibextid=ZbWKwL" > <i className="facebook fab fa-facebook-f"></i></Link>
                            <Link to="https://github.com/hossamgaber44" ><i className="github fa-brands fa-github"></i></Link>
                            <Link to="https://instagram.com/hossamgaberhamed?igshid=MzNlNGNkZWQ4Mg==" ><i className="instagram fab fa-instagram"></i></Link>
                            <Link><i className="twitter fab fa-twitter"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm