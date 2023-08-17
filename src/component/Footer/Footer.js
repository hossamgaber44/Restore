import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="footer" data-aos="fade-up" data-aos-duration="2000">
    <div className="container">
        <div className="footer-container">
            <div className="footer-box">
                <div className='footer-img'>
                   <img src="img/footer-logo.png" ></img>
                </div>
                <h5>Repair Service</h5>
                <p>Restore is a U.S based computer repaire service conter. basically we repair all major brands of PCs, laptops, Smartphone, Tablet, Flash Drive and Gaming Console devices issues.</p>
                <div className="footer-icon">
                </div>
            </div>
            <div className="footer-box">
                <h3><b>shop info</b></h3>
                <div className="footer-info">
                    <div className="footer-data">
                        <div className="shop-title">Address:</div>
                        <div className="shop-data">965 East Avenu,Sector 9 Russel Squire, UK</div>
                    </div>
                    <div className="footer-data">
                        <div className="shop-title">Phone:</div>
                        <div className="shop-data">+20 01152512799</div>
                        <div className="shop-title">Email:</div>
                        <div className="shop-data">hossamgaber027@gmail.com</div>
                    </div>
                    <div className="footer-data">
                        <div className="shop-title">Hours:</div>
                        <div className="shop-data">Mon-Fri(9am-6pm)</div>
                    </div>
                </div>
            </div>
            <div className="footer-service">
                <h3><b>Services</b></h3>
                <ul type="squire">
                    <li>Laptop Repair</li>
                    <li>iphone Repair</li>
                    <li>ipad Repair</li>
                    <li>Tablet Repair</li>
                    <li>Smartphone Repair</li>
                    <li>Gadget Repair</li>
                    <li>Recover Data</li>
                    <li>Backup Data</li>
                </ul>
            </div>
            <div className="footer-newsletter">
                <h3><b>Newsletter</b></h3>
                <p>signup for regular newsletter and stay upto data width our latest news</p>
                <form>
                    <input placeholder="Your email address"/>
                    <i className="fa-solid fa-greater-than"></i>
                </form>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Footer