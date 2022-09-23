import Google from "./Google";
import Facebook from "./Facebook";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import classes from "./Providers.module.css";

const Providers = () => {
  return (
    <div className={classes.providers}>
      <Google />
      <Facebook />
      <GitHub />
      <LinkedIn />
    </div>
  );
};

export default Providers;
