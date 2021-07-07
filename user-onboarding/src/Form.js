import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  name: yup.string()
  .required('A name is required')
  .min(3, 'Name must be 3 characters or longer'),

  email: yup.string()
  .email('Email is not valid')
  .required('An email is required'),

  password: yup.string()
  .min(6, 'Password must be at least 6 characters')
  .required('A password is required'),

  checkbox: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
})

function UserForm(props) {
    const {onSubmit, initialUserForm} = props;
    
    return (
  <Formik 
  validationSchema={validationSchema}
    onSubmit={onSubmit}
    initialValues={initialUserForm}
    render={props => {
      return (
        <Form>
          <div>
            <label>
              Name
              <Field name='name' type='text' placeholder='Name'/>
              <ErrorMessage name='name' component='div'/>
            </label>
          </div>
          <div>
            <label>
              Email
              <Field name='email' type='email' placeholder='Email'/>
              <ErrorMessage name='email' component='div'/>
            </label>
          </div>
          <div>
            <label>
              Password
              <Field name='password' type='password' placeholder='Password'/>
              <ErrorMessage name='password' component='div'/>
            </label>
          </div>
          <div>
            <label>
              Terms of Service
              <Field name='checkbox' type='checkbox' placeholder='Checkbox'/>
              <ErrorMessage name='checkbox' component='div'/>
            </label>
          </div>
          <button type='submit'>Submit</button>
        </Form>
    )
}} 
/>
    )
}

export default UserForm;