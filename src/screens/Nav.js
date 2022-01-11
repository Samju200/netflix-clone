import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transtitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transtitionNavBar);
    return () => {
      window.removeEventListener('scroll', transtitionNavBar);
    };
  }, []);
  const history = useHistory();
  return (
    <div className={`nav  ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push('/')}
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <img
          onClick={() => history.push('/profile')}
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
