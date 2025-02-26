import React from 'react'
import './header.css'
import { CgSearch } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";



function Header() {
  return (
    <div className='header container'>
      <div className="header-left">
        <h1>Exlusive</h1>
       <ul>
        <li> <a href=""> home </a> </li>
        <li> <a href=""> about </a> </li>
        <li> <a href=""> contact </a> </li>
        <li> <a href=""> sign in </a> </li>
       </ul>
      </div>
      <div className="header-right">
        <div className="search">
            <input type="text" placeholder='typing...' />
            <CgSearch />
        </div>
        <div className="icons">
            <a href="">
                <div className='icon'>
                <FiHeart className='icon-react' />
                </div>
            </a>
            <a href="">
                <div className='icon'>
                <BsCart4 className='icon-react' />
                <div className='count'> 0 </div>
                </div>        
            </a>
            <a href="">
                <div className='icon'>
                <FiUser className='icon-react'/>
                </div> 
            </a>
        </div>
      </div>
    </div>
  )
}

export default Header
