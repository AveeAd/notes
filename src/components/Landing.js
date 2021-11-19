import classes from "./landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className={classes.landing}>
      <section className={classes.illustration}>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + "/images/studying.svg"}
          alt="studying"
        />
      </section>
      <section className={classes.landingContent}>
        <p className={classes.text}>Get Access to Notes from Everywhere</p>
        <button className={classes.button}>
          <Link to="/notes">Get Notes</Link>
        </button>
      </section>
    </main>
  );
};

export default Landing;
