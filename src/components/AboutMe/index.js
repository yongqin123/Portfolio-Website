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
import aboutme from '../../assets/images/aboutme.jpg'
import skill from '../../assets/images/skill.jpg'
    

const AboutMe = () => {
    

        return (
            <div>
                <Sidebar />
                
                    
                    <table>
                        <tr><th id="title_aboutme1" colSpan={2}></th></tr>
                        <tr><td rowSpan={3}><img width="400" height="400" src={aboutme}/></td><td id='td_header'></td></tr>
                        <tr>
                            <td id='td_header'><text id="title_aboutme2">ABOUT ME</text></td>
                        </tr>
                        <tr>
                            <td><text className="contents"><br />I am Yong Qin, a recent graduate with a strong passion for programming and cybersecurity.<br /><br />In my spare time, I enjoy self-learning new programming languages and acquiring new skills. My hobbies include playing the guitar, coding, gaming, and exercising.</text></td>
                        </tr>
                    </table>
                
                
            </div>
        );
    }

    


export default AboutMe;