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
    const [tours, setTours] = useState(null)
    let mintours = tours&& tours.slice(0,3);
    console.log(mintours)
    const [open, setOpen] = useState('tour_btn closed')
    useEffect(() => {
        async function getTours() {
            const response = await fetch('http://a0993874.xsph.ru/api/tours', { 'Content-type': 'application/json; charset=utf-8' })
            const data = await response.json();
            const result = data.data;
            setTours(result)
            console.log(result)
        }
        getTours();
    }, []);
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
                <Catalog/>

            </div>

        </>
    )
}