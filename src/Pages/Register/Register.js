import React, { useContext, useState } from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const Register = () => {
    const [error, setError] = useState('');

    const { createUserWithGoogle, createUser, updateUserProfile, createUserWithGithub, setLoading } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log("user input: ", name, photoURL, email, password);


        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log("email-pass sign up:", user);
                handleUpdateUserProfile(name, photoURL);
                toast('Registration Successfull with Email and Password');
                setError('');
                setLoading(false);
                navigate(from, { replace: true })

                form.reset();
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.error(error))
    }



    const handleGoogleSingIn = () => {
        createUserWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log("google user: ", user);
                toast('Registration Successfull !');
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
                setError('');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message)
            })

    }

    return (
        <div className='container myForm ms-auto border p-4 my-5 '>
            <Form onSubmit={handleFormSubmit} className=''>
                <h1 className='text-center'>Register</h1>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Register
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>

            <div className='text-center'>
                <hr />
                <p> <small>Sign Up with Social Media</small> </p>
                <button onClick={handleGoogleSingIn} className='btn btn-outline-success mb-2 d-block w-100'>Google</button>
                <button onClick={handleGithubSignIn} className='btn btn-outline-success d-block w-100'>GitHub</button>
            </div>
            <p className='text-center'> <small>Already have an account? <Link to='/login'>Login</Link></small> </p>



        </div>
    );
};

export default Register;