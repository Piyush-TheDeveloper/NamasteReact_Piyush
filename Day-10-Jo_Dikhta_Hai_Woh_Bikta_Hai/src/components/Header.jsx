import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/logo1.png';
import CartImg from '../../assests/carts.png';
import useOnline from '../utils/useOnline';

//Title Component
export const Title = () => (
  <a href='/'>
    <img className='p-2' alt='logo' src={Logo} width='120' height='100' />
  </a>
);

export const IsOnline = () => {
  const isOnline = useOnline();
  return <h3>{isOnline ? '✅ Online' : '🔴 - Offline'}</h3>;
};

//NavBar Component
export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='nav-items'>
      <ul className='flex space-x-4'>
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
          <Link to='/instamart'>Instamart</Link>
        </li>
        <li>
          <Link to='/cart'>
            <Cart />
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button className='rounded-lg bg-red-700 hover:bg-red-600 p-2 text-white' onClick={() => setIsLoggedIn(false)}>
              logout
            </button>
          ) : (
            <button className='rounded-lg bg-green-700 p-2 text-white hover:bg-green-600' onClick={() => setIsLoggedIn(true)}>
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
    <div className='flex place-content-between items-center m-2'>
      <Title />
      <IsOnline />
      <NavBar />
    </div>
  );
};
