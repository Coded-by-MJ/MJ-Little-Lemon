import { useEffect, useState} from 'react'
import { LuCopyright } from "react-icons/lu";


import fish from "../assets/images/footer-fish.png"
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
     const [showText, setShowText] = useState(false);
     const [email, setEmail] = useState("");
     const [showTopBtn, setShowTopBtn] = useState(false);

   const handleEmailForm = (e) => {
    e.preventDefault();
         setEmail('');
         setShowText(true);
    
        setTimeout( () => setShowText(false), 2000);
         return;
     } 

   useEffect(()=> {
      const showHideScrollTopButton = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          setShowTopBtn(true);
      } else {
         setShowTopBtn(false);
      }
    }
    window.addEventListener('scroll', showHideScrollTopButton);

    return () => {
      window.removeEventListener('scroll', showHideScrollTopButton);
    };
  },[]);

 const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
 

    
  return (
    <footer className="container-fluid">
    <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6 footer-info">

                    <div className="footer-content">
                     <h2 className="footer-heading">Don't Be ShellFish</h2>
                     <p className="footer-para">Join our mailing list and receive news and offers</p>
                    </div>


                    <div className="footer-email">
                          <form method="post" onSubmit={handleEmailForm}> 
                            <label htmlFor="send-email" className="email-label">Enter your email here**</label>
                            <div className="input-group">
                                <input type="email" 
                                   className="form-control" 
                                   id="send-email" 
                                   placeholder="Email"
                                   name="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required/>
                                <button type="submit" className="email-button">Join</button>
                            </div>
                          </form>
                    </div>

            { showText &&  <span id="submitText"  className="email-submit-text">Thanks for Submitting!</span> }

                  

            </div>

            <div className="col-md-12 col-lg-6 col-xl-6 contact-info">
                 <div className="footer-contact">
                  <p className="phone-number">903-951-7466</p>
                  <p className="email-address"><a href="mailto:miracleosemudiahen@hotmail.com">miracle******@hotmail.com</a></p>
                  <p className="address">109 N Dearborn St, Chicago, IL 60602, USA</p>
                </div>
                  
              <div className="social-media-container">
  
                        <a href="https://www.instagram.com/MiracleJustice_" className="social-button"  target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#495e57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
           
                        <a href="https://x.com/MiracleJustice_" target="_blank" className="social-button">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                          height="38" width="38"
                           viewBox="0 0 512 512" 
                          fill="#495e57" >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 
                            318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 
                            389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                            />
                        
                          </svg>
                        
                        </a>

            
                        <a href="https://wa.me/+2349039517466" className="social-button"  target="_blank" >
                          <svg xmlns="http://www.w3.org/2000/svg" height="38" width="38" viewBox="0 0 448 512" fill="#495e57">
                                    
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 
                                       111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 
                                       341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 
                                      82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 
                                       184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 
                                       4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 
                                       1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 
                                       15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                   
                           </svg>
                        </a>
              
              </div>

                <img src={fish} alt="fish"  className="footer-img" width="145" height="157" />


                 
            </div>

            <div className="copyright"><span><LuCopyright /> 2023 Little Lemon. Coded by MJ</span></div>
     </div>
    { showTopBtn && <button id="scrollToTopBtn"
     onClick={scrollToTop}
    ><FaArrowUp /></button>
    }
</footer>
  )
}

export default Footer