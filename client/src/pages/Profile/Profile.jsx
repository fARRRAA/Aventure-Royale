import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { redirect } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import './Profile.css'
import { useLocation } from 'react-router-dom';

export function Profile() {
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        if (!currentUser.email & location.pathname=='/user/profile') {
            navigate("/signin")
        }
    }, [])
    
    const currentUser = useAuth();
    return (
        <>
            <p className="profile_title">Ваш Профиль</p>
            <div className="profile">
                <div className="profile_inner">
                    <div className="profile_info">
                        <div className="profile_left">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="" />
                            <p className="profile_name">{currentUser.lname + ' ' + currentUser.fname}</p>
                            <p className="profile_address">г.Казань, Бари Галеева 3А</p>
                        </div>
                        <div className="profile_right">
                            <div className="right_line">
                                <p className="line_title">Полное Имя</p>
                                <p className="line_subtitle">{currentUser.lname + ' ' + currentUser.fname}</p>
                            </div>
                            <div className="right_line">
                                <div className="line_title">Email</div>
                                <div className="line_subtitle">{currentUser.email}</div>
                            </div>
                            <div className="right_line">
                                <div className="line_title">Телефон</div>
                                <div className="line_subtitle">{currentUser.phone}</div>
                            </div>
                            <div className="right_line">
                                <div className="line_title">Адрес</div>
                                <div className="line_subtitle">г.Казань, Бари Галеева 3А</div>
                            </div>

                        </div>
                    </div>
                    <div className="profile_cart">
                        <div className="cart_title">Ваша корзина</div>
                        <div className="cart_wrapper">
                            <p className='cart_empty'>Ваша корзина пуста...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}