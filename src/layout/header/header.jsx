import classes from "./header.module.scss";
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.listItems}>
                <NavLink
                    exact
                    activeClassName={classes.navLinkActive}
                    className={classes.navLink}
                    to="/">
                    Home
                </NavLink>
                <NavLink
                    exact
                    activeClassName={classes.navLinkActive}
                    className={classes.navLink}
                    to="/tasks">
                    Tasks
                </NavLink>
                <NavLink
                    exact
                    activeClassName={classes.navLinkActive}
                    className={classes.navLink}
                    to="/setting">
                    Setting
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
