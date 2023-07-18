import React from "react";
import classes from "./index.module.scss";
// import Logo from "../../Images/logo.svg";
import Nav from "../Nav/Nav";

const Sidebar = () => {
    return (
        <>
            <aside className={classes.sidebar}>
                {/* <Logo /> */} LOGO
                {/* <Profile /> */}
                <Nav />
            </aside>
        </>
    )
}

export default Sidebar;