import React from 'react';
import { Paper, Cover } from '../Components';
import campus from '../images/campus.jpg';

const projectList = [
  {
    title: 'Diner Bingo',
    description: 'This was a Hackathon project using React. We kept this one fairly simple. The server sends you a random bingo board with tiles that say things like, "Highchair" or "dropped silverware." You can then play bingo on this board. The idea was that everyone at your table could go to our website and each would get their own randomized bingo board, and you\'d all play Diner Bingo.'
  },
  {
    title: 'Word Game',
    description: 'This was a Hackathon project built using Node, Express, React, and MongoDB. We wanted to create a game that people could play together, by going to one site. The idea was that you type in a password to access the game lobby, and at some point one person could hit "start" and the game would update on all devices involved.'
  }
];

const Project = ({ title, description }) => (
  <div style={{ marginTop: '5px' }} className="col-sm-12 col-md-6">
    <div style={{ fontSize: '18px', fontWeight: 'bold' }}><span className="glyphicon glyphicon-console" /> {title}</div>
    <div>{description}</div>
  </div>
);

const Projects = () => (
  <Paper style={{ paddingBottom: '10px' }}>
    <Cover backgroundImage={campus} />
    <div style={{ fontSize: '18px', marginTop: '10px', fontWeight: 'bold' }}>Projects</div>
    {projectList.map((project, index) => (
      <Project {...project} key={index} />
    ))}
  </Paper>
);

export default Projects;