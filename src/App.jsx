import ReactDOM from 'react-dom/client';

const Header = () => {
  return(
    <div className='header'>
      <img className='logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='food-ordering-app' />
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

const RestaurantCard = (props) => {
  return(<div className="res-card">
    <img src='https://tse1.mm.bing.net/th/id/OIP.3f4uw03GjHN2wa2tSeNc4wHaIu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'></img>
    <h3>{props.resname}</h3>
    <h3>{props.cuisine}</h3>
    <h4>{props.stars} stars</h4>
    <h4>{props.time}</h4>
  </div> )
}


const AppLayout = () => {        
  return (
  <div className="app-layout">
    <Header/>
    <Body/>
  </div>
)}

const Body = () => {
  return(
  <div className="body">
<div className="search">search bar</div>
 <div className="restaurant-list">
  <RestaurantCard resname="Pizza Hut" cuisine="Italian, Pizza" stars="4.5" time="30 mins"/>
  <RestaurantCard resname="Domino's" cuisine="Italian, Pizza" stars="4.2" time="25 mins"/>
  
 </div>
 </div>
)
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);