import React from 'react'
import "../Style/Project.css"
import img1 from "../Images/project1.png"
import img2 from "../Images/project2.png"
import img3 from "../Images/project3.png"
import img4 from "../Images/project4.png"
import img5 from "../Images/project5.png"
import img6 from "../Images/project6.png"


const Project = () => {
  return (
    <div>
        <section id="bg-black" className='py-5'>
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className='display-4 text-center fw-bold text-warning'>Projects</h1>
         <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laborum optio voluptatem repellendus ex dolorem.</p>
          </div>
        </div>
        {/* project frist */}
              <div className="row">
                <div className="col-lg-6 pt-5">
                  <a href="https://movie-netflix1.netlify.app/">
                  <figure>
                    <img src={img1} id="project-img1"/>
                  </figure>
                  </a>
                </div>
                <div className="col-lg-3 pt-5">
                <a href="https://relaxed-crumble-7108fa.netlify.app/">
                  <figure>
                    <img src={img2} id="project-img2"/>
                  </figure>
                  </a>
                </div>
                <div className="col-lg-3 pt-5">
                <a href="https://maketripseasy.netlify.app/home">
                  <figure>
                    <img src={img3} id="project-img2"/>
                  </figure>
                  </a>
                </div>
              </div>

 {/* next project */}
              <div className="row">
                <div className="col-lg-3 pt-5">
                  <a href="https://my-1portfolio.netlify.app/">
                  <figure>
                    <img src={img4} id="project-img3"/>
                  </figure>
                  </a>
                </div>
                <div className="col-lg-3 pt-5">
                <a href="https://sage-pony-a56bfb.netlify.app/">
                  <figure>
                    <img src={img5} id="project-img4"/>
                  </figure>
                  </a>
                </div>
                <div className="col-lg-6 pt-5">
                <a href="https://mohdzafar1.github.io/courseweb.github.io/">
                  <figure>
                    <img src={img6} id="project-img1"/>
                  </figure>
                  </a>
                </div>
              </div>

       </div>
        </section>
    </div>
  )
}

export default Project
