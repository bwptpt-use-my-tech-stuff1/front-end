import React from 'react';

const WelcomePage = () => {
  return (
    <div>
      <h1>Use My Tech Stuff</h1>
      <h3>Let your tech make you money</h3>
      <p>or save money by renting locally</p>
      <h3>
        Why you'll love us
        <span role='img' aria-label='heart'>
          ❤️
        </span>
      </h3>
      <p>
        We help you save money by renting tech equipment locally.
        <br />
        We offer safe and secure handling.
        <br />
        You get to choose the day and time that works for you.
      </p>
      <button>Sign up</button>
      <button>Sign in</button>
    </div>
  );
};

export default WelcomePage;
