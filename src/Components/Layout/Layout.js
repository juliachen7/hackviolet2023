import './Layout.css';

import {ReactComponent as CogIcon } from '../../Icons/cog.svg';
import {ReactComponent as LogoutIcon } from '../../Icons/logout.svg';
import {ReactComponent as AboutIcon } from '../../Icons/about.svg';
// import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Layout() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
            console.log(user);
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
  };
    return (
      <div>
        <Navbar>
            <div onClick={() => login()}>
              <NavItem icon={<CogIcon/>}/>
            </div>
            <NavItem icon={<AboutIcon/>} path="/about"/>
            <div onClick={() => logOut()}>
              <NavItem icon={<LogoutIcon/>}/>
            </div>
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
            <a href={props.path ? props.path : '#'} className='icon-button'>
                {props.icon}
            </a>
        </li>
    )
}