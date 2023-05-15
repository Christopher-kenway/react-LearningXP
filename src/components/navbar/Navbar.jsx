import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
<>
<p><a href='#home'>Home</a></p>
<p><a href='#what-is-gpt3'>What is GPT-3?</a></p>
<p><a href='#open-ai'>Open AI</a></p>
<p><a href='#case-studies'>Case Studies</a></p>
<p><a href='#library'>Library</a></p> 
</>
)  
 
// BEM --> BLOCK ELEMENT MODIFIER
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt-3__navbar">
      <div className="gpt-3__navbar-links">
        <div className="gpt-3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt-3__navbar-links_container'>
        < Menu/>
        </div>
      </div>
      <div className='gpt-3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt-3__navbar-menu'>
      {toggleMenu ? (
  <RiCloseLine
    color="#fff"
    size={27}
    onClick={() => setToggleMenu(false)}
  />
) : (
  <RiMenu3Line
    color="#fff"
    size={27}
    onClick={() => setToggleMenu(true)}
  />
)}
{toggleMenu && (
  <div className='gpt-3__navbar-menu_container scale-up-center'>
    <div className='gpt-3__navbar-menu-container-links'></div>
  <Menu />
  <div className='gpt-3__navbar-menu__container-links-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
  </div>
)}

      </div>
    </div>      
  )
}

export default Navbar;


  

