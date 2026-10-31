import RestaurantCard from './RestaurantCard';
import {getRestaurantsList} from '../services/swiggyAPI';
import { useState,useEffect} from 'react';



const Body = () => {
  
  const [ListofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => { 
    fetchRestaurants();
  }, []);

   const fetchRestaurants = async () => {
      const restaurants = await getRestaurantsList();
      console.log(restaurants);
      setListofRestaurants(restaurants);
    };
 

  return(
  <div className="body">
 <div className="Filter">
  
  <button className="filter-btn" onClick={() => {const res = ListofRestaurants.filter((res) => res.info.avgRating > 4.2);
     setListofRestaurants(res);}}>
    Top rated restaurants
  </button>
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