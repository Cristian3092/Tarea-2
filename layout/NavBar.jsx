import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'

export const NavBar = () => {

    return (
      <header className='header'>
        <div className='layout'>
        <span>STKY</span>
        </div>
          <h3>Stiky Menu</h3>
          <nav className= "content">
              <ul >
                  <li>
                      <NavLink to = "/Home" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to = "/Blog" className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink>
                  </li>
                  <li>
                      <NavLink to = "/Contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
                  </li>
                  <li>
                      <NavLink to = "/AboutUs" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink>
                  </li>
                  <button>Entry</button>

              </ul>
          </nav>
      </header>
    )
  }