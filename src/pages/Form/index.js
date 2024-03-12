import React, { useState } from "react";
import { useFormik } from "formik";

import FormInput from "../../components/FormInput/FormInput";

import { inputsArr } from "./Form.data";
import { signUpSchema } from "../../schemas";

import "./Form.css";

// const usernameRegex = RegExp(/^[A-Za-z0-9]{3,16}$/);
// const emailRegex = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/);
// const passwordRegex = RegExp(
//   /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
// );

const initialValues = {
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
const Form = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        setLoading(true);
        setTimeout(() => {
          const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
          if (
            existingUsers.some((v) => {
              return v.email === values.email;
            })
          ) {
            alert("Email already exists");
          } else {
            existingUsers.push(values);
            const serializedData = JSON.stringify(existingUsers);
            localStorage.setItem("users", serializedData);
          }

          actions.resetForm();
          setLoading(false);
        }, 2000);
      },
    });

  const inputs = inputsArr({ values, errors, touched });
  console.log(errors);

  const [loading, setLoading] = useState(false);

  let isDisableButton = errors == {} ? console.log("Yeah") : true;

  // const isDisableButton = !isFormValues || isFormErrors;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setTimeout(() => {
  //     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  //     if (
  //       existingUsers.some((v) => {
  //         return v.email === values.email;
  //       })
  //     ) {
  //       alert("Email already exists");
  //     } else {
  //       existingUsers.push(values);
  //       const serializedData = JSON.stringify(existingUsers);
  //       localStorage.setItem("users", serializedData);
  //     }

  //     setValues({
  //       username: "",
  //       email: "",
  //       birthday: "",
  //       password: "",
  //       confirmPassword: "",
  //     });
  //     setLoading(false);
  //   }, 2000);
  // };

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Register</h2>
        {inputs?.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
          />
        ))}
        <button className="btn" type="submit">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
