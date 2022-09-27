import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, getSession, signOut } from "next-auth/react";
import classes from "../styles/Home.module.css";

const HomePage = () => {
  const { data: session } = useSession();

  const signOutHandler = () => {
    signOut();
  };

  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, signOutHandler }) : Guest()}
    </Fragment>
  );
};

// GUEST USER HOME PAGE
const Guest = () => {
  return (
    <main className={classes.container}>
      <h2>Guest Home Page</h2>

      <div className={classes.goTo}>
        <Link href="/login">
          <a className={classes.link}>Sign In</a>
        </Link>
      </div>
    </main>
  );
};

// AUTHORIZED USER HOME PAGE
const User = ({ session, signOutHandler }) => {
  const imageURL = session.user.image;

  return (
    <main className={classes.container}>
      <h2>Authorized User Home Page</h2>

      <div className={classes.details}>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div>
        <img
          className={classes.image}
          src={imageURL ? imageURL : "/assets/profile.jpg"}
          alt="Profile Picture"
        />
      </div>

      <div className={classes.goTo}>
        <button className={classes.btn} onClick={signOutHandler}>
          Sign Out
        </button>
      </div>
      <div className={classes.goTo}>
        <Link href="/profile">
          <a className={classes.link}>Profile</a>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
