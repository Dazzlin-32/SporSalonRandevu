import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default SignUpSchema;
