import React from 'react'
import "../Style/Contact.css"
import contactimg from "../Images/about.jpg"

const Contact = () => {
  return (
    <div>
         <section id="bg-black">
         <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1 className='display-4 text-warning fw-bold'>Contact us</h1>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illo magni temporibus minus inventore rem dolorum mollitia iure consectetur est?</p>
          </div>
        </div>
          <div className="row text-center">
            <div className="col-lg-3 py-5">
            <i class="fas fa-map-marker fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-light pt-3'>ADDRESS</h6>
            <p className="text-light">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-lg-3 py-5">
            <i class="fas fa-phone-alt fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-light pt-3'>PHONE NUMBER</h6>
            <p className="text-light">+9182 54789 5120</p>
            </div>
            <div className="col-lg-3 py-5">
            <i class="fas fa-paper-plane fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-light pt-3'>EMAIL ADDRESS</h6>
            <p className="text-light">mohdzafar@gamil.com</p>
            </div>
            <div className="col-lg-3 py-5">
            <i class="fas fa-globe-asia fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-light pt-3'>WEBSITE</h6>
            <p className="text-light">www.Myportfolio.com</p>
            </div>
          </div>

           {/* add form */}
           <div className="row pb-5  pt-3 justify-content-center">
           
             <div className="col-lg-5 color">
               <figure>
                <img src={contactimg} alt="file" id="contact-img"/>
               </figure>
            </div>
             <div className="col-lg-5 bg-light">
                    <form action="https://formspree.io/f/xpznyyke" method="POST" className="pt-5">
                      <input type="text"placeholder='Your Name'required autoComplete='off'className='form-control shadow-none' name="username"/><br></br>
                      <input type="email"placeholder='YourEmail'required autoComplete='off'className='form-control shadow-none' name="useremail"/><br></br>
                      <input type="text"placeholder='Subject'required autoComplete='off'className='form-control shadow-none' name="subject"/><br></br>
                      <textarea name="Message" cols="30" rows="10" placeholder='Enter Your Messages' className='form-control shadow-none'/><br></br>
                      <input type="submit"value="Send Message" className='btn btn-warning' id=""/>
                    </form>
             </div>
             
           </div>

{/* add google map */}
  
            <div className="row pb-5">
              <div className="col-lg-12">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637222706!2d77.94709437962085!3d30.32540979244329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1666881313825!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
       </div>
         </section>
    </div>
  )
}

export default Contact
