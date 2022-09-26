import { Fragment } from "react";
import Head from "next/head";
import Register from "../../components/Auth/Register";

const RegisterPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up!</title>
        <meta name="description" content="Sign up module page for users." />
      </Head>
      <Register />
    </Fragment>
  );
};

export default RegisterPage;
