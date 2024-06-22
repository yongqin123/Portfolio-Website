import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
//comment
/*
<Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} alt="slobodan" />
        </Link>
*/


//const Sidebar = () => {
class Sidebar extends React.Component {
  
  constructor(props) {
    super(props);
  }

  github() {
    window.open('https://github.com/yongqin123', '_blank').focus();
  }
  linkedin() {
    window.open("https://linkedin.com/in/yong-qin-toh-04a41b27b", '_blank').focus();
  }

  render() {
    
    //const [showNav, setShowNav] = useState(false);

    return (
        
        <div className='nav-bar'>
        
        
    

        <nav>
            <text className='flat-button'>My Personal Porfolio</text>
            <NavLink style={{ textDecoration: 'none' }} activeclassname="active" to="/">
                {/*} <FontAwesomeIcon icon={faHome} color="#4d4d4e"/> {*/}<text>Home</text>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" to="/AboutMe">
                {/*}<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> {*/}<text>About Me</text>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" to="/MySkills">
                {/*}<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> {*/}<text>My Skills</text>
            </NavLink>
            <div className="dropdown">
              <NavLink className="dropbtn" style={{ textDecoration: 'none' }} exact="true" activeclassname="active" >
                  {/*}<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> {*/}<text>Projects</text>&nbsp;<FontAwesomeIcon icon={faAngleDown} color="#4d4d4e"/>
              </NavLink>
              
              <div className='dropdown-content'>
                <NavLink className="dropdown-contents" style={{ textDecoration: 'none' }} exact="true" activeclassname="active" to="/SchoolProjects">
                    {/*}<FontAwesomeIcon icon={faUser} color="#4d4d4e"/> {*/}<text>School Projects</text>
                </NavLink>
                <NavLink className="dropdown-contents" style={{ textDecoration: 'none' }} exact="true" activeclassname="active" to="/PersonalProjects">
                    {/*}<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> {*/}<text>Personal Projects</text>
                </NavLink>
              </div>
            </div>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" className="contact-link" onClick={this.github}>
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            /><text> Github</text>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" className="contact-link" onClick={this.linkedin}>
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            /><text> LinkedIn</text>
            </NavLink>
        </nav>

        
      
      <FontAwesomeIcon 
          //onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />

    </div>
    );
  }
};

export default Sidebar;