import  React from "react"
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"
import Project from "./Pages/Project"
import Skills from "./Pages/Skills";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Pages/Footer";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Navbar/>
      <Routes>
        <Route  path="/" element= {<Home/>}/>
        <Route  path="/about" element= {<About/>}/>
        <Route  path="/service" element= {<Service/>}/>
        <Route  path="/skills" element= {<Skills/>}/>

        <Route  path="/project" element= {<Project/>}/>
        <Route  path="/contact" element= {<Contact/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
