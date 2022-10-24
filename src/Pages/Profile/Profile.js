import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Name: {user?.displayName} </h1>
            <h2>This is user profile details page</h2>
        </div>
    );
};

export default Profile;