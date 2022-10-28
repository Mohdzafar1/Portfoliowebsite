import React from 'react'
import "../Style/About.css"
import  aboutimg from "../Images/bg_1.png"
import img1 from "../Images/about.jpg"
const About = () => {
  return (
    <div>
       <section id="bg-black" className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <figure>
                <img src={aboutimg} id="about-img"/>
              </figure>
            </div>
            <div className="col-lg-6">
             <h1 className='display-4 fw-bold text-warning'>About Me</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quisquam culpa, voluptates deserunt a voluptatum rerum. Quae, ab? Eos, fugit! Ad blanditiis eos provident officia!</p>
              <span className='display-6 text-light'>Name:-</span>
              <span className="display-6">Mohd Zafar</span><br></br>

              <span className='display-6 text-light'>Date of Birth:-</span>
              <span className="display-6">November 19,2000</span><br></br>

              <span className='display-6 text-light'>Address:-</span>
              <span className="display-6">India,UK</span><br></br>

              <span className='display-6 text-light'>Zip Code:-</span>
              <span className="display-6">012547</span><br></br>
              
              <span className='display-6 text-light'>Email:-</span>
              <span className="display-6">mohdzafar@gmail.com</span><br></br>
              <span className='display-6 text-light pb-4'>Phone:-</span>
              <span className="display-6">+91001010101101</span><br></br><br></br>
                  <p className="text-bg-warning w-50">120<span>Project Completed</span></p>

                  <a href={img1} download className='btn  btn-outline-warning btn-yellow'>DOWNLOAD CV</a>
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}

export default About