export const inputsArr = ({ values, errors, touched }) => {
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: touched && errors?.username,
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "user@gmail.com",
      errorMessage: touched && errors?.email,
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: touched && errors?.password,
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: touched && errors?.confirmPassword,
      label: "Confirm Password",
    },
  ];

  return inputs;
};
