export const inputsArr = ({ values, errors, submitCount }) => {
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: submitCount > 0 && errors?.username,
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "user@gmail.com",
      errorMessage: submitCount > 0 && errors?.email,
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
      errorMessage: submitCount > 0 && errors?.password,
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: submitCount > 0 && errors?.confirmPassword,
      label: "Confirm Password",
    },
  ];

  return inputs;
};
