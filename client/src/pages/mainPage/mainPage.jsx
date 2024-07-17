import './mainPage.css'
import { Carousel } from './Carousel/Carousel.jsx'
import { Advantages } from './Advanages/Advantages.jsx'
import  {Questions}  from './Questions/Questions.jsx'
import { Card } from '../Catalog/Card/Card.jsx'
import { useEffect, useState } from 'react'
import { Banner } from './Banner/Banner.jsx'
import { Feedback } from './Feedback/Feedback.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import { Register } from '../Register/Register.jsx'
import { Profile } from '../Profile/Profile.jsx'
import { Catalog } from '../Catalog/Catalog.jsx'
export function MainPage() {
        return (

        <>
            <div className="main">
                <Banner/>
                <Carousel />
                <Advantages/>
                <Questions />
                
                {/* <div className="catalog">
                    <div className="catalog_title">Новинки</div>
                    <div className="catalog_wrapper">
                        {
                           tours&& mintours.map(tour=>{
                               return <Card {...tour}/>
                            })
                        }
                    </div>
                </div> */}
                <Feedback/>
                <Reviews/>
            </div>
        </>
    )
}