import React from 'react';
import { Paper, Cover, Paragraph, InlineText } from '../Components';
// import campus from '../images/campus.jpg';

const projectList = [
  { // the dog, maybe the title screen
    title: 'Dog Days',
    technologies: ['Unity', 'Gimp'],
    madeAt: 'KHE 2017',
    description: 'This project was built using Unity. Its the first level of a game about a dog trying to find out where her owner goes when he leaves for the day. We implemented an inventory system and the ability to interact with objects in the environment. A large part of the project was drawing all of the assets in Gimp. You can watch a video we put together of the gameplay with the link below, or check out the source code on Github.',
    links: [{ name: 'Github', url: 'https://github.com/nicholas-maltbie/DogDays' }, { name: 'YouTube', url: 'https://www.youtube.com/watch?v=Bjg5wTO8kgM' }]
  },
  { // Hangman dead guy 
    title: 'Dog Hangman',
    technologies: ['React'],
    madeAt: 'Boilermake 2017',
    description: 'We created an app that lets you play hangman with dog breeds. We pulled from a dog breed API to display an image of a dog, and users must guess the breed.',
    links: [{ name: 'Github', url: 'https://github.com/snhendo/DogHangman' }]
  },
  { // Music note I guess 
    title: 'Lyrics Match',
    technologies: ['React', 'AWS'],
    madeAt: 'Boilermake 2017',
    description: 'We created a website that allows you to input lyrics, and get back a list of songs that contain that lyrics. We used Google\'s search API to search AtoZ Lyrics.',
    links: [{ name: 'Github', url: 'https://github.com/snhendo/DogHangman' }]
  },
  { // the dingo 
    title: 'Diner Bingo',
    technologies: ['React'],
    madeAt: 'RevolutionUC 2017',
    description: 'We kept this one fairly simple. The server sends you a random bingo board with tiles that say things like, "Highchair" or "dropped silverware." You can then play bingo on this board. The idea was that everyone at your table could go to our website and each would get their own randomized bingo board, and you\'d all play Diner Bingo.',
    links: [{ name: 'Github', url: 'https://github.com/CMinusMinus/DinerBingo' }]
  },
  { // Eventually include some sort of icon 
    title: 'Word Game',
    technologies: ['React', 'Node', 'Express', 'MongoDB'],
    madeAt: 'KHE 2016',
    description: 'We wanted to create a game that people could play together, by going to one site. The idea was that you type in a password to access the game lobby, and at some point one person could hit "start" and the game would update on all devices involved. We had limited success but I learned a lot about backend code from trying to build it.',
    links: [{ name: 'Github', url: 'https://github.com/CMinusMinus/WordGame' }]
  },
];

const Project = ({ title, description, technologies, madeAt, links }) => (
  <Paper 
    style={{ 
      margin: '10px', 
      verticalAlign: 'top', 
      minHeight: '220px', 
      clear: 'none',
      border: '3px 3px #CCC'
    }} 
    className="">
    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</div>
    <InlineText style={{ marginLeft: '0' }}>
      <span style={{ fontWeight: 'bold' }}>Made At: </span> {madeAt}
    </InlineText>
    <InlineText style={{ marginLeft: '0' }}>
      <span style={{ fontWeight: 'bold' }}>Technologies: </span>
      {technologies.reduce((tech, acc) => 
        `${tech}, ${acc}`
      )}
    </InlineText>
    <Paragraph>{description}</Paragraph>
    <Paragraph>
      <span style={{ fontWeight: 'bold' }}>Links: </span>
      {links.map((link, index) => (<span key={index}>
        <a href={link.url}>
          {link.name}
        </a>{links.length - 1 > index ? ', ' : ''}</span>
      ))}
    </Paragraph>
  </Paper>
);

const Projects = () => (
  <div className="container-fluid" style={{ }}>
    <div className="row" style={{ fontSize: '30px', margin: '10px', fontWeight: 'bold' }}>Personal Projects</div>
    {projectList.map((project, index) => (
      <Project {...project} key={index} />
    ))}
  </div>
);

export default Projects;