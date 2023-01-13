import Logo from '../assets/logo.png';
import UserIcon from '../assets/usernamaste.png';
import '../index.css';

const Header = function (){
  return(
    <div className="heading-wrapper">
      <div className="logo-wrapper">
        <img src={Logo} alt="Logo" width="50" height="50"/>
        <span>React with Piyush</span>
      </div>

      <div className="search">
        <input type="text" key="search" placeholder="Search..."/>
      </div>
    
      <div className="avatar">
        <div className="user-icon" key="user-icon"> 
          <img src={UserIcon} alt="User-icon" width="50" height="50"/>
        </div>
      </div>
    </div>
  );
}

export default Header;