import React from 'react'
import Slider from "react-slick";
import staff1 from "../Images/staff-1.jpg"
import staff2 from "../Images/staff-2.jpg"
import staff3 from "../Images/staff-3.jpg"
import staff4 from "../Images/staff-4.jpg"
import "../Style/Team.css"


const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  

  return (
    <div>
       <section id="bg-black" className='pb-5'>
       <div className="container">
        <div className="row text-center py-5">
            <div className="col-lg-12">
                <h1 className='display-4 text-warning fw-bold'>Teams</h1>
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, consectetur?</p>
            </div>
        </div>
       
        <Slider {...settings}>
          <div>
            <figure>
                <img src={staff1}  alt="staff"  id="img-slider"/>
            </figure>
            <h3 className='text-light'>MOHD ZAFAR</h3>
          </div>
          <div>
          <figure>
                <img src={staff2}  alt="staff"  id="img-slider"/>
            </figure>
            <h3 className='text-light'>RAJ KUMAR</h3>
          </div>
          <div>
          <figure>
                <img src={staff3}  alt="staff"  id="img-slider"/>
            </figure>
            <h3 className='text-light'>REHAN KHAN</h3>
          </div>
          <div>
          <figure>
                <img src={staff4}  alt="staff"  id="img-slider"/>
            </figure>
            <h3 className='text-light'>ROHAN RAWAT</h3>
          </div>
          <div>
          <figure>
                <img src={staff1}  alt="staff"  id="img-slider"/>
            </figure>
            <h3 className='text-light'>REHAN KHAN</h3>
          </div>
          <div>
          <figure>
                <img src={staff2}  alt="staff"  id="img-slider"/>
            </figure>
            <h3 className='text-light'>MOHD  ZAFAR</h3>
          </div>
        </Slider>
         
          
       
       </div>
      </section>
       
       
       
      </div>

  
  )
}

export default Team