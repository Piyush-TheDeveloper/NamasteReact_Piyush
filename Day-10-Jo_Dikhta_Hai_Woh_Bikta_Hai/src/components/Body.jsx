import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantCard } from './RestaurantCard';
import { DATA_API } from '../config';
import Shimmer from './Shimmer';
import { searchData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  //Called SWIGGY API Here. Best Place to Call API is useEffect
  useEffect(() => {
    getRestaurants();
  }, []);

  //Fetching Data from API
  async function getRestaurants() {
    const data = await fetch(DATA_API);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> 🔴 Offline, Please Check You Connection</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='container'>
      <div className='m-4 flex place-content-center h-12 rounded-full'>
        <input
          type='text'
          placeholder='Search for Restaurant'
          className='w-96 p-4 rounded-xl border-2 border-green-600 focus:bg-green-50 shadow-lg'
          key='input-text'
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = searchData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        />
      </div>
      {filteredRestaurants.length === 0 ? (
        <h1>No Restaurants Found...</h1>
      ) : (
        <div className='flex flex-wrap p-2 place-content-evenly gap-y-6'>
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id} className='link-styles'>
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
