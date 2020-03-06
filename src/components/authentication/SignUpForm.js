import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const SignUpForm = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <Form>
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
        <button type='submit'>Submit</button>
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
