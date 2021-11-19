import classes from "./header.module.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.brandName}>
        <Link to="/">Notes</Link>
      </p>
      <nav>
        <ul className={classes.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.rightCircle}></div>
    </header>
  );
};

export default Header;
