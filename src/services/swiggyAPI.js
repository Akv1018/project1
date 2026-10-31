 export const getRestaurantsList =async () => {
  const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4223225&lng=77.4902726&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING");
  const data = await response.json();
  console.log(data);
  return data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

 };


