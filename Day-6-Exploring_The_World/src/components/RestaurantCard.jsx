import { ImgURL } from '../config';

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, avgRating }) => {
  return (
    <div className='card'>
      <img src={ImgURL + cloudinaryImageId} className='card-img' />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h5>{lastMileTravelString} minutes</h5>
      <span>{avgRating}</span>
    </div>
  );
};
