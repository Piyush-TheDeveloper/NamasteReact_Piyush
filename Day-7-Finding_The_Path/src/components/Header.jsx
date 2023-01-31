import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo1.png';
import CartImg from '../../assests/carts.png';

//Title Component
export const Title = () => (
  <a href='/'>
    <img className='logo' alt='logo' src={Logo} width='120' height='100' />
  </a>
);

//NavBar Component
export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='nav-items'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/cart'>
            <Cart />
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button className='btn-login' onClick={() => setIsLoggedIn(false)}>
              logout
            </button>
          ) : (
            <button className='btn-login' onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export const Cart = () => {
  return (
    <div>
      <img src={CartImg} alt='Cart' width='30' height='25' />
    </div>
  );
};

// Composing Components
export const Header = () => {
  return (
    <div className='header'>
      <Title />
      <NavBar />
    </div>
  );
};
