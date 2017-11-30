import React from 'react';

// defaults to unstyled link, because why would you want that most of the time
const Link = ({ style, href, children, className }) => (
  <a className={className} style={{
    color: "inherit", 
    height: 'inherit', 
    width: 'inherit', 
    textDecoration: 'inherit',
    ...style,
  }} href={href}>
    {children}
  </a>
)

const Paper = ({ children, minHeight, style, className }) => (
  <div className={className} style={{
    border: '1px 1px 1px 1px black',
    boxShadow: '3px 3px 5px #CCC, -3px 3px 5px #CCC', 
    backgroundColor: 'white', 
    minHeight: minHeight,
    display: 'inline-block',
    padding: '10px',
    overflow: 'auto',
    clear: 'both',
    ...style
  }}>
    {children}
  </div>
);

const Tabs = ({ tabs }) => (
  <div style={{ display: 'inline', float: 'right' }}>
    {tabs.map((tab, index) => (
      <Link key={index} href={tab.link}>
        <div
          className="text-center"
          style={{
            width: '102px',
            fontSize: '15px',
            height:'36px',
            color: window.location.hash === tab.link ? 'white' : '',
            backgroundColor: window.location.hash === tab.link ? '#2778CD' : '',
            clear: 'both',
            display: 'inline-block',
            lineHeight: '36px',
            textDecoration: 'none',
          }}>
          {tab.name}
        </div>
      </Link>
    ))}
  </div>
)

const Paragraph = ({ children, style, className }) => (
  <div className={className} style={{ marginBottom: '10px', ...style }}>
    {children}
  </div>
)

const InlineText = ({ children, style, left, className }) => (
  <div className={className} style={{ 
    display: 'inline-block', 
    margin: '10px', 
    marginLeft: left ? '0' : '', 
    ...style 
  }}>
    {children}
  </div>
)

export { Tabs, Paper, Paragraph, InlineText, Link }
