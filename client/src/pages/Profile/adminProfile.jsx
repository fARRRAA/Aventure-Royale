import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import './Profile.css'
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, set, child, get, update, push } from "firebase/database";
export function AdminProfile() {
    const navigate = useNavigate();
    let location = useLocation();
    const currentUser = useAuth();
    const [allPayments, setAllPayments] = useState([])
    const [payments, setPayments] = useState(null);
    const [userPayments, setUserPayments] = useState([]);
    const [allNonUsers, setAllNonUsers] = useState(null);
    const [allUsers, setAllUsers] = useState(null);
    const [feeds, setFeeds] = useState(null);
    const [AllFeeds, setAllFeeds] = useState(null);

    useEffect(() => {
        function getPays() {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'payments/')).then((snapshot) => {
                if (snapshot.exists()) {
                    setPayments(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        getPays();
    }, [])

    useEffect(() => {
        function getAllUsers() {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'users/')).then((snapshot) => {
                if (snapshot.exists()) {
                    setAllNonUsers(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        getAllUsers();
    }, [])

    useEffect(() => {
        function getFeeds() {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'feedback/')).then((snapshot) => {
                if (snapshot.exists()) {
                    setFeeds(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        getFeeds();
    }, [])

    useEffect(() => {
        function getNormalFeeds() {
            const newArray = [];
            feeds && Object.entries(feeds).forEach(([key, feed]) => {
                newArray.push(feed);
            });
            setAllFeeds(newArray);
        }
        getNormalFeeds();
        console.log(AllFeeds)
    }, [feeds])

    useEffect(() => {
        function getNormalUsers() {
            const newArray = [];
            allNonUsers && Object.entries(allNonUsers).forEach(([key, user]) => {
                newArray.push(user);
            });
            setAllUsers(newArray);
        }
        getNormalUsers();
    }, [allNonUsers])

    useEffect(() => {
        function getNormalPayments() {
            const newArray = [];
            payments && Object.entries(payments).forEach(([key, payment]) => {
                newArray.push(payment);
            });
            setAllPayments(newArray);
        }
        getNormalPayments();
    }, [payments])

    function findUserPayments(id) {
        let user = allUsers && allUsers.find(user => user.id == id);
        if (user) {
            return user.fname + ' ' + user.lname;
        }
    }

    function tryUpdate(){
        const db = getDatabase();
        const postData = {
            id:' naxuy',
            name:'ty lox'
        }
        const updates = {};
        updates['/tours/' +7] = postData;
        return update(ref(db), updates);
    }

    return (
        <>
            {
                    <div className="profile_admin">
                        <p className="profile_title">Админ Панель</p>
                        <div className="profile_admin-inner">
                            <div className="all_users">
                                <p className="cart_title">Все пользователи</p>
                                <div className="all_users-wrapper">
                                    {
                                        allUsers && allUsers.length > 0 ?
                                            allUsers.map(user => {
                                                return (
                                                    <div className="user_item">
                                                        <div className="user_item-id">Айди: <span>{user.id}</span></div>
                                                        <div className="user_item-name">Имя: <span>{user.fname + ' ' + user.lname}</span></div>
                                                        <div className="user_item-email">Почта: <span>{user.email}</span></div>
                                                        <div className="user_item-phone">Телефон: <span>{user.phone}</span></div>
                                                        <div className="user_item-password">Пароль: <span>{user.password}</span> </div>
                                                        <div className="user_item-role">Роль: <span>{user.role}</span></div>
                                                    </div>
                                                )
                                            })
                                            : <p>нет юзеров(((</p>
                                    }
                                </div>
                            </div>
                            <div className="all_payments">
                                <p className="cart_title">Все Покупки</p>
                                <div className="all_payments-wrapper">
                                    {
                                        allPayments && allPayments.length > 0 ?
                                            allPayments.map((pay, i) => {
                                                return (
                                                    <div className="profile_payment-item">
                                                        <p className='profile_payment-item-id'>Заказ:  <span>{i + 1}</span> </p>
                                                        <p className='profile_payment-item-id'>Имя покупателя:  <span>{findUserPayments(pay.userId)}</span> </p>
                                                        <p className='profile_payment-item-id'>Номер заказа:  <span>{pay.id}</span> </p>
                                                        <p className='profile_payment-item-price'>Сумма заказа: <span>{pay.totalPrice} ₽</span>  </p>
                                                        <div className="profile_payment-items-wrapper-title">Заказанные туры:</div>
                                                        <div className="profile_payment-item-tours">
                                                            {
                                                                pay.tours[0].map(fav => {
                                                                    return (
                                                                        <div className="profile_payment-item-tour">
                                                                            <div className="payment_item">
                                                                                <div className="payment_item-img">
                                                                                    <img src={fav.images[0][0]} alt="" />
                                                                                </div>
                                                                                <div className="payment_item-info">
                                                                                    <p className="payment_item-name">{fav.name}</p>
                                                                                    <div className="payment_item-rating-duration">
                                                                                        <div className="payment_item-rating">
                                                                                            <svg width="16" height="16" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" fill="#0093D0" />
                                                                                            </svg>
                                                                                            {fav.rating}
                                                                                        </div>
                                                                                        <div className="tour_dura">
                                                                                            <div className="dura_night">
                                                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path d="M7.46667 2.13333V0.533333C7.46667 0.391885 7.52286 0.256229 7.62288 0.15621C7.7229 0.0561903 7.85855 0 8 0C8.14145 0 8.27711 0.0561903 8.37712 0.15621C8.47714 0.256229 8.53333 0.391885 8.53333 0.533333V2.13333C8.53333 2.27478 8.47714 2.41044 8.37712 2.51046C8.27711 2.61048 8.14145 2.66667 8 2.66667C7.85855 2.66667 7.7229 2.61048 7.62288 2.51046C7.52286 2.41044 7.46667 2.27478 7.46667 2.13333ZM8 3.73333C7.15613 3.73333 6.33122 3.98357 5.62957 4.4524C4.92792 4.92122 4.38105 5.58759 4.05811 6.36722C3.73518 7.14685 3.65069 8.00473 3.81532 8.83239C3.97995 9.66004 4.38631 10.4203 4.98301 11.017C5.57972 11.6137 6.33996 12.0201 7.16762 12.1847C7.99527 12.3493 8.85315 12.2648 9.63278 11.9419C10.4124 11.619 11.0788 11.0721 11.5476 10.3704C12.0164 9.66878 12.2667 8.84387 12.2667 8C12.2654 6.86879 11.8155 5.78426 11.0156 4.98438C10.2157 4.18449 9.13121 3.73457 8 3.73333ZM3.356 4.11067C3.45608 4.21074 3.59181 4.26696 3.73333 4.26696C3.87486 4.26696 4.01059 4.21074 4.11067 4.11067C4.21074 4.01059 4.26696 3.87486 4.26696 3.73333C4.26696 3.59181 4.21074 3.45608 4.11067 3.356L3.044 2.28933C2.94393 2.18926 2.80819 2.13304 2.66667 2.13304C2.52514 2.13304 2.38941 2.18926 2.28933 2.28933C2.18926 2.38941 2.13304 2.52514 2.13304 2.66667C2.13304 2.80819 2.18926 2.94393 2.28933 3.044L3.356 4.11067ZM3.356 11.8893L2.28933 12.956C2.18926 13.0561 2.13304 13.1918 2.13304 13.3333C2.13304 13.4749 2.18926 13.6106 2.28933 13.7107C2.38941 13.8107 2.52514 13.867 2.66667 13.867C2.80819 13.867 2.94393 13.8107 3.044 13.7107L4.11067 12.644C4.16022 12.5944 4.19953 12.5356 4.22634 12.4709C4.25316 12.4061 4.26696 12.3367 4.26696 12.2667C4.26696 12.1966 4.25316 12.1272 4.22634 12.0625C4.19953 11.9977 4.16022 11.9389 4.11067 11.8893C4.06112 11.8398 4.00229 11.8005 3.93754 11.7737C3.8728 11.7468 3.80341 11.733 3.73333 11.733C3.66326 11.733 3.59387 11.7468 3.52912 11.7737C3.46438 11.8005 3.40555 11.8398 3.356 11.8893ZM12.2667 4.26667C12.3367 4.26672 12.4061 4.25297 12.4709 4.22621C12.5356 4.19944 12.5944 4.16018 12.644 4.11067L13.7107 3.044C13.8107 2.94393 13.867 2.80819 13.867 2.66667C13.867 2.52514 13.8107 2.38941 13.7107 2.28933C13.6106 2.18926 13.4749 2.13304 13.3333 2.13304C13.1918 2.13304 13.0561 2.18926 12.956 2.28933L11.8893 3.356C11.8147 3.43059 11.7638 3.52566 11.7432 3.62917C11.7226 3.73268 11.7331 3.83998 11.7735 3.93749C11.8139 4.03499 11.8824 4.11832 11.9701 4.17692C12.0579 4.23552 12.1611 4.26675 12.2667 4.26667ZM12.644 11.8893C12.5439 11.7893 12.4082 11.733 12.2667 11.733C12.1251 11.733 11.9894 11.7893 11.8893 11.8893C11.7893 11.9894 11.733 12.1251 11.733 12.2667C11.733 12.4082 11.7893 12.5439 11.8893 12.644L12.956 13.7107C13.0056 13.7602 13.0644 13.7995 13.1291 13.8263C13.1939 13.8532 13.2633 13.867 13.3333 13.867C13.4034 13.867 13.4728 13.8532 13.5375 13.8263C13.6023 13.7995 13.6611 13.7602 13.7107 13.7107C13.7602 13.6611 13.7995 13.6023 13.8263 13.5375C13.8532 13.4728 13.867 13.4034 13.867 13.3333C13.867 13.2633 13.8532 13.1939 13.8263 13.1291C13.7995 13.0644 13.7602 13.0056 13.7107 12.956L12.644 11.8893ZM2.66667 8C2.66667 7.85855 2.61048 7.7229 2.51046 7.62288C2.41044 7.52286 2.27478 7.46667 2.13333 7.46667H0.533333C0.391885 7.46667 0.256229 7.52286 0.15621 7.62288C0.0561903 7.7229 0 7.85855 0 8C0 8.14145 0.0561903 8.27711 0.15621 8.37712C0.256229 8.47714 0.391885 8.53333 0.533333 8.53333H2.13333C2.27478 8.53333 2.41044 8.47714 2.51046 8.37712C2.61048 8.27711 2.66667 8.14145 2.66667 8ZM8 13.3333C7.85855 13.3333 7.7229 13.3895 7.62288 13.4895C7.52286 13.5896 7.46667 13.7252 7.46667 13.8667V15.4667C7.46667 15.6081 7.52286 15.7438 7.62288 15.8438C7.7229 15.9438 7.85855 16 8 16C8.14145 16 8.27711 15.9438 8.37712 15.8438C8.47714 15.7438 8.53333 15.6081 8.53333 15.4667V13.8667C8.53333 13.7252 8.47714 13.5896 8.37712 13.4895C8.27711 13.3895 8.14145 13.3333 8 13.3333ZM15.4667 7.46667H13.8667C13.7252 7.46667 13.5896 7.52286 13.4895 7.62288C13.3895 7.7229 13.3333 7.85855 13.3333 8C13.3333 8.14145 13.3895 8.27711 13.4895 8.37712C13.5896 8.47714 13.7252 8.53333 13.8667 8.53333H15.4667C15.6081 8.53333 15.7438 8.47714 15.8438 8.37712C15.9438 8.27711 16 8.14145 16 8C16 7.85855 15.9438 7.7229 15.8438 7.62288C15.7438 7.52286 15.6081 7.46667 15.4667 7.46667Z" fill="#0093D0" />
                                                                                                </svg>
                                                                                                <p className="dura_night-text">{fav.duration} дней</p>
                                                                                            </div>
                                                                                            <div className="dura_night">
                                                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path d="M8.28567 16C6.08817 16 3.98068 15.127 2.42682 13.5732C0.872952 12.0193 0 9.91183 0 7.71433C0 4.35721 1.92856 1.34722 4.91462 0.0475886C5.01985 0.00172278 5.13647 -0.0113816 5.24926 0.00998327C5.36206 0.0313481 5.4658 0.0861915 5.54698 0.167367C5.62815 0.248543 5.68299 0.352286 5.70436 0.46508C5.72572 0.577874 5.71262 0.694488 5.66675 0.799727C5.3239 1.58687 5.14283 2.59507 5.14283 3.71435C5.14283 7.6529 8.3471 10.8572 12.2856 10.8572C13.4049 10.8572 14.4131 10.6761 15.2003 10.3332C15.3055 10.2874 15.4221 10.2743 15.5349 10.2956C15.6477 10.317 15.7515 10.3718 15.8326 10.453C15.9138 10.5342 15.9687 10.6379 15.99 10.7507C16.0114 10.8635 15.9983 10.9801 15.9524 11.0854C14.6528 14.0714 11.6428 16 8.28567 16Z" fill="#0093D0" />
                                                                                                </svg>
                                                                                                <p className="dura_night-text">{fav.duration - 1} ночей</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="payment_item-price">{fav.price} ₽</p>
                                                                                    <div className="payment_item-btns">
                                                                                        <Link to={`catalog/tour/id/${fav.id}`}>
                                                                                            <button className='cart_item-btn'>Смотреть тур</button>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : <p>нет покупок((((</p>
                                    }
                                </div>


                            </div>
                            <div className="all_feedback">
                                <div className="cart_title">Все Обратные звонки</div>
                                <div className="all_feedback-wrapper">
                                    {
                                        AllFeeds ?
                                            AllFeeds.map(feed => {
                                                return (
                                                    <div className="feedback_item">
                                                        <div className="user_item-id">Айди: <span>{feed.id}</span></div>
                                                        <div className="user_item-name">Имя: <span>{feed.name}</span></div>
                                                        <div className="user_item-email">Почта: <span>{feed.email}</span></div>
                                                    </div>
                                                )
                                            })
                                            : <p>нет обратных звонков((((</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

