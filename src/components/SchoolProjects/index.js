import './index.scss';
import React, { useState, useEffect } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
//import React from 'react';
import Sidebar from '../Sidebar';
import Layout from '../Layout';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import video1 from "../../videos/foodOrderingSystem.mp4";
import video2 from "../../videos/evoting.mp4";
import video3 from "../../videos/conferencing_tool.mp4";
import image1 from "../../assets/images/voter_home.png";
import image2 from "../../assets/images/election_results.png";
import image3 from "../../assets/images/manage_election.png";
import image4 from "../../assets/images/party_edit.png";
import ScrollToTop from "react-scroll-to-top";


const SchoolProjects = () => {
    const images = [image1, image2, image3, image4];
      const [currentIndex, setCurrentIndex] = useState(0);

      const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

    
        
        return (
            

            <div id="schoolprojects">
                <ScrollToTop smooth />
                <table>
                    <tr>
                        <th colSpan={2}>
                            <br />
                            <text id="title_text2"><b>School Projects</b></text>
                            <br />
                            <br />
                            
                            <text id="title_text_contents2">Below are the projects that I have done in University Of Wollongong.</text>
                        </th>
                    </tr>
                    <tr><td></td></tr>
                    <tr>
                        <td>
                            
                            <video width="700" height="400" controls>
                                <source src={video1} type="video/mp4" />
                            </video>
                            
                        </td>
                        
                        
                    </tr>
                    <tr>
                        <td className='contentsTD'>
                            <p>
                                <br />
                                
                                <text className='projectName2'><b>1&#41; Online Food Ordering System</b></text>
                                <br />
                                <br />
                                <br />
                                <text className="contents1">    
                                    <div className="border_bottom2">This project aims to build a full stack web-based software to support<br /></div><div className="border_bottom1">restaurant staff in managing and fulfilling orders.</div>
                                    
                                </text>
                                <br /><br /><br /><br /><br /><br /><br /><br />
                            </p>
                                
                            
                        </td>
                        
                        
                    </tr>
                    <tr>
                        <td >
                            <div className="slideshow-container">
                                <div className="slide">
                                    <img className='images' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                                </div>
                                <button className="prev" onClick={goToPrevious}>
                                    &#10094; Prev
                                </button>
                                <button className="next" onClick={goToNext}>
                                    Next &#10095;
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td className='contentsTD'>
                        
                        <p>
                            <br />
                            
                            <text className="projectName2"><b>2&#41; E-voting System</b></text>
                            <br />
                            <br />
                            <br />
                            <text className="contents1">
                                <div className="border_bottom2">This project aims to build a full stack web-based software by having a<br />secure voting
                                platform that guarantees voter anonymity and safeguards<br /></div><div className="border_bottom1">voter credentials through fully homomorphic encryption.</div>
                        
                                
                            </text>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </p>
                        
                    </td>  
                    </tr>
                    <tr>
                    <td>  
                        <video width="700" height="400" controls>
                            <source src={video3} type="video/mp4" />
                        </video>
                        
                        </td>
                    </tr>
                    <tr>

                    </tr>
                    <tr>
                    <td className='contentsTD'>
                        
                        <p className="border_bottom2">
                           
                            <text className="projectName2"><b>3&#41; Video Conferencing Tool Booking System</b></text>
                            <br />
                            <br />
                            <br />
                            <text className="contents1">
                                <div >This project aims to build a conferencing tool that allows students to book<br />for video conference timeslots and teachers to create new video<br />conferencing timeslots, and also to demonstrate project management skills.</div>
                        
                                
                            </text>
                        </p>
                        
                    </td>  
                    </tr>
                    
                </table>
                
                
            </div>    
            
        );
    
}

export default SchoolProjects;