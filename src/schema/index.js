import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const namerules = /^[a-zA-Z]+$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const firstSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Min length should be 3")
    .matches(namerules, { message: "Only alphabets are allowed" })
    .required("Required"),
  lastName: yup
    .string()
    .min(3, "Min length should be 3")
    .matches(namerules, { message: "Only alphabets are allowed" })
    .required("Required"),
  email: yup
    .string()
    .matches(emailRules, { message: "Please enter a valid email" })
    .required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  checkFlag: yup.bool().oneOf([true], "Required"),
  option: yup.string().required("Required")
});
