import React from 'react';

import { Paper, Cover } from '../Components';

import night from '../images/campus.jpg';
import george from '../images/george.png';

const Link = ({ image, link, name, style }) => (
  <div className="col-md-12 col-xs-12" style={{ ...style }}>
    <img src={image} style={{
      marginRight: '5px',
      height: '50px',
      borderRadius: '25px'
    }} /><a style={{ textDecoration: 'none', color: 'black' }} href={link} target="_blank">{name}</a>
  </div>
);

const Links = ({ links }) => (
  <div className="col-xs-12 col-md-4 col-sm-4" style={{ fontSize: '18px', float: 'bottom', marginBottom: '10px', marginTop: '30px' }}>
    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Links</div>
    {links.map((linkProps, index) => (
      <Link {...linkProps} key={index} style={{ marginBottom: '10px' }} />
    ))}
  </div>
);


const generateLink = (name, link, image) => ({ name, link, image });

const Bio = () => (
  <Paper>
    <Cover backgroundImage={night}>
      <img src={george} style={{  
        height: '30vh', 
        marginTop: '40px', 
        marginLeft: '20px',
        border: '5px solid white',
        borderRadius: '3px'
      }} />
    </Cover>
    <div className="col-xs-12 col-md-8 col-sm-8" style={{ fontSize: '18px', marginBottom: '10px', marginTop: '30px' }}>
      <div style={{ fontWeight: 'bold' }}>About Me</div>
      Hello, my name is George Colson. I'm a 4th year (of 5) Computer Science major at the University of Cincinnati. I hope to one day become a part of the video game industry, but for now I work in web development. I love JavaScript and working with people.
    </div>
    <Links links={[
        generateLink("Github", "https://google.com/", george),
        generateLink("Twitter", "https://google.com/", george),
        generateLink("Resume", "https://google.com/", george)

    ]} />
  </Paper>
);

export default Bio;