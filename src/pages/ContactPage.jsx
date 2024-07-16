import { FaAnglesRight } from "react-icons/fa6";
import { Form } from 'react-bootstrap';
import { useState, memo } from "react";
import logolight from "../assets/images/picture-logo-light.png";
import logoDark from "../assets/images/Logo_Dark.png";
import styles from "../styles/contactpage.module.css";


const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.426850553693!2d-87.63182862538933!3d41.88367636506714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbac5e5c83f%3A0x10c9953b492e70d8!2s109%20N%20Dearborn%20St%2C%20Chicago%2C%20IL%2060602%2C%20USA!5e0!3m2!1sen!2sng!4v1705491466713!5m2!1sen!2sng";

const ContactPage = () => {

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: "",
        email: "",
        phone: "",
        message: ''
    })
    const [showSuccessText, setShowSuccessText] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({...values, [name]: value}))
      }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            setShowSuccessText(true);
         
         
        }
    
        setValidated(true);

        setTimeout(() => {
           setShowSuccessText(false);
           setFormData({
            firstName: '',
            lastName: "",
            email: "",
            phone: "",
            message: ''
        });
        setValidated(false);
           
        }, 3000)
      };




  return (
    <main className={`${styles.main} container-fluid`}>
            <h1 className={styles.contact_heading}>Contact</h1>
           <div className={`${styles.contact_one} row`}>
                <div className="col-md-12 col-lg-12">
                    <div className={styles.map_wrapper}>
                    <div className={styles.map}>
                      <iframe src={mapSrc} width="100%" height="100%" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <img src={logolight} alt="little-lemon-logo" className={styles.contact_img} />
                    </div>
                </div>
           </div>
           <h2 className={styles.form_heading}>Have any Question?</h2>


           <div className={`row ${styles.contact_two}`}>
           <div className=" col-md-12 col-lg-6 col-xl-6 col-xxl-6">

            <div className={styles.my_contact}>
            <p className={styles.contact_phone}>Tel: 903-951-7466</p>  
            <p className={styles.contact_email}>Email: <a href="mailto:miracleosemudiahen@hotmail.com">miracle******@hotmail.com</a></p>
            </div>
         
           
             <Form method="post"  
                validated={validated}
                onSubmit={handleSubmit}
                className={`${styles.contact_form}  needs-validation`} 
                noValidate>
                    <div className="row mb-2">
                       <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <label className="col-form-label"htmlFor="firstName">Enter Your First Name</label>
                        <input type="text" className="form-control" 
                        name="firstName"
                         id="firstName"
                         value={formData.firstName}
                         onChange={handleChange}
                         placeholder="First Name" required/>
                       </div>
                       <div className="col-sm-12 col-md-6 col-lg-6">
                        <label className="col-form-label" htmlFor="lastName">Enter Your Last Name</label>
                        <input type="text" 
                          id="lastName"
                         value={formData.lastName}
                         onChange={handleChange}
                        className="form-control" name="lastName" 
                        placeholder="Last Name" required />
                       </div>
                    </div>
                     <div className="row mb-2">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                         <label className="col-form-label" htmlFor="email">Enter Your Email*</label>
                         <input type="email"
                         value={formData.email}
                         onChange={handleChange}
                         className="form-control" 
                         id="email"
                         name="email" placeholder="Email"
                          required />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <label className="col-form-label" htmlFor="phone">Enter Your Phone</label>
                         <input type="tel" 
                         value={formData.phone}
                           id="phone"
                         onChange={handleChange}
                         className="form-control" name="phone"
                          placeholder="Phone" />
                        </div>
                     </div>
                      <div className={`row ${styles.text_area}`}>
                          <div className="col-md-12 col-lg-12">
                            <label className="col-form-label" htmlFor="message">Enter Your Message</label>
                            <textarea rows="7"
                             value={formData.message}
                             onChange={handleChange}
                              id="message"
                            className="form-control" 
                            name="message" placeholder="Message" required></textarea>
                          </div>
                      </div>
                       <div className={`row ${styles.submit_area}`}>
                        <div className="col-md-12 col-lg-12  d-flex justify-content-center align-items-center">
                         <button type="submit" className={styles.contact_btn} 
                         >Submit <FaAnglesRight />
                         </button>
                       </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12  d-flex justify-content-center align-items-center">
                            { showSuccessText && <span  className={styles.contact_submit_text} >Thanks for Submitting!</span> }
                       </div>
                      </div>
                 </Form>
            </div>
             <div className="col-md-12 col-lg-6">
                  <div className={styles.res_contact}>
                   <p className={styles.contact_address}>
                     Address: 109 N Dearborn St, Chicago, IL 60602, USA
                   </p>
                   <img src={logoDark} alt="logo" className={styles.contact_logo} />
                    <p className={styles.contact_opening}>
                      Opening Hours: Monday - Friday: 2pm - 10pm; Saturday - Sunday: 2pm-11pm.
                    </p>
                   </div>
              </div>

            </div>
     </main>
  )
}

export default memo(ContactPage)