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
        <button type='submit'>Sign in</button>
      </Form>
    </div>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { props }) {
    axiosWithAuth()
      .post('/api/auth/login', values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
})(Login);

export default LoginForm;
