import './index.scss';
import { useState,  useEffect, useRef  } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import Sidebar from "../Sidebar";
import aboutme from '../../assets/images/aboutme.jpg';
import skill from '../../assets/images/skill.png';
import programming from '../../assets/images/programming.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollToTop from "react-scroll-to-top";

const MySkills = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    
        // Clean up observer on component unmount
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []); // Empty dependency array ensures this effect runs only once on mount

        return (
            <div id="sky">
                <ScrollToTop smooth />

                <text id="title_myskills">MY SKILLSETS</text>
                    <table className="hidden">
                        <tr><th class="title_space" ></th></tr>
                        <tr><td><img id="skillimg" width="500" height="400" src={skill}/></td><td className="contents_skills"><h2 ><b>FIVE TYPES:</b><br /><br />Programming Languages<br />Front-End Technologies<br />Back-End Technologies<br />Databases/Query Languages Operating Systems.</h2></td></tr>
                    </table>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1 id="front">Programming Languages</h1><br />
                
                <table className="table_skills">
                    <tr><td></td></tr>
                    <tr>
                        <td><i class="devicon-python-plain-wordmark colored hidden"></i></td>
                        <td><i class="devicon-cplusplus-plain-wordmark colored hidden"></i></td>
                        <td><i class="devicon-java-plain-wordmark colored hidden"></i></td>
                    </tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr>
                        <td><i class="devicon-javascript-plain colored"></i></td>
                        <td><i class="devicon-csharp-plain colored"></i></td>
                        <td><i class="devicon-html5-plain-wordmark colored"></i></td>
                    </tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr>
                        <td><i class="devicon-css3-plain-wordmark colored"></i></td>
                    </tr>
                    <tr><td></td></tr>
                </table>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1 id="front">Front-end Technologies</h1><br />

                <table className="table_skills">
                <tr><td></td></tr>
                    <tr >
                        <td><i class="devicon-react-plain-wordmark colored hidden"></i></td>
                        <td><i class="devicon-bootstrap-plain-wordmark colored hidden"></i></td>
                        <td><i class="devicon-angular-plain-wordmark hidden"></i></td>
                    </tr>
                    <tr><td></td></tr>
                </table>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1 id="front">Back-end Technologies</h1><br />
                
                <table className="table_skills">
                <tr><td></td></tr>
                    <tr>
                        <td><i class="devicon-flask-plain-wordmark colored  hidden"></i></td>
                        <td><i class="devicon-nodejs-plain-wordmark colored  hidden"></i></td>
                        <td><i class="devicon-php-plain colored  hidden"></i></td>
                    </tr>
                    <tr><td></td></tr>
                </table>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1 id="front">Database/Query Technologies</h1><br />
                <table className="table_skills">
                <tr><td></td></tr>
                    <tr>
                        <td><i class="devicon-mysql-plain-wordmark colored  hidden"></i></td>
                        <td><i class="devicon-postgresql-plain-wordmark colored  hidden"></i></td>
                        <td><i class="devicon-mongodb-plain-wordmark colored  hidden"></i></td>
                    </tr>
                    <tr><td></td></tr>
                </table>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1 id="front">Operating System</h1><br />
                <table className="table_skills">
                <tr><td></td></tr>
                    <tr>
                        <td><i class="devicon-windows11-plain-wordmark colored  hidden"></i></td>
                        <td><i class="devicon-linux-plain colored  hidden"></i></td>
                        
                    </tr>
                    <tr><td></td></tr>
                </table>
                
            </div>
        );
    }

    


export default MySkills;