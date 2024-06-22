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
import portfolio from "../../assets/images/portfolio.jpeg";

const PersonalProjects = () => {
    const images = [portfolio];
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
            

            <div>
                
                <table>
                    <tr>
                        <th colSpan={2} id='title'>
                            <text id="title_text"><b>Personal Projects</b></text>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <text id="title_text_contents">Below are the projects that I have done myself.</text>
                        </th>
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
                            
                            <text className="projectName"><b>1&#41; Personal Porfolio Project</b></text>
                            <br />
                            <br />
                            <br />
                            <text className="contents">
                                <div className="border_bottom2">This project aims to build a full stack web-based software by implementing<br />react js
                                and other web development technologies, and also deploying into<br />the web.</div>
                        
                                
                            </text>
                            
                        </p>
                        
                    </td>  
                    </tr>
                    
                    
                </table>
                
                
            </div>    
            
        );
    
}

export default PersonalProjects;