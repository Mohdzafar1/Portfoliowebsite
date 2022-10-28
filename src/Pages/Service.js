import React from 'react'
import  "../Style/Service.css"

const Service = () => {
  return (
    <div>
      <section id="bg-black" className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-2 text-center">
            <h1 className='display-4  text-warning fw-bold'>Services</h1>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in earum quo laudantium, sapiente necessitatibus nesciunt tenetur reprehenderit est officiis quia maiores quos doloremque laboriosam sit! Accusantium laborum non dolorum!</p>
          </div>
        </div>
          <div className="row pt-5">
            <div className="col-lg-4 pt-2 text-center">
                <div className="card"id="card-bg">
                  <div className="card-img-top text-warning  py-3">
                  <i class="fas fa-laptop-code fa-3x"></i>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>Web_Design</h3>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-lg-4 pt-2 text-center">
                <div className="card"id="card-bg">
                  <div className="card-img-top text-warning  py-3">
                  <i class="fas fa-atom  fa-3x"></i>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>Phtography</h3>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-4 pt-2 text-center">
                <div className="card"id="card-bg">
                  <div className="card-img-top text-warning  py-3">
                  <i class="fas fa-code   fa-3x"></i>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>Web developer</h3>
                    </div>
                  </div>
                </div>
            </div>
           
          </div>

{/* second row icon */}
          <div className="row pt-5">
            <div className="col-lg-4 pt-2 text-center">
                <div className="card"id="card-bg">
                  <div className="card-img-top text-warning  py-3">
                 
                  <i class="fas fa-code fa-3x"></i>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>App Developing</h3>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-lg-4 pt-2 text-center">
                <div className="card"id="card-bg">
                  <div className="card-img-top text-warning  py-3">
                  <i class="fas fa-code-branch fa-3x"></i>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>Branding</h3>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-4 pt-2 text-center">
                <div className="card"id="card-bg">
                  <div className="card-img-top text-warning  py-3">
                  <i class="fas fa-random fa-3x"></i>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>Product Strategy</h3>
                    </div>
                  </div>
                </div>
            </div>
           
          </div>


       </div>
      </section>

    </div>
  )
}

export default Service