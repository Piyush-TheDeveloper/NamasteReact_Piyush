import { useState, useEffect } from 'react';

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {

    console.log('useEffect')

    const timer = setInterval(() => {
      console.log('Namaste React');
    }, 1000);
    
    //return is used for Clean Up as we used componentWillUnmount in Class Component
    return ()=>{
      console.log('useEffect Return')
      clearInterval(timer);
    }
  }, []);
 
  console.log('render')

  return (
    <div>
      <h2>This is Profile Functional Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <h3>Count-2 : {count2}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 * 2);
        }}
      >
        Function Counter
      </button>
    </div>
  );
};

export default Profile;
