import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/joy/Stack';
import Key from '@mui/icons-material/Key';
import './Login.css'
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

export function Login() {
    const currentUser = useAuth();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [findUsers, setFindUsers] = useState(null);
    const minLength = 8;
    const auth = getAuth();
    function getRandomNumber() {
        return Math.floor(Math.random() * 10000) + 1;
    }

    useEffect(() => {
        if (currentUser.email) {
            navigate("/user/profile")
        }
    }, [])

    const theme = extendTheme({
        components: {
            JoySelect: {
                defaultProps: {
                    indicator: '↕',
                },
            },
        },
    });
    const showToastMessageError = (error) => {
        toast.error(error, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true
        });
    };
    const showToastMessageWarning = (error) => {
        toast.warning(error, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true
        });
    };
    const showToastMessageSuccess = (error) => {
        toast.success(error, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true
        });
    };
    function getUsers() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/')).then((snapshot) => {
            if (snapshot.exists()) {
                setFindUsers(snapshot.val());
                // console.log(findUsers)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    function checkForm() {
        let flag = 0;
        if (emailInput.length == 0) {
            showToastMessageError('Почта не может быть пустой');
            flag += 1;
        }
        if (!emailInput.includes('@')) {
            showToastMessageError('Введите корректную почту');
            flag += 1;
        }
        if (passwordInput.length < minLength) {
            showToastMessageError('Минимальная длина пароля  8 символов');
            flag += 1;
        }
        if (passwordInput.length == 0) {
            showToastMessageError('Пароль не может быть пустой');
            flag += 1;
        }
        if (flag === 0) {
            getUsers();
            let findedUser;
            Object.entries(findUsers).forEach(([key, user]) => {
                if (user.email == emailInput) {
                    findedUser = user;
                }
            });
            if (findedUser) {
                if (findedUser.password == passwordInput) {
                    dispatch(setUser({
                        id: findedUser.id,
                        email: findedUser.email,
                        fname: findedUser.fname,
                        lname: findedUser.lname,
                        password: findedUser.password,
                        phone: findedUser.phone,
                        role: findedUser.role
                    }));
                    showToastMessageSuccess('С возращением!');
                    setTimeout(() => navigate("/user/profile"), 2200);
                }
                else {
                    showToastMessageError('Неверный пароль');
                }
            }
            else {
                showToastMessageError('Пользователь с такой почтой не найден');
            }
        }
    }
    return (
        <>
            <div className="register">
                <div className="register_title" id='register'>Авторизация</div>
                <form className="register_form" onSubmit={(e) => { e.preventDefault() }}>
                    <div className="input_email">
                        <CssVarsProvider>
                            <FormLabel>Почта</FormLabel>
                            <Input startDecorator={<MailIcon />} placeholder="Почта" type='email' name='email' size='lg' value={emailInput} onChange={(event) => setEmail(event.target.value)} />
                        </CssVarsProvider>
                    </div>
                    <div className="input_password">
                        <CssVarsProvider>
                            <FormLabel>Пароль</FormLabel>
                            <Stack spacing={0.5} sx={{ '--hue': Math.min(passwordInput.length * 10, 120), }}>
                                <Input type="password" placeholder="Введите пароль" startDecorator={<Key />} value={passwordInput} onChange={(event) => setPassword(event.target.value)} name='password' size='lg'
                                />
                            </Stack>
                        </CssVarsProvider>
                    </div>
                    <button type="submit" className='registr_submit' onClick={checkForm}>Войти</button>
                    <div className="register_link">
                        Еще нет аккаунта? <Link to='/signup'><span>Зарегистрироваться</span></Link>
                    </div>
                    {/* <button onClick={checkForm}>Notify</button>         */}
                </form>
                <ToastContainer />
            </div>

        </>
    )
}