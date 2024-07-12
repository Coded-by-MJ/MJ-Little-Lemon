import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import  HomeForm  from  "../components/HomeForm";
import { FaAnglesRight } from "react-icons/fa6";

import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import  "../styles/homepage.css";
import  herologo from "../assets/images/picture-logo-dark.png";

import bass from   "../assets/images/grilled-bass.jpg";
import lamb from   "../assets/images/lamb-kebab.jpg";
import hummus from   "../assets/images/hum-mus.jpg";
import juice from   "../assets/images/lemon-juice.jpg";
import silverware from  "../assets/images/silverware.png";
import coral from   "../assets/images/coral.png";
import twoFish from  "../assets/images/two-fish.png";
import anchor from  "../assets/images/anchor.png";


import marioAndadrian from "../assets/images/mario-and-adrian.jpg";
import oister from "../assets/images/Oister.png";





const FirstRow = () => {

  const heroCards = [bass, lamb, hummus, juice];
   const cardRefs = useRef([]);
   const carouselRef = useRef(null);

useEffect(() => {
 const handleSlider = () => {
  if (cardRefs.current.length === 0) return;

    let startX = cardRefs.current[0].offsetWidth - carouselRef.current.offsetLeft;
    let scrollLeft = carouselRef.current.scrollLeft;
  
    const walk = Math.round(startX + scrollLeft);
    carouselRef.current.scrollLeft = walk;
  
    
    if (scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth) {
         carouselRef.current.scrollLeft = 0;
    }
  }

  handleSlider();
  const intervalID = setInterval(handleSlider, 3000);

  return () => clearInterval(intervalID);
}, [])


  return (
    <div className="row-wrap row">
    <div className="col-12 first-content">
      <div className="hero-content">
      <img className="first-bg"  src={herologo} alt="little-lemon-logo" />
      <h1 className="first-heading">Mediterranean Cuisines</h1>
      <p className="first-para">Savor a unique Mediterranean journey at Little Lemon, 
        a haven for food enthusiasts.
         <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-top">Go to Menu</Tooltip>}
            >
            <span>
             <Link to="/menu"  className="first-link">Our Menu <FaAnglesRight /></Link>
            </span>
          </OverlayTrigger>
          features a delightful array of Mediterranean treasures, from savory mezze platters with rich hummus and falafel to succulent lamb kebabs and perfectly grilled sea bass. 
      </p>
      </div>

       <div className="hero-bg" ref={carouselRef}>
           
           {
            heroCards.map((hero, index) => (
              <figure className="card" key={index} 
              ref={el => (cardRefs.current[index] = el)}>
               <img src={hero} alt="grilled-bass"/>
               </figure>
            ))
           }
        </div> 
  </div>
</div>  
  )
}









const SecondRow = () => {


 return (
    <div className="row row-wrap">
    <div className="col-md-6 col-lg-6 post-two">
      <div>
           <img src={silverware} alt="silverware" className="second-image"  width="175" height="240" />
           <h2 className="second-heading">Reserve a Table</h2>
       </div>
    </div>

     <div className="col-md-6 col-lg-6 home-form">
    
            <HomeForm  />
   
      </div>
   </div>  
)

}




const ThirdRow = () => {


  return (
    <div className="row row-wrap">
    <div className="col-md-6  col-lg-6 home-history">
         <img src={marioAndadrian}  alt="Picture of Mario and Adrian" />
     </div>
 
    <div className="col-md-6 col-lg-6 post-three">
         <img src={oister} alt="Oister" className="third-bg"  width="248" height="180" />
         <div className="home-history-content">
          <h2 className="third-heading">Our History</h2>
          <p className="third-para">Little Lemon is owned by two Italian brothers,
             Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          </p>
         
          <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-top">Go to About</Tooltip>}
            >
             <span>
              <Link to="/about"  className="third-link" >Dive in <FaAnglesRight /></Link>
             </span>    
          </OverlayTrigger>
         </div>
   </div>
 </div>
  )
}



const FourthRow = () => {
  return (
    <div className="row row-wrap">
    <div className="col-md-12  col-lg-12 fourth-content">
          <div className="content-wrapper">
            <h2 className="fourth-heading">Local & Sustainable</h2> 
            <p className="fourth-para">Little Lemon embodies sustainability and community values. With a commitment to ocean-friendly practices, we prioritize responsibly sourced seafood, ensuring the health of marine ecosystems. By emphasizing local ingredients, we support nearby farmers and reduce their carbon footprint, fostering a sense of community.</p>
          </div>

          <div className="values-icon-wrapper">
           <div>
            <img src={coral} alt="coral" className="img-icon" />
            <p className="img-text">Ocean Friendly</p>
           </div>

           <div>
            <img src={anchor} alt="anchor"  className="img-icon" />
            <p className="img-text">Local</p>
           </div>

           <div>
            <img src={twoFish} alt="two fish" className="img-icon" />
            <p className="img-text">Seasonal</p>
           </div>
          </div>

    </div>
  </div> 
  )
}














const HomePage = () => {
  return (
  
    <main className="container-fluid">
     <FirstRow />
     <SecondRow />
      <ThirdRow />
      <FourthRow />
    </main>
  )
}

export default HomePage