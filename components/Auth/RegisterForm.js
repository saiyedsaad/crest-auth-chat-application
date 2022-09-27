import Link from "next/link";
import { useFormik } from "formik";
import { registerValidation } from "../../lib/validate";
import classes from "./RegisterForm.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const RegisterForm = () => {
  const router = useRouter();

  const submitHandler = async (values) => {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "http://localhost:3000/api/auth/signup",
      fetchOptions
    );

    const responseData = await response.json();

    if (responseData) {
      router.push("http://localhost:3000/login");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidation,
    onSubmit: submitHandler,
  });

  return (
    <div className={classes.registerForm}>
      <form onSubmit={formik.handleSubmit} type="submit">
        <div className={classes.logo}>Crest Auth</div>
        <h2>Create your account</h2>
        <div className={classes.inputs}>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="username"
            {...formik.getFieldProps("username")}
          />
          <div>
            {formik.errors.username && formik.touched.username ? (
              <span className={classes.error}>{formik.errors.username}</span>
            ) : (
              <></>
            )}
          </div>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" {...formik.getFieldProps("email")} />
          <div>
            {formik.errors.email && formik.touched.email ? (
              <span className={classes.error}>{formik.errors.email}</span>
            ) : (
              <></>
            )}
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          <div>
            {formik.errors.password && formik.touched.password ? (
              <span className={classes.error}>{formik.errors.password}</span>
            ) : (
              <></>
            )}
          </div>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            {...formik.getFieldProps("cpassword")}
          />
          <div>
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <span className={classes.error}>{formik.errors.cpassword}</span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={classes.actions}>
          <button>Confirm</button>
          <span className={classes.logIn}>
            Already have an account?
            <Link href="/login">
              <a className={classes.login}>Log In</a>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
