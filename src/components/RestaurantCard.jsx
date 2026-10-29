import {CDN_URL} from '../utils/mockData';

const RestaurantCard = (props) => {
  const {name, cuisines, avgRating, sla,cloudinaryImageId,costForTwo}=props?.res?.info;
  return(<div className="res-card">
    <img src={CDN_URL + cloudinaryImageId} alt={name}></img>
    <h4>{name}</h4>
    <h4>{cuisines.join(", ")}</h4>
    <h5>{avgRating} stars</h5>
    <h5>{sla.deliveryTime} mins</h5>
    <h5>{costForTwo}</h5>
  </div> )
}


export default RestaurantCard;