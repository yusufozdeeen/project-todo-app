import React from 'react'
import { Formik, Field, Form } from 'formik';

const TodoForm = () => {
  return (
    <Formik
      initialValues={{
        text: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >

    <Form>
    <input className="new-todo"
    placeholder="What needs to be done?"
    autoFocus
    />

</Form>
</Formik>
  );

}

export default TodoForm
