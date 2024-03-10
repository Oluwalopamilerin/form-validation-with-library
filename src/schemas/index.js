import * as Yup from "yup";

const passwordRegex = RegExp(
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
);

export const signUpSchema = Yup.object({
  username: Yup.string().min(3).max(16).required("Please enter your username"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .matches(passwordRegex, "Please enter valid password")
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("Please enter confirm password"),
});
