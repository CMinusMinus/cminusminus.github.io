import React from 'react'

import MediaQuery from 'react-responsive'

import { Tabs, Menu, Link } from './'

import MdMenuIcon from 'react-icons/lib/md/menu' 

const NavBar = ({ name, tabs, style, hash, onOpen }) => (
  <div className="header container-fluid" style={{
    backgroundColor: '#CCC', 
    height: '36px',
    boxShadow: '1px 1px #BBB, -1px 1px 1px #BBB ',
    ...style
  }}>
    <Link 
      href={hash ? '#/' : '/'}
      style={{ 
        fontSize: '25px', 
        height: '36px',
        width: '200px',
        lineHeight: '36px',
      }}>
      {name}
    </Link>
    <MediaQuery maxWidth={480}>
      <div 
        style={{ 
          height: '36px', 
          lineHeight: '36px',
          float: 'right'
        }}
        onClick={onOpen}>
        <MdMenuIcon size={28} />
      </div>
    </MediaQuery>
    <MediaQuery minWidth={480}>
      <Tabs tabs={tabs} />
    </MediaQuery>
  </div>
)

export default NavBar
