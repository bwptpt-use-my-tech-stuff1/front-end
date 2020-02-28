import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const Login = () => {
  return (
    <div>
      <h2>Sign in</h2>
      <p>
        Need a Use My Tech Stuff account? <br />
        <Link to='/sign_up'>Create an account</Link>
      </p>
      <Form>
        <Field
          type='text'
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
        <button type='submit'>Sign in</button>
      </Form>
    </div>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .max(16)
      .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
      .required()
  }),
  handleSubmit(values, { history }) {
    axiosWithAuth()
      .post('', values)
      .then(res => {
        history.push('/dashboard');
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
})(Login);

export default LoginForm;
