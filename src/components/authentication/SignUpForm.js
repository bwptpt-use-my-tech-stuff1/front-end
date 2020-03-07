import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const SignUpForm = () => {
  return (
    <div>
      <Form className='sign-form'>
        <h2>Sign Up</h2>
        <p>
          Already have a Use My Tech Stuff account? <br />
          <Link to='/login'>Sign in</Link>
        </p>
        <Field
          type='text'
          name='firstName'
          label='First name'
          variant='outlined'
          component={TextField}
        />
        <Field
          type='text'
          name='lastName'
          label='Last name'
          variant='outlined'
          component={TextField}
        />
        <Field
          type='text'
          name='username'
          label='Username'
          variant='outlined'
          component={TextField}
        />
        <Field
          type='password'
          name='password'
          label='Password'
          variant='outlined'
          component={TextField}
        />
        <button className='sign-btn' type='submit'>
          Submit
        </button>
      </Form>
    </div>
  );
};

const SignUp = withFormik({
  mapPropsToValues({ firstName, lastName, username, password }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    username: Yup.string().required('Please enter an username'),
    password: Yup.string()
      .min(6)
      .max(16)
      .required('Please enter a password')
  }),
  handleSubmit(values, { props }) {
    axiosWithAuth()
      .post('/api/auth/register', values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
})(SignUpForm);

export default SignUp;
