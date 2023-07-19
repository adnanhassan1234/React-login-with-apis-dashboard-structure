import React, { useState, useEffect } from "react";
import RegisterEmail from "../Forget/RegisterEmail";
// import { useDispatch } from "react-redux";
// import { Form, InputGroup, Button } from "react-bootstrap";
// import classes from "../login.scss";
// import emailsvg from "../../../Images/email.svg";
// import Lock from "../../../Images/Lock.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { ENDPOINT, KEY } from "config/constants";
// import AuthService from "services/auth.service";
// import accessHeader from "services/headers/access-header";
// import Loader from "Components/Loader";
// import { LOGIN_SUCCESS } from "actions/types";
// import swal from 'sweetalert';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    // const dispatch = useDispatch();

    // const [userEmail, setUserEmail] = useState(null);
    // const [password, setPassword] = useState(null);
    // const [user_fcm_token, setfcm_token] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);

    /* const fcm_token = getToken();
 
     fcm_token.then(function (result) {
         setfcm_token(result);
         console.log(result);
     });*/

    // const [validated, setValidated] = useState(false);
    // const navigate = useNavigate();
    // const goToDashboard = () => {
    //     navigate('/dashboard');
    // };

  

    // if (isLoading == true)
    //     return <Loader isLoading={isLoading} />;



    return (
        <div className="header">
            <h1>Sign in to Manage.</h1>
            <p className={"font-18 mb-5"}>Enter your detail below</p>
          <RegisterEmail />
        </div>
    );

};

export default Login;
