import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

import MediaQuery from 'react-responsive';

import { Tabs, Menu } from './Components';

const tabGenerator = (link, name) => ({ link, name });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: '#EEE', height: '100%', minHeight: '100vh' }}>
          <div className="header container-fluid" style={{
            backgroundColor: '#CCC', 
            height: '36px',
            boxShadow: '3px 3px #DDD, -3px 3px 3px #DDD ',
          }}>
            <div 
              className="col-xs-10 col-sm-11" 
              style={{ 
                fontSize: '25px', 
                height: '36px', 
                width: '200px',
                lineHeight: '36px'
              }}>
                George Colson
            </div>
            <MediaQuery maxWidth={480}>
              <div 
                style={{ 
                  height: '36px', 
                  lineHeight: '36px',
                  float: 'right'
                }} 
                className="col-xs-1" 
                onClick={this.toggleOpen}>
                <span className="glyphicon glyphicon-menu-hamburger" />
              </div>
            </MediaQuery>
            <MediaQuery minWidth={480}>
              <Tabs tabs={[
                tabGenerator('#/', 'About', window.location.hash === '#/'),
                tabGenerator('#/projects', 'Projects', window.location.hash === '#/projects'), 
                tabGenerator('#/experience', 'Experience', window.location.hash === '#/experience') 
              ]} />
            </MediaQuery>
          </div>
          <div className="container">
            <Route path="/" exact component={Bio} />            
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
