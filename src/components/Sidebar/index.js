import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose,faAngleDown, faCogs, faSchool, faTasks, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';



//const Sidebar = () => {
const Sidebar = () => {
  
 
  const [activePage, setActivePage] = useState('home'); // Default active page

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  function github() {
    window.open('https://github.com/yongqin123', '_blank').focus();
  }
  function linkedin() {
    window.open("https://linkedin.com/in/yong-qin-toh-04a41b27b", '_blank').focus();
  }

  
    
    //const [showNav, setShowNav] = useState(false);

    return (
        
        <div className='nav-bar'>
        
        
    

        <nav>
            <text className='flat-button'>My Personal Porfolio</text>
            <NavLink style={{ textDecoration: 'none' }} activeclassname="active" to="/" className={activePage === 'home' ? 'active' : ''}  onClick={() => handlePageChange('home')}>
                <FontAwesomeIcon icon={faHome} color="#fffff"/>&nbsp;<text>Home</text>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" className={activePage === 'about' ? 'active' : ''} to="/AboutMe" onClick={() => handlePageChange('about')}>
                <FontAwesomeIcon icon={faUser} color="#fffff"/>&nbsp;<text>About Me</text>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" to="/MySkills" className={activePage === 'skills' ? 'active' : ''} onClick={() => handlePageChange('skills')}>
                <FontAwesomeIcon icon={faCogs} color="#fffff"/>&nbsp;<text>Skillsets</text>
            </NavLink>
            <div className="dropdown">
              <NavLink className="dropbtn activePage === 'projects' ? 'active' : ''" style={{ textDecoration: 'none' }} exact="true" >
                  <text>Projects</text>&nbsp;<FontAwesomeIcon icon={faAngleDown} color="#4d4d4e"/>
              </NavLink>
              
              <div className='dropdown-content'>
                <NavLink className="dropdown-contents activePage === 'projects' ? 'active' : ''" style={{ textDecoration: 'none' }} exact="true"  to="/SchoolProjects" >
                    <text>School Projects</text>
                </NavLink>
                <NavLink className="dropdown-contents activePage === 'projects' ? 'active' : ''" style={{ textDecoration: 'none' }} exact="true"  to="/PersonalProjects">
                    <text>Personal Projects</text>
                </NavLink>
              </div>
            </div>
            
        </nav>

        
      
      <FontAwesomeIcon 
          //onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />

    </div>
    );
  
};

export default Sidebar;