import React from 'react'
import './Gallerys.css'
const Gallerys = () => {
  return (
    <section id='gallery' className="gallerys" >
    <div className="gallerys-title">
        <h3>Our Repair Gallery</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quisquam optio obcaecati, ipsum veritatis maiores distinctio minima sapiente!</p>
    </div>
    <div className="gallerys-information">
        <div className="gallerys-img">
            <div className="image-l">
                <div className="image-m img">
                    <img src="img/Gallerys 1.jpg" alt="" />
                </div>
                <div className="image-m img">
                    <img src="img/Gallerys 2.jpg" alt="" />
                </div>
            </div>
            <div className="image-l">
                <div className='img'>
                    <img src="img/Gallerys 3.jpg" alt="" />
                </div>
            </div>
            <div className="image-l">
                <div className='img'>
                    <img src="img/Gallerys 4.jpg" alt="" />
                </div>
            </div>
            <div className="image-l">
                <div className="image-m img">
                    <img src="img/Gallerys 5.jpg" alt="" />
                </div>
                <div className="image-m img">
                    <img src="img/Gallerys 6.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Gallerys