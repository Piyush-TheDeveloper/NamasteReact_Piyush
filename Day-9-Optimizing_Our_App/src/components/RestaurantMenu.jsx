import { useParams } from 'react-router-dom';
import { ImgURL} from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {

  const params = useParams();
  const { resId } = params;

  const restaurants = useRestaurant(resId);

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
