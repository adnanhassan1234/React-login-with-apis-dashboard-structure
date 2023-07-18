import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

const Header = (props) => {
    return (
        <div className={`${classes.Header}`}>
            <header id={classes.header}>
                <div className={classes.headerRight}>
                    <div className="d-flex">
                        <Form>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1"><i className="fal fa-search"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search.."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                        </Form>
                        <div className={classes.headerIcons}>
                            <i className="icon-Mute-notification"></i>

                        </div>
                    </div>
                </div>
                <div className={classes.headerRight}>
                    <h3>{props.title}</h3>
                </div>
            </header>
        </div>
    )
}

export default Header;