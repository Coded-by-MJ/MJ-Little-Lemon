import { NavLink} from 'react-router-dom';
import { useState, useRef } from 'react';

import logo from "../assets/images/logo-word-light.png";




const NavBar = () => {
     const menuInput = useRef(null);
    const [navisOpen, setNavisOpen] = useState(false);
  
    const hideAfterClick = () => {
        menuInput.current.checked = false;
        setNavisOpen(false);

    }
    
    const linkClass = ({ isActive }) =>{
      return isActive ? "active" : "";
 }





  return (
    <nav className="nav-bar">
      <div className='nav-wrapper'>
     <NavLink to="/"  className="logo">
       <img src={logo}  alt="little-lemon-logo"/>
     </NavLink>
     <label className="hamburger-menu" htmlFor="menu">
        <input type="checkbox" name='menu' id="menu" ref={menuInput}
         onChange={(e) => setNavisOpen(e.target.checked)}
        />
     </label>
     <ul className={navisOpen ? "mobile nav-links" : "desktop nav-links"} >
      <li> <NavLink className={`link ${linkClass("/")}`} to="/" onClick={hideAfterClick} >Home</NavLink></li>
      <li> <NavLink className={`link ${linkClass("/menu")}`} to="/menu" onClick={hideAfterClick}>Menu</NavLink></li>
      <li> <NavLink
       className={`link ${linkClass("/reservations")}`} to="/reservations" onClick={hideAfterClick}  >Reservations</NavLink></li>
      <li> <NavLink className={`link ${linkClass("/about")}`} to="/about" onClick={hideAfterClick} >About</NavLink> </li>
      <li> <NavLink className={`link ${linkClass("/contact")}`} to="/contact" onClick={hideAfterClick} >Contact</NavLink></li>
     </ul>
    </div>
    </nav>
    
  )
}

export default NavBar