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
  return (
    <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export const Cart = () => {
  return (
    <div>
      <img src={CartImg} alt='Cart' width='50' height='40' />
    </div>
  );
};

// Composing Components
export const Header = () => {
  return (
    <div className='header'>
      <Title />
      <NavBar />
      <Cart />
    </div>
  );
};
