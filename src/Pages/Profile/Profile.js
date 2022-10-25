import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';


const Profile = () => {

    const { user, updateUserProfile, setLoading } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);

    const handleNameChage = (e) => {
        setName(e.target.value);
    }

    const handlePhotoURL = (e) => {
        setPhotoURL(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {
                toast("Profile Updated")
                setLoading(false)
            })
            .catch((error) => {
                toast(error.message)
            })

    }






    return (
        <div className='container my-5'>
            <h2 className='text-center'>User Profile</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleNameChage} defaultValue={user?.displayName} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control onChange={handlePhotoURL} defaultValue={user?.photoURL} type="text" placeholder="Enter photoURL" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default Profile;