import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer as MainFooter } from '../src/components/Footer'; //Named Export Example
import * as MainHeader from '../src/components/Header'; //Example of * as ... export as there are many Named export in Header component
import Body from './components/Body';

//Config Driven UI

//Restaurant Card Component
// const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
//   return (
//     <div className='card'>
//       <img src={`${imgURL}${cloudinaryImageId}`} width='400' />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(', ')}</h3>
//       <h4>{lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className='restaurant-list'>
//       {restaurantList.map((restaurant) => {
//         return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
//       })}
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Body /> */}
      <MainHeader.Header /> {/* in Header we have many exports in that case we can use it as like this*/}
      <Body />
      <MainFooter />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
