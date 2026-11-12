import RestaurantCard from './RestaurantCard';
import {getRestaurantsList} from '../services/swiggyAPI';
import { useState,useEffect} from 'react';
import Shimmer from './Shimmer';



const Body = () => {
  
  const [ListofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => { 
    fetchRestaurants();
  }, []);

   const fetchRestaurants = async () => {
      const restaurants = await getRestaurantsList();
      setListofRestaurants(restaurants);
    };
 
    if(ListofRestaurants.length === 0){
      return <Shimmer/>;
    }

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