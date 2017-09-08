import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

import { Tabs, Menu } from './Components';

const tabGenerator = (link, tabName) => ({ link, tabName });

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
        <div className="App" style={{ backgroundColor: '#EEE', height: '110vh' }}>
          <div className="header container-fluid" style={{
            backgroundColor: '#CCC', 
            
          }}>
            <div className="col-xs-10 col-sm-11" style={{ fontSize: '25px', height: '36px' }}>George Colson</div> 
            <div style={{ height: '40px', paddingTop: '8px' }} className="col-xs-1" onClick={this.toggleOpen}>
              <span className="glyphicon glyphicon-menu-hamburger" />
            </div>
            <Menu open={this.state.open} toggleOpen={this.toggleOpen} tabs={[
              tabGenerator('/', 'About'),
              tabGenerator('/projects', 'Projects'),
              tabGenerator('/experience', 'Experience')
            ]} />
          </div>
          <div className="container">
            <Route path="/projects" component={Projects} />
            <Route path="/" exact component={Bio} />
            <Route path="/experience" component={Experience} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
