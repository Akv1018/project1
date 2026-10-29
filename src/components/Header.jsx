import favicon from '../assets/favicon.svg';


const Header = () => {
  return(
    <div className='header'>
      <img className='logo' src={favicon} alt='food-ordering-app' />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
        </div>
    </div>
  )
}

export default Header;

