import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {

    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState();
    const { createUserWithGoogle, createUserWithGithub, signIn, passwordReset } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log("location from login route: ", location.pathname);



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log("login input: ", email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                toast("Successfully Logged In");
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleGoogleSingIn = () => {
        createUserWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log("google user: ", user);
                toast('Registration Successfull !');
                setError('');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message)
            })

    }




    const handleGithubSignIn = () => {
        createUserWithGithub()
            .then((result) => {
                const user = result.user;
                console.log("github user: ", user);
                toast('Registration Successfull !');
                setError('');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message)
            })

    }


    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handleForgotPassword = () => {
        passwordReset(userEmail)
            .then(() => {
                toast("Password reset email sent in your email address. Please check your email.")

            })
            .catch((error) => {
                toast(error.message)
            })
    }



    return (
        <div className='container w-md-50 w-100 ms-auto border p-4 my-5 '>
            <Form onSubmit={handleFormSubmit} className=''>
                <h1 className='text-center'>Login</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br />

                <small> <Button onClick={handleForgotPassword} variant="link"> Forget Password? Reset Password</Button>  </small>

            </Form>

            <div className='text-center'>
                <hr />
                <p> <small>Sign in with Social Media</small> </p>
                <button onClick={handleGoogleSingIn} className='btn btn-outline-success mb-2 d-block w-100'>Google</button>
                <button onClick={handleGithubSignIn} className='btn btn-outline-success d-block w-100'>GitHub</button>
            </div>
            <p className='text-center'> <small>Are you new to this site? <Link to='/register'>Registrater Now</Link></small> </p>



        </div>
    );
};

export default Login;