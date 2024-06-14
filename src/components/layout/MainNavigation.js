import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"; //CSS Module for scoping

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Henry's React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
