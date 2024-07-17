import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TopHeader } from './components/Header/topHeader/topHeader.jsx'
import { BottomHeader } from './components/Header/bottomHeader/BottomHeader.jsx'
import { MainPage } from './pages/mainPage/mainPage.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Catalog } from './pages/Catalog/Catalog.jsx'
import { SPP } from './pages/SPP/SPP.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Register } from './pages/Register/Register.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { Payment } from './pages/Payment/Payment.jsx'

export function App() {
  return (

    <>

      <div className="container">
          <header>
            <TopHeader/>
            <BottomHeader/>
          </header>

          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path={'/catalog/tour/id/:id'} element={<SPP/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/payment' element={<Payment/>}/>
          </Routes>

      </div>
          <Footer/>
    </>
  )
}
/**
 //! авторихация регистрайия +
 //* корзина    
 //? фильтр по цене добавить и сортировку по убыванию возрастанию популярности
 //TODO отдельнкю страницу с корзину и кнопку для оплаты
 //* мб добавить ю кассу ну или (чисто оповещение на почту пользователю +)
 //? также попробовать тг бота сделать для оповещения покупок

 */