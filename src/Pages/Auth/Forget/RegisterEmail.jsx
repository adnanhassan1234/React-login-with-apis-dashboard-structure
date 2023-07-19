import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const RegisterEmail = () => {
//   const dispatch = useDispatch();

//   const [userEmail, setUserEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user_fcm_token, setfcm_token] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const signinToEmailHome = async (e) => {
        navigate("/forget-Password");
    // setIsLoading(true);

    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // } else {
    //   e.preventDefault();
    //   setValidated(true);

    //   AuthService.postMethod(ENDPOINT.login, false, {
    //     email: userEmail,
    //     password: password,
    //     fcm_token: user_fcm_token,
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
    //       localStorage.setItem("refreshToken", JSON.stringify(res.data.refreshToken));
    //       dispatch({
    //         type: LOGIN_SUCCESS,
    //         payload: { user: res.data.user },
    //       });

    //       setTimeout(function () {
    //         setIsLoading(false);
    //         navigate("/");
    //       }, 1000);
    //     })
    //     .catch((err) => {
    //       setIsLoading(false);
    //       swal("Error", `${AuthService.errorMessageHandlerLogin(err)}`, "error");
    //     });
    // }
  };

//   if (isLoading === true) return <Loader isLoading={isLoading} />

    return (
            <div className="formBox">
                <h1>Reset Password</h1>
                <Form 
                //  noValidate validated={validated}
                 >
                    <Form.Group className="mb-3" controlId="loginemail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                // onChange={(e) => {
                                //     setUserEmail(e.target.value);
                                // }}
                            />
                        </InputGroup>
                    </Form.Group>
      
                    <Form.Group className={"mb-3"} controlId="formBasicCheckbox">
                        <Button
                            variant="primary"
                            type="submit"
                            className={"w-100"}
                            onClick={signinToEmailHome}
                        >
                            Reset
                        </Button>
                    </Form.Group>

                </Form>

            </div>
        );

};

export default RegisterEmail;
