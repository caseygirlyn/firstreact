import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Travel Packing List</h1>
      <Link style={linkStyle} to='https://caseygirlyn.github.io/firstreact/'>Home</Link> | <Link style={linkStyle} to='https://caseygirlyn.github.io/firstreact/about'>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#169BD7',
  color: '#fff',
  padding: '10px'
}

const linkStyle = {
  color: '#fff'
}

export default Header;