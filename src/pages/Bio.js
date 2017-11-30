import React from 'react';

import { Paper, Cover, Paragraph } from '../Components';

import night from '../images/campus.jpg';
import george from '../images/GeorgeColson.jpg';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import outlook from '../images/outlook.ico';
import resume from '../images/pdfIcon.ico';

const Link = ({ image, link, name, style }) => (
  <div style={{ display: 'inline-block', alignSelf: 'center', ...style }}>
    <img src={image} style={{
      marginRight: '5px',
      height: '50px',
      borderRadius: '25px',
      display: 'block'
    }} /><a style={{ textDecoration: 'none', color: 'black' }} href={link} target="_blank">{name}</a>
  </div>
);

const Links = ({ links }) => (
  <div style={{ 
    fontSize: '18px',  
    marginBottom: '10px', 
    marginTop: '10px', 
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    marginRight: '20px',
    justifyContent: 'center'
  }}>
    {links.map((linkProps, index) => (
      <Link {...linkProps} key={index} style={{ marginBottom: '10px', marginRight: '20px' }} />
    ))}
  </div>
);

const generateLink = (name, link, image) => ({ name, link, image });

const Bio = () => (
  <Paper style={{
    padding: '0',
    margin: 'auto',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column'
  }}>
    <Cover style={{ display: 'block' }} backgroundImage={night}>
      <img src={george} style={{  
        height: '30vh',
        marginTop: '40px', 
        marginLeft: '20px',
        border: '5px solid white',
        borderRadius: '3px',
        boxShadow: '1px 1px #999, -1px 1px 1px #999',
      }} />
    </Cover>
    <div style={{ display: 'block', clear: 'both' }}>
    <div style={{ 
      fontSize: '18px', 
      margin: '10px 10px 10px 30px',
      maxWidth: '700px',
      display: 'inline-block'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '30px' }}>George Colson</div>
      <Paragraph>
        Hello, my name is George Colson. I'm a Computer Science student at the University of Cincinnati. I will be graduating in the Spring of 2019.
      </Paragraph>
      <Paragraph>
        I'm in classes after 8 months working full time as a frontend developer coop for the University of Cincinnati's student site, Catalyst. Catalyst is used by students to do administrative tasks such as enrolling in classes, accepting financial aid, and paying their tuition. My job was to design and maintain components of the site's main pages using ReactJS.
      </Paragraph>
      <Paragraph>
        I've spent the past 4 years going to hackathons across Ohio to hone my skills in web development.  
      </Paragraph>
    </div>
    <Links style={{ display: 'flex', margin: '20px' }} links={[
        generateLink("Github", "https://github.com/CMinusMinus", github),
        generateLink("Twitter", "https://twitter.com/cminusminus", twitter),
        generateLink("Email", "mailto:colsonge@mail.uc.edu", outlook),
        generateLink("Resume", "https://drive.google.com/file/d/0B_YMaoDwWN-OckMzLXB0ZGZ4Qk0/view?usp=sharing", resume)
    ]} />
    </div>
  </Paper>
);

export default Bio;