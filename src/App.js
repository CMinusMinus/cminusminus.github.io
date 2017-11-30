import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Bio from './pages/Bio'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

import Drawer from 'react-sidebar'

import { NavBar } from './Components'

const tabGenerator = (link, name) => ({ link, name })

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
        <Drawer pullRight sidebar={
          <div style={{ 
            minHeight: '100vh', 
            width: '200px', 
            backgroundColor: 'white', 
          }}>
            <div style={{ 
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '10px'
            }}>Navigation</div>
            <div onClick={() => this.setState({ open: false })} style={{ backgroundColor: window.location.hash === '#/' ? '#2778CD' : 'white', borderBottom: '1px solid #DDD', borderTop: '1px solid #DDD', padding: '10px', width: '200px' }}>
            <a style={{ width: '100%', textDecoration: 'none', color: window.location.hash === '#/' ? 'white' : 'black' }} href="#/"><div style={{ width: '100%' }}>About</div></a>
            </div>
            <div onClick={() => this.setState({ open: false })} style={{ backgroundColor: window.location.hash === '#/experience' ? '#2778CD' : 'white', borderBottom: '1px solid #DDD', borderTop: '1px solid #DDD', padding: '10px', width: '200px' }}>
            <a style={{ textDecoration: 'none', color: window.location.hash === '#/experience' ? 'white' : 'black' }} href="#/experience"><div style={{ width: '100%' }}>Experience</div></a>
            </div>
            <div onClick={() => this.setState({ open: false })} style={{ backgroundColor: window.location.hash === '#/projects' ? '#2778CD' : 'white', borderBottom: '1px solid #DDD', borderTop: '1px solid #DDD', padding: '10px', width: '200px' }}>
            <a style={{ textDecoration: 'none', color: window.location.hash === '#/projects' ? 'white' : 'black' }} href="#/projects"><div style={{ width: '100%' }}>Projects</div></a>
            </div>
          </div>} 
          open={this.state.open} 
          onSetOpen={() => 
            this.setState({ open: !this.state.open })
          }>
          <div className="App" style={{ backgroundColor: '#EEE', height: '100%', minHeight: '100vh', paddingBottom: '10px' }}>
            <NavBar onOpen={() => this.setState({ open: !this.state.open })} hash name="George Colson" tabs={[
              tabGenerator('#/', 'About'),
              tabGenerator('#/projects', 'Projects'), 
              tabGenerator('#/experience', 'Experience') 
            ]} />
            <div className="container">
              <Route path="/" exact component={Bio} />            
              <Route path="/projects" component={Projects} />
              <Route path="/experience" component={Experience} />
            </div>
          </div>
        </Drawer>
      </Router>
    );
  }
}

export default App;
