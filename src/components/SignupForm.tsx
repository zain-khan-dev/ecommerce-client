// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postData } from '../utillity/utils';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '', address:'',name:'',phone_number:'' }}
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
        const data = {user:{username:values.email, password:values.password},name:values.name, address:values.address, phone_number:values.phone_number}

        postData("http://localhost:8000/ecommerce/customer/", data)
        .then((result)=>console.log(result))
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
            <Field type="text" name="name" placeholder="Enter Name" /><br />
            <ErrorMessage name="name" component="div" />
            <Field type="password" name="password" placeholder="Enter Password" /><br />
            <ErrorMessage name="password" component="div" />
            <Field type="text" name="address" placeholder="Enter Address" /><br />
            <ErrorMessage name="address" component="div" />
            <Field type="text" name="phone_number" placeholder="Enter Phone Number" /><br />
            <ErrorMessage name="phone_number" component="div" />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;


// user = models.OneToOneField(User, on_delete=models.CASCADE, default=None, related_name='users')
// name = models.CharField(max_length=200, null=True)
// address = models.CharField(max_length=2000)
// phone_number = models.CharField(max_length=20)