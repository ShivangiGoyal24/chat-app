import React from 'react'
import logo from "../../src/imgAssets/logo.png";

export default function AppHeader() {
  return (
     <div className="header"> 
     <span className="app-header">
       <img className="app-logo" src={logo} alt="Quick Chat" />
      <span className='app-header-text'>Quick Chat</span> 
     </span>
   </div>
  )
}
