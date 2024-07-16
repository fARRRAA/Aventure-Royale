import './Feedback.css'
import { pipec } from '../../../pipec'
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { useState, useRef } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { ToastContainer, toast } from "react-toastify";
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import MailIcon from '@mui/icons-material/Mail';
import { getDatabase, ref, set, child, get } from "firebase/database";
import emailjs from '@emailjs/browser';


export function Feedback() {
    const [emailInput, setEmail] = useState('');
    const [fnameInput, setFname] = useState('');
    const formRef = useRef(null);
    const ID = getRandomNumber();
    const currentUser = useAuth();



    
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
    function getRandomNumber() {
        return Math.floor(Math.random() * 500) + 1;
    }
    const paramsUser = {
        from_name: 'Aventure Royale support',
        to_name: fnameInput,
        email_to: emailInput
    }
    const paramsAdmin = {
        from_name: fnameInput,
        to_name: fnameInput,
        email_from: emailInput
    }
    function emailReg() {
        setEmail('');
        setFname('');

        let emaill = document.body.querySelector('input[name="email"]').value;

        emaill = '';
        setEmail(emaill);
        let namee = document.body.querySelector('input[name="name"]').value;

        namee = '';
        setFname(namee);
        let flag = 0;
        if (emailInput.length == 0) {
            showToastMessageError('Почта не может быть пустой');
            flag += 1;
        }
        if (!emailInput.includes('@')) {
            showToastMessageError('Введите корректную почту');
            flag += 1;
        }
        if (fnameInput.length == 0) {
            showToastMessageError('Имя не может быть пустым');
            flag += 1;
        }
        if (flag === 0) {
            const db = getDatabase();
            set(ref(db, 'feedback/' + ID), {
                id: ID,
                email: emailInput,
                name: fnameInput
            }).then(() => {
                showToastMessageSuccess('Ваше заявка успешно отправлена');
            }).catch((error) => { showToastMessageError(error) });


            emailjs.send('service_qmwf8mj', 'template_1bioksb', paramsUser, 'L8ulIxWPTO6miygia').then(() => {

            }).catch((error) => { showToastMessageError(error) });
            emailjs.send('service_qmwf8mj', 'template_6d3g5sl', paramsAdmin, 'L8ulIxWPTO6miygia').then(() => {
            })

            fetch('http://localhost:3000/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fnameInput, emailInput
                })
                // .then((responce)=>responce.json())
                // .then((result)=>alert(result.responce.msg))
            });

        }
    }
    return (
        <>
            
            <div className="feedback">
                <div className="feedback_img">
                    <img src={pipec.img} alt="" />
                </div>
                <div className="feedback_info">
                    <div className="feedback_title">Остались <span>вопросы</span> ? Заполните <span>форму</span>  обратной
                        связи и мы <span>вам</span>  ответим
                    </div>
                    <form className="register_form" name='feedback' onSubmit={(e) => { e.preventDefault() }}>
                        <div className="input_email">
                            <CssVarsProvider>
                                <FormLabel>Ваше имя</FormLabel>
                                <Input placeholder="Ваше имя" name='name' type='text' size='lg' className='name' onChange={(e) => { setFname(e.target.value) }} />
                            </CssVarsProvider>
                        </div>
                        <div className="input_email">
                            <CssVarsProvider>
                                <FormLabel>Почта</FormLabel>
                                <Input startDecorator={<MailIcon />} placeholder="Почта" type='email' className='email' name='email' size='lg' onChange={(e) => { setEmail(e.target.value) }} />
                            </CssVarsProvider>
                        </div>
                        <button type="submit" className='registr_submit' onClick={(e) => { emailReg() }}>Отправить</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}