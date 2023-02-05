import './Layout.css';

import {ReactComponent as CogIcon } from '../../Icons/cog.svg';
import {ReactComponent as LogoutIcon } from '../../Icons/logout.svg';
import {ReactComponent as AboutIcon } from '../../Icons/about.svg';


export default function Layout() {
    return (
        <Navbar>
            <NavItem icon={<CogIcon/>}/>
            <NavItem icon={<AboutIcon/>}/>
            <NavItem icon={<LogoutIcon/>}/>
        </Navbar>
    )
}

function Navbar(props) {
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
          {props.children}
        </ul>
      </nav>
    )
  }
  
function NavItem(props) {
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button'>
                {props.icon}
            </a>
        </li>
    )
}