import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { sendMessage } from '../../api';

const FormMessage = () => {
  const { user } = useSelector((state) => state.user);
  const onSubmit = (values, formikBag) => {
    values.author = user._id;
    sendMessage(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ content: '' }} onSubmit={onSubmit}>
      <Form>
        <Field name="content" placeholder="content" />
        <input type="submit" value="Send new message" />
      </Form>
    </Formik>
  );
};

export default FormMessage;
