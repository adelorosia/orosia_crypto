import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/features/store";
import { registerApiUser } from "@/features/slices/authSlice";

interface IRegister {
  className: string;
  setIsActiveTab: (isActiveTab: boolean) => void;
}
const formSchema = Yup.object({
  firstName: Yup.string().required("Your Firstname is mandatory"),
  lastName: Yup.string().required("Your Lastname is mandatory"),
  userName: Yup.string().required("Your Username is mandatory"),
  email: Yup.string().email().required("Your Email is mandatory"),
  password: Yup.string()
    .required("Your Password is mandatory")
    .min(6, "Password must be at least 6 characters long"),
});
const Register = ({ className, setIsActiveTab }: IRegister) => {
  const dispatch=useDispatch<AppDispatch>()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName:"",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      await dispatch(registerApiUser(values))
      console.log("first")
    },
    validationSchema: formSchema,
  });
  return (
    <form className={cn(className)} onSubmit={formik.handleSubmit}>
      <p className="text-3xl font-Viga mb-6">Register Page</p>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm ">{`${
          formik.touched.firstName && formik.errors.firstName
            ? formik.errors.firstName
            : "First Name"
        }`}</label>
        <Input
          className={`${formik.errors.firstName && "outline outline-red-500"}`}
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange("firstName")}
          onBlur={formik.handleBlur("firstName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm">{`${
          formik.touched.lastName && formik.errors.lastName
            ? formik.errors.lastName
            : "Last Name"
        }`}</label>
        <Input
          className={`${formik.errors.lastName && "outline outline-red-500"}`}
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange("lastName")}
          onBlur={formik.handleBlur("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm">{`${
          formik.touched.userName && formik.errors.userName
            ? formik.errors.userName
            : "Username"
        }`}</label>
        <Input
          className={`${formik.errors.userName && "outline outline-red-500"}`}
          type="text"
          placeholder="Username"
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange("userName")}
          onBlur={formik.handleBlur("userName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm ">{`${
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : "Email"
        }`}</label>
        <Input
          className={`${formik.errors.email && "outline outline-red-500"}`}
          placeholder="orosia@yahoo.com"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="text-sm">{`${
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : "Password"
        }`}</label>
        <Input
          className={`${formik.errors.password && "outline outline-red-500"}`}
          name="password"
          type="password"
          placeholder="123456"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
      </div>
      <Button
        type="submit"
        variant="default"
        className="my-4 uppercase font-Viga"
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
