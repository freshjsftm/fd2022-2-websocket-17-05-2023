import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { authUser } from '../../store/userSlice';

const FormAuth = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(authUser(values));
  };
  return (
    <Formik initialValues={{ login: '' }} onSubmit={onSubmit}>
      <Form>
        <Field name="login" placeholder="login" />
        <input type="submit" value="auth" />
      </Form>
    </Formik>
  );
};

export default FormAuth;
