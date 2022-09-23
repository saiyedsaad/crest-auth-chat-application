import Head from "next/head";
import { Fragment } from "react";
import Login from "../../components/Auth/Login";

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Log In to your account using your credentials"
        />
      </Head>
      <Login />
    </Fragment>
  );
};

export default LoginPage;
