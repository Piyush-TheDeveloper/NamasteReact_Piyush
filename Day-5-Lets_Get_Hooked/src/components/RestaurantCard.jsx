import { ImgURL } from '../config';

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, avgRating }) => {
  return (
    <div className='card'>
      <img src={ImgURL + cloudinaryImageId} width='400' />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <span>{avgRating}</span>
    </div>
  );
};
