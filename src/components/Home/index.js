//import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import React from 'react';
import background from "../../assets/images/sky1.jpg";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, I am<br />
                        
                {this.props.name},
                <br />
                Software Developer
                </h1>
                <h2>Frontend Developer / Backend Developer</h2>
                
                </div>
            </div>
        );
    }

}


export default Home;