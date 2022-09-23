import LoginForm from "./LoginForm";
import classes from "./Login.module.css";
import Image from "next/image";

const Login = () => {
  return (
    <div className={classes.body}>
      <div className={classes.main}>
        <LoginForm />
      </div>
      <div className={classes.content}>
        <div className={classes.description}>
          <h3>Allows you to connect easily, and efficiently.</h3>
          <p>
            Gives you the opportunity to get authorized with flexibility and
            ease.
          </p>
        </div>
        <div className={classes.image}>
          <Image
            src="/assets/login.png"
            alt="Login Illustrations"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
