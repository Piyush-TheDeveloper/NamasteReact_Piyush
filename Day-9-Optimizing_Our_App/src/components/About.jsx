import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    
    // console.log('parent constructor');
  }
 componentDidMount() {
    // console.log('parent componentDidMount');
  }
  render() {
    // console.log('parent render fn');
    return (
      <div>
        <h1>This is About Us Page</h1>
        <hr />
        {/* <Outlet /> */}
        <hr />
        <Profile name={'Piyush-Function'} />
        <hr />
        <ProfileClass name={'Piyush-Class-1'} child={'First Child'} />
        {/* <ProfileClass name={'Piyush-Class-2'} child={'Second Child'} /> */}
        <hr />
      </div>
    );
  }
}

export default About;
