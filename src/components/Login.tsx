// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postData } from '../utillity/utils';

const Login = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: ''}}
      validate={values => {
        const errors:any = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {

        console.log(values.email)
        const data = {username:values.email, password:values.password}

        postData("http://localhost:8000/api/token/", data)
        .then((result)=>{
            console.log(result.data)
            localStorage.setItem("refresh_token", result.data["refresh"])
            localStorage.setItem("access_token", result.data["access"])
        })
        .catch((e)=>console.log(e))


        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field type="email" name="email" placeholder="Enter Email" /><br />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Enter Password" /><br />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
                Login
            </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;


// user = models.OneToOneField(User, on_delete=models.CASCADE, default=None, related_name='users')
// name = models.CharField(max_length=200, null=True)
// address = models.CharField(max_length=2000)
// phone_number = models.CharField(max_length=20)