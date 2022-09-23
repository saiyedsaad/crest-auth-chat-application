import Head from "next/head";
import { Fragment } from "react";
import classes from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className={classes.main}>
        <h1>Home Page</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;
