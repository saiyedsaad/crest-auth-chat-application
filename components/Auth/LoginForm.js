import Link from "next/link";
import Providers from "../helpers/Providers";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.loginForm}>
      <form onSubmit={submitHandler}>
        <div className={classes.logo}>CREST AUTH</div>
        <h2>Log Into Your Account</h2>
        <Providers />
        <div className={classes.options}>
          <span>OR</span>
        </div>
        <div className={classes.inputs}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
        <span className={classes.signUp}>
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
