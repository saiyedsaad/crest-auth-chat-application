import classes from "./Register.module.css";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.description}>
          <h3>Join our community to connect with your loved ones.</h3>
          <p>
            Sign-up to our portal with any option you feel comfortable with.
          </p>
        </div>
        <div className={classes.image}>
          <Image
            src="/assets/register.png"
            alt="Register Illustrations"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div className={classes.main}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
