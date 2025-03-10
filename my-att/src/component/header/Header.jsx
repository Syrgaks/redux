import React from 'react'
import './header.css'
import { CgSearch } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
  const { cartItem } = useSelector( ( state )  => state.flover )
  return (
    <div className='header container'>
      <div className="header-left">
        <h1>Exlusive</h1>
       <ul>
        <li> <Link to="/"> home </Link> </li>
        <li> <a href=""> about </a> </li>
        <li> <a href=""> contact </a> </li>
        <li> <a href=""> sign in </a> </li>
       </ul>
      </div>
      <div className="header-right">
        <div className="search">
            <input type="namber" placeholder='typing...' />
            <CgSearch />
        </div>
        <div className="icons">
            <a href="">
                <div className='icon'>
                <FiHeart className='icon-react' />
                </div>
            </a>
            <Link to="cartpage">
                <div className='icon'>
                <BsCart4 className='icon-react' />
                <div className='count'> { cartItem.length }</div>
                </div>        
            </Link>
           
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