import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classes from './index.module.scss';

const Nav = () => {
    
    return (
        <>
        
            <nav>
                <ul>
                    <li>
                        <Link to={"/dashboard"}><i className="icon-dashboard"></i>Dashboard</Link>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle  variant="success" id="dropdown-basic">
                                <i className="icon-user1"></i>Users
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to={"/end-user"}>End Users</Link>
                                <Link to={"/providers"}>Providers</Link>
                                <Link to={"/sub-admin"}>Sub Admins</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link to={"/home"}> <i className="icon-Star"></i> Challenges</Link>
                    </li>
                    <li>
                        <Link to={"/"}> <i className="icon-Heart"></i> Affirmations</Link>
                    </li>
                    <li>
                        <Link to={"/reminder"}> <i className="icon-reminders"></i>Reminders</Link>
                    </li>
                    <li>
                        <Link to={"/support"}> <i className="icon-phone"></i>Support</Link>
                    </li>

                    <li>
                        <Link to={"/guidelines"}> <i className="icon-guidline"></i>Guidelines</Link>
                    </li>
                    <li>
                        <Link to={"/sponsorship"}> <i className="icon-sponsorship"></i>Sponsorship</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;