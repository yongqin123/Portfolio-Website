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
import skill from '../../assets/images/skill.jpg';
import programming from '../../assets/images/programming.jpg';

const MySkills = () => {
    

        return (
            <div>
                <Sidebar />

                <text id="title_myskills">MY SKILLS</text>
                    <table>
                        <tr><th class="title_space" colSpan={2}></th></tr>
                        <tr><td><img width="400" height="400" src={skill}/></td><td className="contents_skills"><text >My skills are divided into 5 CATEGORIES:<br /><br />Programming Languages, Front-End Technologies, Back-End Technologies, Databases/Query Languages, Operating Systems.</text></td></tr>
                    </table>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1 className="header_types_of_skills">Programming Languages</h1>
                
                <table>
                    <tr>
                        <td><i class="devicon-python-plain-wordmark colored"></i></td>
                        <td><i class="devicon-cplusplus-plain-wordmark colored"></i></td>
                        <td><i class="devicon-java-plain-wordmark colored"></i></td>
                    </tr>
                    <tr>
                        <td><i class="devicon-javascript-plain colored"></i></td>
                        <td><i class="devicon-csharp-plain colored"></i></td>
                        <td><i class="devicon-html5-plain-wordmark colored"></i></td>
                    </tr>
                    <tr>
                        <td><i class="devicon-css3-plain-wordmark colored"></i></td>
                    
                        
                    </tr>
                </table>

                <h1 id="front">Front-end Technologies</h1>

                <table>
                    <tr>
                        <td><i class="devicon-react-plain-wordmark colored"></i></td>
                        <td><i class="devicon-bootstrap-plain-wordmark colored"></i></td>
                        <td><i class="devicon-angular-plain-wordmark "></i></td>
                    </tr>
                </table>

                <h1 id="front">Back-end Technologies</h1>

                <table>
                    <tr>
                        <td><i class="devicon-flask-plain-wordmark colored"></i></td>
                        <td><i class="devicon-nodejs-plain-wordmark colored"></i></td>
                        <td><i class="devicon-php-plain colored"></i></td>
                    </tr>
                </table>
                <h1 id="front">Database/Query Technologies</h1>
                <table>
                    <tr>
                        <td><i class="devicon-mysql-plain-wordmark colored"></i></td>
                        <td><i class="devicon-postgresql-plain-wordmark colored"></i></td>
                        <td><i class="devicon-mongodb-plain-wordmark colored"></i></td>
                    </tr>
                </table>
                <h1 id="front">Operating System</h1>
                <table>
                    <tr>
                        <td><i class="devicon-windows11-plain-wordmark colored"></i></td>
                        <td><i class="devicon-linux-plain colored"></i></td>
                        
                    </tr>
                </table>
                
            </div>
        );
    }

    


export default MySkills;