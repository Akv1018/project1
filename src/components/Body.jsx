import RestaurantCard from './RestaurantCard';
import {reslist as list} from '../utils/mockData';

const Body = () => {
  return(
  <div className="body">
 <div className="search">
  <input type="text" placeholder="Search for restaurants and food"/>
  <button>🔍</button>
 </div>
 <div className="restaurant-list">
 {
  list.map(resi => <RestaurantCard res={resi} key={resi.info.id}/>)
 }
 </div>
 </div>
)
}

export default Body;