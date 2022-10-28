import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section id="bg-black">
      <div className="container">
        <div className="row py-3">
            <div className="col-lg-3">
                <h4 className='text-light'>About</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui saepe velit ab ea corrupti</p>
                <i class="fa-brands fa-twitter fa-2x text-primary me-3"></i>
                <i class="fa-brands fa-facebook-f fa-2x text-primary me-3"></i>
                <i class="fa-brands fa-instagram fa-2x text-danger"></i>
            </div>

            <div className="col-lg-3 ">
              <h4 className='text-light ms-3'>Link</h4>
              <Link to="/" className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Home</Link><br></br>
              <Link to="/about" className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>About</Link><br></br>
               <Link to="/service"className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Services</Link><br></br>
               <Link to="/project"className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Project</Link><br></br>
               <Link to="/contact"className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Contact</Link>
            </div>
            <div className="col-lg-3 ">
              <h4 className='text-light ms-3'>Services</h4>
              <Link to="/" className="text-muted text-decoration-none">
              <i class="fa-solid fa-arrow-right text-warning me-3"></i>Web Design
              </Link><br></br>
              <Link to="/about" className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Web Development</Link><br></br>
               <Link to="/service"className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Business Strategry</Link><br></br>
               <Link to="/project"className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Data Analysis</Link><br></br>
               <Link to="/contact"className="text-muted text-decoration-none"><i class="fa-solid fa-arrow-right text-warning me-3"></i>Graphic Design</Link>
            </div>

            <div className="col-lg-3 ">
              <h4 className='text-light ms-3'>Have a Questions</h4>
              <Link to="/" className="text-muted text-decoration-none"><i class="fa-solid fa-location-dot text-warning me-3"></i>India,Uk 124045</Link><br></br>
              <Link to="/about" className="text-muted text-decoration-none"><i class="fa-sharp fa-solid fa-phone text-warning me-3"></i>+91001010101101</Link><br></br>
               <Link to="/service"className="text-muted text-decoration-none"><i class="fa-solid fa-envelope text-warning me-3"></i>mohdzafar@gmail.com</Link><br></br>
               
            </div>
    
        </div>
                 
              <footer>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <p className='text-light'>Copyright  <i class="fa-regular fa-copyright"></i> 2022-2050 All Rights reserved | This website for developer</p>
                  </div>
                </div>
              </footer>    

      </div>
      </section>
    </div>
  )
}

export default Footer
