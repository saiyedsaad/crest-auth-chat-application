import Google from "./Google";
import Facebook from "./Facebook";
import GitHub from "./GitHub";
import classes from "./Providers.module.css";
import Twitter from "./Twitter";

const Providers = () => {
  return (
    <div className={classes.providers}>
      <Google />
      <Facebook />
      <GitHub />
      <Twitter />
    </div>
  );
};

export default Providers;
