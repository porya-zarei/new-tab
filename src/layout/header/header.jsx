import classes from "./header.module.scss";
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.listItems}>
                <NavLink
                    exact
                    className={({isActive}) =>
                        isActive
                            ? classes.navLinkActive + " " + classes.navLink
                            : classes.navLink
                    }
                    to="/">
                    Home
                </NavLink>
                <NavLink
                    exact
                    className={({isActive}) =>
                        isActive
                            ? classes.navLinkActive + " " + classes.navLink
                            : classes.navLink
                    }
                    to="/tasks">
                    Tasks
                </NavLink>
                <NavLink
                    exact
                    className={({isActive}) =>
                        isActive
                            ? classes.navLinkActive + " " + classes.navLink
                            : classes.navLink
                    }
                    to="/news">
                    News
                </NavLink>
                <NavLink
                    exact
                    className={({isActive}) =>
                        isActive
                            ? classes.navLinkActive + " " + classes.navLink
                            : classes.navLink
                    }
                    to="/tools">
                    Tools
                </NavLink>
                <NavLink
                    exact
                    className={({isActive}) =>
                        isActive
                            ? classes.navLinkActive + " " + classes.navLink
                            : classes.navLink
                    }
                    to="/setting">
                    Setting
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
