import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from './greetingSlice';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <>

      { greetings.length > 0 ? greetings.map((post) => (

        <div key={post.id}>

          <h3>
            {' '}
            Greeting :
            {post.id}
          </h3>
          <p>{post.title}</p>

        </div>
      ))

        : 'Please wait...'}

    </>

  );
}

export default Greeting;
