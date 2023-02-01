import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Footer as MainFooter } from '../src/components/Footer'; //Named Export Example
import * as MainHeader from '../src/components/Header'; //Example of * as ... export as there are many Named export in Header component
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import ProfileClass from './components/ProfileClass';

const AppLayout = () => {
  console.log('body render');
  return (
    <>
      {/* <Header /> */}
      {/* <Body /> */}
      <MainHeader.Header /> {/* in Header we have many exports in that case we can use it as like this*/}
      {/* <Body /> Body is Childern for Applayout so, all the children will come under Outlet*/}
      <Outlet />
      <MainFooter />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <ProfileClass name={"This is from Outlet"} />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
