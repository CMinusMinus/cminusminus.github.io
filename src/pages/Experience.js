import React from 'react';
import { Paper, Paragraph, InlineText } from '../Components';

const workList = [{ 
  title: 'Frontend Developer Coop',
  dateBegin: 'January 2017',
  dateEnd: 'September 2017',
  location: 'Cincinnati, OH',
  company: 'University of Cincinnati',
  description: ['Tasked with maintaining and updating the University\'s administrative website, Catalyst',  'Learned and utilized advanced JavaScript frameworks and libraries', 'Redesigned components of Catalyst to improve usability and overall look and feel', 'Implemented ReactRouter to drastically reduce load times when switching between tabs', 'Collaborated with a team of senior software developers, QA specialists, and other co-ops']
}]

const Work = ({ title, dateBegin, dateEnd, location, company, description }) => (
  <Paper style={{ marginLeft: '25%', width: '50%', align: 'center' }}>
    <div>
      <Paragraph style={{ fontWeight: 'bold', fontSize: '25px', margin: '0' }}>
        {company}
      </Paragraph>
      <Paragraph style={{ margin: '0', fontStyle: 'italic', fontSize: '20px' }}>
        {title}
      </Paragraph>
    </div>
    <InlineText left><span style={{ fontWeight: 'bold' }}>Dates: </span>{`${dateBegin} to ${dateEnd}`}</InlineText>
    <InlineText>
      <span style={{ fontWeight: 'bold' }}>Location: </span>{location}
    </InlineText>
    <Paragraph>
      <ul>
        {description.map((bullet, index) => (
          <li key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </Paragraph>
  </Paper>
)

const Experience = () => (<div>
  <div style={{ fontSize: '30px', marginLeft: '20%', fontWeight: 'bold' }}>Work Experience</div>
  <Work {...workList[0]} />
</div>);

// While on the job, I greatly improved the performance of the site by implementing ReactRouter, so that there was no need to reload the whole page when switching between tabs. I also took many steps towards improving the look and feel of the site. 

export default Experience;