import { useEffect, useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { DATA_API } from '../config';
import Shimmer from './Shimmer';

function searchData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  //Called SWIGGY API Here. Best Place to Call API is useEffect
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(DATA_API);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div className='container'>
      <div className='searchbar'>
        <input
          type='text'
          placeholder='Search for Restaurant'
          className='search-input'
          key='input-text'
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='btn-submit'
          onClick={() => {
            const data = searchData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants.length === 0 ? (
        <h1>No Restaurants Found...</h1>
      ) : (
        <div className='restaurant-list'>
          {filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant?.data} key={restaurant.data.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
