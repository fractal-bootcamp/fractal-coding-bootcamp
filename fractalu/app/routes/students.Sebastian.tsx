import React from 'react';
import './styles/students.Sebastian.css'; 
import sebastianArt from './IMG_1912.jpg'; 

const SebastianPage = () => {
    return (
        <div className="container">
            <h1 className="header">Sebastian's personal page</h1>
            <p className="haiku">
                A vibrant petal <br />
                floats down the rivering stream <br />
                of my flowing thoughts
            </p>
            <img src={sebastianArt} alt="Sebastian's Art" className="artwork" />
            <a className="instagram-link" href="https://www.instagram.com/sebastianhodge/?hl=en" target="_blank">Check out my art!</a>
        </div>
    );
};

export default SebastianPage;

