// File: Navbar.js

import React,{useState} from 'react';
import '../styles/navbar.css';
import WhiteLogo from '../images/White Logo.svg';
import Button from '../images/Group 2.svg';


const Navbar = () => {
   
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-shapes">
       <img alt="image" src={WhiteLogo} className='image' />
        </div>
        </div>
        <div className="menu-items">
          <div className="menu-item">SERVICES</div>
          <div className="menu-item">ABOUT US</div>
          <div className="menu-item">CONTACT US</div>
          <div className="menu-item">CAREERS</div>
        </div>
        
        <div className="mobile-menu-items">

        <img alt="image" src={Button} onClick={() => setShowMenu(!showMenu)} />

</div>

</div>
{showMenu && (
  <div className='mobile-menu'><div className="menu-item">SERVICES</div>
  <div className="menu-item">ABOUT US</div>
  <div className="menu-item">CONTACT US</div>
  <div className="menu-item">CAREERS</div></div>
)}
</div>

  );
};

export default Navbar;















