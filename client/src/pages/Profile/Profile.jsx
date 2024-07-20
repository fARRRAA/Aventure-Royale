import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import {  useNavigate } from 'react-router-dom';
import './Profile.css'
import { useLocation } from 'react-router-dom';
import { UserProfile } from './userProfile';
import { AdminProfile } from './adminProfile';
export function Profile() {
    const navigate = useNavigate();
    let location = useLocation();
    const currentUser = useAuth();
    useEffect(() => {
        if (!currentUser.email & location.pathname == '/user/profile') {
            navigate("/signin")
        }
    }, []);
    return (
        <>
            {
                currentUser.role === 'user' ?
                    <UserProfile/>
                    :
                   <AdminProfile/>

            }

        </>
    )
}
