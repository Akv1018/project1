import favicon from '../assets/favicon.svg';
import {Link} from 'react-router-dom';


const Header = () => {
  return(
    <div className='header'>
      <img className='logo' src={favicon} alt='food-ordering-app' />
      <div className='nav-items'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Cart</li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Header;

