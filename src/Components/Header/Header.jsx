import { useState } from 'react';
import logo from '../../assets/logo.svg';
import {  socialLinks } from '../../Data/Data';
import PageLinks from '../Content/PageLinks/PageLinks';
import "./Header.scss"

const Header = () => {
  const [click,setClick] = useState(false)
  const handleClick= ()=>{
      setClick(!click)
  }
  // console.log(click);
  return (
    <nav className='navbar'>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='backroads' />
        <button type='button' className='nav-toggle' onClick={handleClick} >
          <i className='fas fa-bars'></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <PageLinks parentClass='nav-links' click={click} itemClass='nav-link' />
      <ul className='nav-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='nav-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </nav>
  )
}

export default Header