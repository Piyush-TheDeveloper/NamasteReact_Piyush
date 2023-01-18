import { useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { restaurantList } from '../config';

function searchData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant?.data?.name?.includes(searchText));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <div className='container'>
      <div className='searchbar'>
        <input
          type='text'
          placeholder='Search for Restaurant'
          className='search-input'
          key='input-text'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='btn-submit'
          onClick={() => {
            const data = searchData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className='restaurant-list'>
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant?.data} key={restaurant.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
