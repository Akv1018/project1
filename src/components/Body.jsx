import RestaurantCard from './RestaurantCard';
import {getRestaurantsList} from '../services/swiggyAPI';
import { useState,useEffect} from 'react';
import Shimmer from './Shimmer';



const Body = () => {
  
  const [ListofRestaurants, setListofRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => { 
    fetchRestaurants();
  }, []);

   const fetchRestaurants = async () => {
      const restaurants = await getRestaurantsList();
      setListofRestaurants(restaurants);
    };
 
    if (ListofRestaurants.length === 0) {
    return (
      <div className="body">
        <Shimmer />
      </div>
    );
  }

  return(
  <div className="body">
 <div className="filter">
  
  
  <button className="filter-btn" onClick={() => {const res = ListofRestaurants.filter((res) => res.info.avgRating > 4.2);
     setListofRestaurants(res);}}>
    Top rated restaurants
  </button>
  <div className="search">

    <input type="text" className="search-box" placeholder="   Search for restaurants" value={searchText} onChange={(e) => setSearchText(e.target.value)}>
    </input>

    <button className="search-btn" onClick={() =>{
      const filteredRestaurants= ListofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setListofRestaurants(filteredRestaurants);
      }}>search
    </button>
      </div>
 </div>
 
 <div className="restaurant-list">
 {
  ListofRestaurants.map(resi => <RestaurantCard res={resi} key={resi.info.id}/>)
 }
 </div>
 </div>
)
}

export default Body;