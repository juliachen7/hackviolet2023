import './Layout.css';

import {ReactComponent as CogIcon } from '../../Icons/cog.svg';
import {ReactComponent as LogoutIcon } from '../../Icons/logout.svg';
import {ReactComponent as AboutIcon } from '../../Icons/about.svg';
import { GoogleLogin } from '@react-oauth/google';

export default function Layout() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
    return (
      <div>
        <Navbar>
            <div id='google'>
              <NavItem icon={<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />} path="/settings"/>
            </div>
            <NavItem icon={<AboutIcon/>} path="/about"/>
            <NavItem icon={<LogoutIcon/>} path="/test"/>
        </Navbar>
        <div>
          
        </div>
      </div>
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
            <a href={props.path} className='icon-button'>
                {props.icon}
            </a>
        </li>
    )
}