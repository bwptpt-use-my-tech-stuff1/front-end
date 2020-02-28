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
          name='first_name'
          label='First name'
          variant='outlined'
          component={TextField}
        />

        <Field
          type='text'
          name='last_name'
          label='Last name'
          variant='outlined'
          component={TextField}
        />

        <Field
          type='email'
          name='email'
          label='Email'
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
  mapPropsToValues({ first_name, last_name, email, password }) {
    return {
      first_name: first_name || '',
      last_name: last_name || '',
      email: email || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    first_name: Yup.string().required('Please enter your first name'),
    last_name: Yup.string().required('Please enter your last name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    password: Yup.string()
      .min(8)
      .max(16)
      .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
      .required('Please enter a password')
  }),
  handleSubmit(values, { history }) {
    axiosWithAuth()
      .post('', values)
      .then(res => {
        history.push('/login');
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
})(SignUpForm);

export default SignUp;
