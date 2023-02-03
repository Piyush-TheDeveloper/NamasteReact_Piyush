import { ImgURL } from '../config';

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, avgRating }) => {
  return (
    <div className='card'>
      <img src={ImgURL + cloudinaryImageId} className='card-img' />
      <h4>{name}</h4>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{lastMileTravelString} minutes</h5>
      <h6>{avgRating} stars</h6>
    </div>
  );
};
