import Link from "next/link";
import Providers from "../helpers/Providers";
import classes from "./LoginForm.module.css";
import loginValidation from "../../lib/validate";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const submitHandler = async (values) => {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status.ok) {
      router.push(status.url);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidation,
    onSubmit: submitHandler,
  });

  return (
    <div className={classes.loginForm}>
      <div className={classes.header}>
        <div className={classes.logo}>CREST AUTH</div>
        <h2>Log Into Your Account</h2>
        <Providers />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.options}>
          <span>OR</span>
        </div>
        <div className={classes.inputs}>
          <label htmlFor="email">E-Mail</label>
          <div className={formik.errors.email ? classes.error : ""}>
            <input
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            <div>
              {formik.errors && formik.touched.email ? (
                <span>{formik.errors.email}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <label htmlFor="password">Password</label>
          <div className={formik.errors.password ? classes.error : ""}>
            <input
              type="password"
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            <div>
              {formik.errors.password && formik.touched.password ? (
                <span className={classes.error}>{formik.errors.password}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
        <span className={classes.login}>
          Don't have an account?
          <Link href="/register">
            <a className={classes.register}>Sign Up</a>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
