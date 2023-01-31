import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ImgURL, RES_MENU_URL } from '../config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState(null);

  const params = useParams();
  const { resId } = params;

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  async function getRestaurantsMenu() {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setRestaurants(json.data);
  }

  // if(!restaurants){
  //   return <Shimmer />
  // }

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className='res-menu'>
      <div>
        <h1>Res ID is: {resId}</h1>
        <h1>{restaurants.name}</h1>
        <img src={ImgURL + restaurants.cloudinaryImageId} width='300' />
        <h4>
          {restaurants.area}, {restaurants.city}
        </h4>
        <h4> {restaurants.avgRating} stars</h4>
        <h4> {restaurants.costForTwoMsg}</h4>
        <h4> {restaurants.cuisines}</h4>
      </div>
      <div>
        <h1>Menu Items</h1>
        <ul>
          {Object.values(restaurants?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
