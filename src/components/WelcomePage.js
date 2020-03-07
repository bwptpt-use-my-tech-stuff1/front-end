import React from 'react';

const WelcomePage = ({ history }) => {
  return (
    <div>
      <h1>Use My Tech Stuff</h1>
      <h2 className='heading-large'>
        Let your tech
        <br />
        make you money
      </h2>
      <h3 className='heading-medium'>or save money by renting locally</h3>
      <h3 className='heading-small'>
        Why you'll love us
        <span role='img' aria-label='heart'>
          ❤️
        </span>
      </h3>
      <p className='welcome-desc'>
        We help you <strong>save money</strong> by renting tech equipment
        locally.
        <br /> We offer <strong>safe</strong> and <strong>secure</strong>{' '}
        handling.
        <br /> <strong>You get to choose</strong> the day and time that works
        for you.
      </p>
      <button className='signup-btn' onClick={() => history.push('/sign_up')}>
        Sign up
      </button>
      <button className='login-btn' onClick={() => history.push('/login')}>
        Sign in
      </button>
    </div>
  );
};

export default WelcomePage;
