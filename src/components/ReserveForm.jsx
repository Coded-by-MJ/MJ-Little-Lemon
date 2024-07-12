import { useState, useRef } from 'react';
import { LiaAngleDownSolid, LiaAngleUpSolid  } from "react-icons/lia";
import  DatePicker from "react-datepicker";


import { FaCalendarDays, FaClock  } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from 'react-router-dom';

import { useData } from "./FormObjContext";
import Info from './Info'

import "../styles/reserveform.css";


const ReserveForm = ({ handleShow } ) => {

    const { dataObj } = useData();
    const timeRef = useRef(null);

    const [guests, setguests] = useState(dataObj.guests || '2 guests');
    const [dateVal, setDateVal ] = useState(dataObj.dateVal || new Date());
    const [timeVal, setTimeVal ] = useState(dataObj.timeVal || '14:00');

    const [guestOnInput, setGuestOnInput] = useState(false);
  
    // const navigate = useNavigate();


    
    
   



return (

      <>
        <div className="reservation-form">

            <div className="input-container">
               <label htmlFor="guestLists">Party Size</label><br/>
                
                <div className="input-field">
                <select id="guests" name="guestLists"
                value={guests}
                onBlur={()=> setGuestOnInput(false)}
                onFocus={()=> setGuestOnInput(true)}
                onChange={(e) => setguests(e.target.value)}
                >
                 <option value="1 guest">1 guest</option>
                 <option value="2 guests" >2 guests</option>
                 <option value="3 guests">3 guests</option>
                 <option value="4 guests">4 guests</option>
                 <option value="5 guests">5 guests</option>
                 <option value="6 guests">6 guests</option>
                 </select>
                 {
                    guestOnInput 
                  ? <LiaAngleUpSolid  className='arrowdown-icon'/>
                  : < LiaAngleDownSolid  className='arrowdown-icon'/> 
                  }
                </div>
          </div>

          <div className="input-container">
                  <label htmlFor="date">Date</label> <br />
                 <div className="input-field date-field">
                 <DatePicker
                   selected={dateVal}
                   onChange={(date) => setDateVal(date)}
                   required={true}
                     />
                  <FaCalendarDays  className='calendar-icon'/>
                  </div>
            </div>


          <div className="input-container">
                <label htmlFor="time">Time</label> <br />
                 <div className="input-field">
                   <input  
                     type='time'
                     value={timeVal}
                     onChange={(e) => setTimeVal(e.target.value)}
                     name="time"
                     ref={timeRef}
                   />
                   <FaClock className='time-icon'
                    onClick={() => timeRef.current.showPicker()}
                    />
                </div>
         </div>
      
        </div>

          <Info />


          <div className="reserve-btn">
              <button type="button"
               onClick={handleShow}
              >
                Reserve Now
            </button>
          </div>

      </>


    )


}


export default ReserveForm