//import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import React from 'react';
import background from "../../assets/images/sky1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose,faAngleDown, faCogs, faSchool, faTasks, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div id="home" className="container home-page">
                
                <div className="text-zone">
                    <b>
                <h1>                            
                {this.props.name}
                <br />Software Developer
                </h1>
                <br />
                <h2>Frontend Developer / Backend Developer</h2>
                </b><NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" className="contact-link" onClick={this.github}>
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} exact="true" activeclassname="active" className="contact-link" onClick={this.linkedin}>
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
            </NavLink>
                </div>
               
            </div>
        );
    }

}


export default Home;