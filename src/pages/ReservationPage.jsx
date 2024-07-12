import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import { Modal} from 'react-bootstrap';
import { Link }  from "react-router-dom";

import styles from "../styles/reservepage.module.css";
import ReserveForm from "../components/ReserveForm";





const ReservationPage = () => {


  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);



  return (

    <main className={`${styles.main} container-fluid`}>
    <div className={styles.reserve_title}>
      <h1>Make a reservation</h1>
      <p>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
    </div>



  
       <ReserveForm handleShow={handleShow}/>

    







      <Modal show={showModal} onHide={handleClose}
           aria-labelledby='myModal'
           backdrop="static"
          >
           <Modal.Header >
              <Modal.Title >
              <FaCircleInfo  className={styles.info}/>
                 Info!
              </Modal.Title>
           </Modal.Header>
           <Modal.Body>
              <p> 
                Hello User! Please be advised that this website is designed for practical purposes,
                 and no data is stored. 
                For a fully functional website tailored to your specific needs, kindly contact MJ
                for professional assistance. Thank you for your understanding.
              </p>
           </Modal.Body>
            <Modal.Footer>
         
            <Link 
              to="/"
              className="btn btn-danger"
             >
              Go to Home
            </Link>
            <button type="button" className="btn btn-primary"
              onClick={handleClose}
            >
              OK

            </button>
            </Modal.Footer>
        </Modal>
    </main>
  )
}

export default ReservationPage