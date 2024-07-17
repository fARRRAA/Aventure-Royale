import { Link } from 'react-router-dom'
import './Register.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';
import { setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, child, get } from "firebase/database";
export function Register() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const currentUser = useAuth();
    const minLength = 8;
    const [findUsers, setFindUsers] = useState([]);
    const [emailInput, setEmail] = useState('');
    const [phoneInput, setPhone] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [fnameInput, setFname] = useState('');
    const [lnameInput, setLname] = useState('');
    const [userId, setUserId] = useState(1);
    function getRandomNumber() {
        return Math.floor(Math.random() * 500) + 1;
    }
    const ID = getRandomNumber();
    
    useEffect(() => {
        if (currentUser.email) {
            navigate("/user/profile")
        } 
    }, [])
    function regUser() {
        setUserId(userId => userId + 1);
        const db = getDatabase();
        set(ref(db, 'users/' + ID), {
            id: ID,
            email: emailInput,
            fname: fnameInput,
            lname: lnameInput,
            password: passwordInput,
            phone: phoneInput,
            role: 'admin'
        }).then(() => {
            showToastMessageSuccess('Вы успешно зарегистрированы');
            setTimeout(()=>navigate("/user/profile"),3000);
        })
            .catch((error) => {
                showToastMessageError(error)
            });
        dispatch(setUser({
            id: ID,
            email: emailInput,
            fname: fnameInput,
            lname: lnameInput,
            password: passwordInput,
            phone: phoneInput,
            role: 'user'
        }));
    }
    
    function checkForm() {
        let flag = 0;
        const letterRegex = /[a-zA-Z]/;
        // if(fnameInput.length > 0 & lnameInput.length > 0 && emailInput.length> 0 & emailInput.includes('@') & phoneInput.length > 0 & passwordInput.length>minLength &
        // passwordInput.length > 0){
        //     setFlag(0)
        //     console.log(flag)
        // }
        if (fnameInput.length == 0) {
            showToastMessageError('Имя не может быть пустым');
            flag += 1;
        }
        if (lnameInput.length == 0) {
            showToastMessageError('Фамилия не может быть пустой');
            flag += 1;
        }
        if (emailInput.length == 0) {
            showToastMessageError('Почта не может быть пустой');
            flag += 1;
        }
        if (!emailInput.includes('@')) {
            showToastMessageError('Введите корректную почту');
            flag += 1;
        }
        if (letterRegex.test(phoneInput)) {
            showToastMessageError('Введите корректный телефон');
            flag += 1;
        }
        if (phoneInput.length == 0) {
            showToastMessageError('Номер не может быть пустой');
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
            regUser();
        }
    }
    function getUser() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setFindUsers(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
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
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            // pauseOnHover: true,
            draggable: true
        });
    };
    return (
        <>
                <div className="register">
                    <div className="register_title" id='register'>Регистрация</div>
                    <form className="register_form" onSubmit={(e) => { e.preventDefault() }}>
                        <div className="input_name">
                            <CssVarsProvider>
                                <FormLabel>Имя</FormLabel>
                                <Input placeholder="Имя" name='fname' size='lg' type='text' onChange={(e) => { setFname(e.target.value) }} />
                            </CssVarsProvider>

                        </div>
                        <div className="input_lname">
                            <CssVarsProvider>
                                <FormLabel>Фамилия</FormLabel>
                                <Input placeholder="Фамилия" name='lname' type='text' size='lg' onChange={(e) => { setLname(e.target.value) }} />
                            </CssVarsProvider>

                        </div>
                        <div className="input_email">
                            <CssVarsProvider>
                                <FormLabel>Почта</FormLabel>
                                <Input startDecorator={<MailIcon />} placeholder="Почта" type='email' name='email' size='lg' onChange={(e) => { setEmail(e.target.value) }} />
                            </CssVarsProvider>
                        </div>
                        <div className="input_phone">
                            <CssVarsProvider>
                                <FormLabel>Телефон</FormLabel>
                                <Input startDecorator={<LocalPhoneIcon />} placeholder="+7(999) 99-99-99" type='number' min='11' max='11' name='phone' size='lg' onChange={(e) => { setPhone(e.target.value) }} />
                            </CssVarsProvider>
                        </div>
                        <div className="input_password">
                            <CssVarsProvider>
                                <FormLabel>Пароль</FormLabel>
                                <Stack spacing={0.5} sx={{ '--hue': Math.min(passwordInput.length * 10, 120), }}>
                                    <Input type="password" placeholder="Введите пароль" startDecorator={<Key />} value={passwordInput} name='password' size='lg' onChange={(e) => { setPassword(e.target.value) }} />
                                    <LinearProgress determinate size="sm" value={Math.min((passwordInput.length * 100) / minLength, 100)} sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)', }} />
                                    <Typography
                                        level="body-xs"
                                        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
                                    >
                                        {passwordInput.length < 5 && 'очень слабый'}
                                        {passwordInput.length >= 5 && passwordInput.length < 8 && 'слабый'}
                                        {passwordInput.length >= 8 && passwordInput.length < 15 && 'Сильный'}
                                        {passwordInput.length >= 15 && 'Очень сильный'}
                                    </Typography>
                                </Stack>
                            </CssVarsProvider>
                        </div>
                        <button type="submit" className='registr_submit' onClick={checkForm}>Зарегистрироваться</button>
                        <div className="register_link">
                            Уже есть аккаунт? <Link to='/signin'><span>Войти</span></Link>
                        </div>
                        {/* <button onClick={checkForm}>Notify</button>         */}
                    </form>
                    <div className="">

                    </div>
                </div>
        
            <ToastContainer />
        </>
    )
}
{/* <input type="text" placeholder="Имя" required/>
<input type="text" placeholder="Фамилия" required/>
<input type="email" placeholder="Электронная почта" required/>
<input type="password" placeholder="Пароль" required/>
<input type="password" placeholder="Повторите пароль" required/>
<button type="submit">Зарегистрироваться</button>
<div className="register_link">
    Уже есть аккаунт? <Link to='/login'>Войти</Link>
</div> */}