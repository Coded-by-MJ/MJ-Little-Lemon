import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";



const Info = () => {
    const [showInfo, setShowInfo] = useState(true);

  return (
    <div className={`alert alert-light alert-dismissible fade ${showInfo ? 'show' : ''}`}>
            <FaCircleInfo className={{marginRight: "3px"}} /> 
            <strong className="mx-1">Opening Hours:</strong>Mon - Fri: 2pm - 10pm; Sat - Sun: 2pm-11pm.
            <button type="button" className="btn-close" 
             onClick={() => setShowInfo(false)}
            ></button>
    </div>
  )
}

export default Info