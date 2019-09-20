import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';



function UserForm(props) {
    const {onSubmit, initialUserForm} = props;
    return (
  <Formik 
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
          {/* <div>
            <label>
              Terms of Service
              <Field name='terms-of-service' type='checkbox' placeholder='TermsOfService'/>
              <ErrorMessage name='terms-of-servie' component='div'/>
            </label>
          </div> */}
          <button type='submit'>Submit</button>
        </Form>
    )
}} 
/>
    )
}

export default UserForm;