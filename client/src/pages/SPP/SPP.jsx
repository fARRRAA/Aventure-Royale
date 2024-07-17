import { useParams } from 'react-router-dom'
import './SPP.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Rating } from './Rating/Rating';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ReviewRating } from './Review/ReviewRating/Reviewrating';
import { tours } from '../Catalog/data.js';
import { useFavorites } from '../../hooks/useFavorites';
import { useActions } from '../../hooks/useFavsAction';
export function SPP() {
    const [photo, setPhoto] = useState(0)
    const { id } = useParams();
    const [bodyLength, setBodyLength] = useState(800)
    const tour = tours && tours[id - 1];

    
    const { toggleFavorites } = useActions();
    const { favorites } = useFavorites();


    const getBgColor = (id) => {
        const rating = tour.reviews[id].rating;
        if (rating == 5 | rating == 4) {
            return 'rgba(59, 179, 59, .1)'
        }
        else if (rating == 3) {
            return 'rgba(0, 0, 0, .05)'
        }
        else {
            return 'rgba(255, 0, 0, .08)'
        }
    }
    return (
        <>
            <Link to='/catalog'><p className="to_catalog"> ← Вернуться в каталог</p></Link>
            <div className="tour_page">
                <div className="tour">
                    {
                        tour ?
                            <div className="">
                                <div className="tour_imgs">
                                    <div className="tour_thumbnails">
                                        {
                                            tour.images.map((img, index) =>
                                                <button onClick={() => { setPhoto(index) }}>
                                                    <img key={index} src={img} className='tour_thumb' />
                                                </button>
                                            )
                                        }
                                    </div>
                                    <img src={tour.images[photo]} alt="" className='main_img' />
                                </div>
                                <div className="tour_about">
                                    <div className="tour_about-line">
                                        <p className="tour_page-name">{tour.name}</p>
                                        <p className="tour_page-price"><span>Цена:</span> {tour.price} ₽</p>
                                    </div>
                                    <div className="tour_about-line">
                                        <div className="tour_page-rating">
                                            <div className="tour_page-rate">
                                                <Rating rating={tour.rating} />
                                                <p className="tour_page-rating">{tour.rating}</p>
                                            </div>
                                            <div className="tour_page-testcount">

                                                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.6 13.2H9.35L11.55 11H17.6M4.4 13.2V10.45L11.968 2.904C12.177 2.695 12.529 2.695 12.749 2.904L14.685 4.851C14.905 5.071 14.905 5.412 14.685 5.632L7.117 13.2M19.8 0H2.2C1.61652 0 1.05695 0.231785 0.644365 0.644365C0.231785 1.05695 0 1.61652 0 2.2V22L4.4 17.6H19.8C20.3835 17.6 20.9431 17.3682 21.3556 16.9556C21.7682 16.5431 22 15.9835 22 15.4V2.2C22 0.979 21.01 0 19.8 0Z" fill="black" />
                                                </svg>

                                                <p>{tour.reviewsCount.total} отзывов</p>
                                            </div>
                                        </div>
                                        <div className="tour_page-btn cart">
                                            <p>Добавить в корзину</p>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 18C17.5304 18 18.0391 18.2107 18.4142 18.5858C18.7893 18.9609 19 19.4696 19 20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18ZM1 2H4.27L5.21 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75C7.17 14.8163 7.19634 14.8799 7.24322 14.9268C7.29011 14.9737 7.3537 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2ZM7 18C7.53043 18 8.03914 18.2107 8.41421 18.5858C8.78929 18.9609 9 19.4696 9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22C5.89 22 5 21.1 5 20C5 18.89 5.89 18 7 18ZM16 11L18.78 6H6.14L8.5 11H16Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>

                                    <Tabs>
                                        <TabList>
                                            <Tab>Описание тура</Tab>
                                            <Tab>Что входит в тур</Tab>
                                            <Tab>Отзывы</Tab>
                                        </TabList>

                                        <TabPanels>
                                            <TabPanel>
                                                <p className="tour_page-capt">
                                                    {tour.body.substr(0, bodyLength)}

                                                    <button onClick={() => { bodyLength === 800 ? setBodyLength(tour.body.length) : setBodyLength(800) }}>
                                                        {bodyLength == 800 ? 'Открыть все...' : 'Скрыть'}
                                                    </button>
                                                </p>
                                                <div className="tour_page-info">
                                                    <div className="tour_cities" style={{ marginTop: 5 }}>
                                                        <div className='cities_title'>
                                                            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.36443 2.61378C2.84059 2.08514 3.40695 1.66549 4.03089 1.379C4.65484 1.0925 5.32405 0.944822 6 0.944456C7.36286 0.944456 8.67086 1.54419 9.63557 2.61378C10.6016 3.6864 11.1434 5.13644 11.1429 6.64756C11.1429 9.25709 9.82971 11.6192 8.46171 13.3631C7.88524 14.0945 7.26024 14.7776 6.59186 15.4069C6.39858 15.5895 6.20124 15.7668 6 15.9386C5.79887 15.7667 5.60153 15.5894 5.40814 15.4069C4.73976 14.7776 4.11476 14.0945 3.53829 13.3631C2.17029 11.6192 0.857143 9.25709 0.857143 6.64756C0.857143 5.13406 1.39971 3.68338 2.36443 2.61378ZM5.75314 16.9138L6 16.528L6.24686 16.9138C6.17461 16.9699 6.08838 17 6 17C5.91162 17 5.82539 16.9699 5.75314 16.9138ZM5.75314 16.9138L6 16.528L6.24686 16.9138L6.24857 16.9129L6.25286 16.9095L6.26571 16.8987L6.31629 16.8585C6.35971 16.8236 6.42114 16.7726 6.50057 16.7055C6.65829 16.5724 6.882 16.3764 7.149 16.1247C7.84989 15.4646 8.50527 14.748 9.10971 13.9808C10.5274 12.174 12 9.59568 12 6.64708C12 4.88567 11.3683 3.1951 10.2437 1.94841C9.6879 1.33135 9.0268 0.841528 8.29849 0.507136C7.57017 0.172744 6.78902 0.000391287 6 0C5.21101 0.000329432 4.42988 0.172608 3.70156 0.506918C2.97325 0.841228 2.31214 1.33097 1.75629 1.94794C0.630729 3.19756 -0.000615818 4.88697 4.5074e-07 6.64756C4.5074e-07 9.59568 1.47257 12.174 2.89029 13.9808C3.49473 14.748 4.15011 15.4646 4.851 16.1247C5.11843 16.3764 5.34171 16.5724 5.49943 16.7055C5.5768 16.7712 5.65495 16.8358 5.73386 16.8992L5.74757 16.9095L5.75143 16.9129L5.75314 16.9138ZM4.28571 6.61119C4.28571 6.11022 4.46633 5.62977 4.78782 5.27553C5.10931 4.92129 5.54534 4.72228 6 4.72228C6.45466 4.72228 6.89069 4.92129 7.21218 5.27553C7.53367 5.62977 7.71429 6.11022 7.71429 6.61119C7.71429 7.11216 7.53367 7.59262 7.21218 7.94686C6.89069 8.3011 6.45466 8.50011 6 8.50011C5.54534 8.50011 5.10931 8.3011 4.78782 7.94686C4.46633 7.59262 4.28571 7.11216 4.28571 6.61119ZM6 3.77783C5.31801 3.77783 4.66396 4.07634 4.18173 4.6077C3.69949 5.13906 3.42857 5.85974 3.42857 6.61119C3.42857 7.36265 3.69949 8.08333 4.18173 8.61469C4.66396 9.14605 5.31801 9.44456 6 9.44456C6.68199 9.44456 7.33604 9.14605 7.81828 8.61469C8.30051 8.08333 8.57143 7.36265 8.57143 6.61119C8.57143 5.85974 8.30051 5.13906 7.81828 4.6077C7.33604 4.07634 6.68199 3.77783 6 3.77783Z" fill="rgba(0, 0, 0, 0.65)" />
                                                            </svg>
                                                            Города:
                                                        </div>
                                                        <div className="page_tour-cities" style={{ marginTop: 5 }}>
                                                            {tour.cities.map(city => {
                                                                return (
                                                                    <p class='tour_city'>{city}</p>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <p className="tour_type" style={{ fontSize: 16, marginTop: 5 }}>
                                                        Тип тура:
                                                        {tour.types.map(type => {
                                                            return (<p className='tour_type-name' style={{ marginTop: 5, fontSize: 16, color: 'rgba(0, 0, 0, 0.65)' }}>{type}</p>)
                                                        }
                                                        )}
                                                    </p>
                                                    <div className="div">
                                                        <div className="exclude_title" style={{ marginTop: 5, fontSize: 16, fontWeight: 400, color: '#0093D0' }}>Длительность тура:</div>

                                                        <div className="tour_dura" style={{ marginTop: 5 }}>
                                                            <div className="dura_night">
                                                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.46667 2.13333V0.533333C7.46667 0.391885 7.52286 0.256229 7.62288 0.15621C7.7229 0.0561903 7.85855 0 8 0C8.14145 0 8.27711 0.0561903 8.37712 0.15621C8.47714 0.256229 8.53333 0.391885 8.53333 0.533333V2.13333C8.53333 2.27478 8.47714 2.41044 8.37712 2.51046C8.27711 2.61048 8.14145 2.66667 8 2.66667C7.85855 2.66667 7.7229 2.61048 7.62288 2.51046C7.52286 2.41044 7.46667 2.27478 7.46667 2.13333ZM8 3.73333C7.15613 3.73333 6.33122 3.98357 5.62957 4.4524C4.92792 4.92122 4.38105 5.58759 4.05811 6.36722C3.73518 7.14685 3.65069 8.00473 3.81532 8.83239C3.97995 9.66004 4.38631 10.4203 4.98301 11.017C5.57972 11.6137 6.33996 12.0201 7.16762 12.1847C7.99527 12.3493 8.85315 12.2648 9.63278 11.9419C10.4124 11.619 11.0788 11.0721 11.5476 10.3704C12.0164 9.66878 12.2667 8.84387 12.2667 8C12.2654 6.86879 11.8155 5.78426 11.0156 4.98438C10.2157 4.18449 9.13121 3.73457 8 3.73333ZM3.356 4.11067C3.45608 4.21074 3.59181 4.26696 3.73333 4.26696C3.87486 4.26696 4.01059 4.21074 4.11067 4.11067C4.21074 4.01059 4.26696 3.87486 4.26696 3.73333C4.26696 3.59181 4.21074 3.45608 4.11067 3.356L3.044 2.28933C2.94393 2.18926 2.80819 2.13304 2.66667 2.13304C2.52514 2.13304 2.38941 2.18926 2.28933 2.28933C2.18926 2.38941 2.13304 2.52514 2.13304 2.66667C2.13304 2.80819 2.18926 2.94393 2.28933 3.044L3.356 4.11067ZM3.356 11.8893L2.28933 12.956C2.18926 13.0561 2.13304 13.1918 2.13304 13.3333C2.13304 13.4749 2.18926 13.6106 2.28933 13.7107C2.38941 13.8107 2.52514 13.867 2.66667 13.867C2.80819 13.867 2.94393 13.8107 3.044 13.7107L4.11067 12.644C4.16022 12.5944 4.19953 12.5356 4.22634 12.4709C4.25316 12.4061 4.26696 12.3367 4.26696 12.2667C4.26696 12.1966 4.25316 12.1272 4.22634 12.0625C4.19953 11.9977 4.16022 11.9389 4.11067 11.8893C4.06112 11.8398 4.00229 11.8005 3.93754 11.7737C3.8728 11.7468 3.80341 11.733 3.73333 11.733C3.66326 11.733 3.59387 11.7468 3.52912 11.7737C3.46438 11.8005 3.40555 11.8398 3.356 11.8893ZM12.2667 4.26667C12.3367 4.26672 12.4061 4.25297 12.4709 4.22621C12.5356 4.19944 12.5944 4.16018 12.644 4.11067L13.7107 3.044C13.8107 2.94393 13.867 2.80819 13.867 2.66667C13.867 2.52514 13.8107 2.38941 13.7107 2.28933C13.6106 2.18926 13.4749 2.13304 13.3333 2.13304C13.1918 2.13304 13.0561 2.18926 12.956 2.28933L11.8893 3.356C11.8147 3.43059 11.7638 3.52566 11.7432 3.62917C11.7226 3.73268 11.7331 3.83998 11.7735 3.93749C11.8139 4.03499 11.8824 4.11832 11.9701 4.17692C12.0579 4.23552 12.1611 4.26675 12.2667 4.26667ZM12.644 11.8893C12.5439 11.7893 12.4082 11.733 12.2667 11.733C12.1251 11.733 11.9894 11.7893 11.8893 11.8893C11.7893 11.9894 11.733 12.1251 11.733 12.2667C11.733 12.4082 11.7893 12.5439 11.8893 12.644L12.956 13.7107C13.0056 13.7602 13.0644 13.7995 13.1291 13.8263C13.1939 13.8532 13.2633 13.867 13.3333 13.867C13.4034 13.867 13.4728 13.8532 13.5375 13.8263C13.6023 13.7995 13.6611 13.7602 13.7107 13.7107C13.7602 13.6611 13.7995 13.6023 13.8263 13.5375C13.8532 13.4728 13.867 13.4034 13.867 13.3333C13.867 13.2633 13.8532 13.1939 13.8263 13.1291C13.7995 13.0644 13.7602 13.0056 13.7107 12.956L12.644 11.8893ZM2.66667 8C2.66667 7.85855 2.61048 7.7229 2.51046 7.62288C2.41044 7.52286 2.27478 7.46667 2.13333 7.46667H0.533333C0.391885 7.46667 0.256229 7.52286 0.15621 7.62288C0.0561903 7.7229 0 7.85855 0 8C0 8.14145 0.0561903 8.27711 0.15621 8.37712C0.256229 8.47714 0.391885 8.53333 0.533333 8.53333H2.13333C2.27478 8.53333 2.41044 8.47714 2.51046 8.37712C2.61048 8.27711 2.66667 8.14145 2.66667 8ZM8 13.3333C7.85855 13.3333 7.7229 13.3895 7.62288 13.4895C7.52286 13.5896 7.46667 13.7252 7.46667 13.8667V15.4667C7.46667 15.6081 7.52286 15.7438 7.62288 15.8438C7.7229 15.9438 7.85855 16 8 16C8.14145 16 8.27711 15.9438 8.37712 15.8438C8.47714 15.7438 8.53333 15.6081 8.53333 15.4667V13.8667C8.53333 13.7252 8.47714 13.5896 8.37712 13.4895C8.27711 13.3895 8.14145 13.3333 8 13.3333ZM15.4667 7.46667H13.8667C13.7252 7.46667 13.5896 7.52286 13.4895 7.62288C13.3895 7.7229 13.3333 7.85855 13.3333 8C13.3333 8.14145 13.3895 8.27711 13.4895 8.37712C13.5896 8.47714 13.7252 8.53333 13.8667 8.53333H15.4667C15.6081 8.53333 15.7438 8.47714 15.8438 8.37712C15.9438 8.27711 16 8.14145 16 8C16 7.85855 15.9438 7.7229 15.8438 7.62288C15.7438 7.52286 15.6081 7.46667 15.4667 7.46667Z" fill="#0093D0" />
                                                                </svg>
                                                                <p className="" style={{ fontSize: 16 }}>{tour.duration} дней</p>
                                                            </div>
                                                            <div className="dura_night">

                                                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.28567 16C6.08817 16 3.98068 15.127 2.42682 13.5732C0.872952 12.0193 0 9.91183 0 7.71433C0 4.35721 1.92856 1.34722 4.91462 0.0475886C5.01985 0.00172278 5.13647 -0.0113816 5.24926 0.00998327C5.36206 0.0313481 5.4658 0.0861915 5.54698 0.167367C5.62815 0.248543 5.68299 0.352286 5.70436 0.46508C5.72572 0.577874 5.71262 0.694488 5.66675 0.799727C5.3239 1.58687 5.14283 2.59507 5.14283 3.71435C5.14283 7.6529 8.3471 10.8572 12.2856 10.8572C13.4049 10.8572 14.4131 10.6761 15.2003 10.3332C15.3055 10.2874 15.4221 10.2743 15.5349 10.2956C15.6477 10.317 15.7515 10.3718 15.8326 10.453C15.9138 10.5342 15.9687 10.6379 15.99 10.7507C16.0114 10.8635 15.9983 10.9801 15.9524 11.0854C14.6528 14.0714 11.6428 16 8.28567 16Z" fill="#0093D0" />
                                                                </svg>

                                                                <p className="" style={{ fontSize: 16 }}>{tour.duration - 1} ночей</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="div">
                                                        <div className="exclude_title" style={{ marginTop: 5, fontSize: 16, fontWeight: 400, color: '#0093D0' }}>Дата тура:</div>
                                                        <p className="tour_date-start" style={{ marginTop: 5 }}>{tour.date}</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="tour_incl_excl">
                                                    <div className="tour_page-include">
                                                        <p className="include_title" >Включено в стоимость</p>
                                                        <div className="include_wrapper">
                                                            {
                                                                tour.includeds.map(incl => {

                                                                    return (
                                                                        <div className="include">
                                                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect x="5" y="5.5" width="10" height="10" fill="white" />
                                                                                <path d="M10 0.75C4.62391 0.75 0.25 5.12391 0.25 10.5C0.25 15.8761 4.62391 20.25 10 20.25C15.3761 20.25 19.75 15.8761 19.75 10.5C19.75 5.12391 15.3761 0.75 10 0.75ZM14.8345 8.22168L9.96795 13.2323C9.89885 13.3147 9.81285 13.3812 9.71581 13.4273C9.61876 13.4735 9.51292 13.4983 9.40545 13.5H9.3928C9.28767 13.5 9.18373 13.4778 9.08772 13.435C8.9917 13.3922 8.90575 13.3297 8.83545 13.2516L5.70367 10.263C5.6351 10.1902 5.58176 10.1045 5.54678 10.0109C5.51181 9.91725 5.4959 9.81757 5.5 9.7177C5.5041 9.61782 5.52812 9.51978 5.57065 9.42932C5.61319 9.33887 5.67337 9.25782 5.74767 9.19096C5.82197 9.1241 5.90889 9.07276 6.00331 9.03997C6.09774 9.00717 6.19776 8.99358 6.29751 9C6.39726 9.00642 6.49472 9.03271 6.58417 9.07733C6.67361 9.12195 6.75324 9.184 6.81836 9.25983L9.37311 11.6072L13.6861 7.25699C13.815 7.10797 13.9973 7.01565 14.1937 7C14.3901 6.98435 14.5848 7.04662 14.7357 7.17335C14.8866 7.30008 14.9815 7.4811 15 7.67726C15.0185 7.87343 14.959 8.06899 14.8345 8.22168Z" fill="#36BA5F" />
                                                                            </svg>

                                                                            <p className='include_elem-text'>{incl}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tour_page-exclude">
                                                        <p className="exclude_title" >Оплачивается отдельно</p>
                                                        <div className="exclude_wrapper">
                                                            {
                                                                tour.excludeds.map(excl => {
                                                                    return (
                                                                        <div className="exclude">
                                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM13.5302 12.4698C13.6027 12.5388 13.6608 12.6216 13.7008 12.7133C13.7409 12.805 13.7622 12.9039 13.7635 13.004C13.7648 13.1041 13.746 13.2034 13.7083 13.2961C13.6706 13.3889 13.6147 13.4731 13.5439 13.5439C13.4731 13.6147 13.3889 13.6706 13.2961 13.7083C13.2034 13.746 13.1041 13.7648 13.004 13.7635C12.9039 13.7622 12.805 13.7409 12.7133 13.7008C12.6216 13.6608 12.5388 13.6027 12.4698 13.5302L10 11.0608L7.53016 13.5302C7.38836 13.6649 7.19955 13.7389 7.00398 13.7364C6.8084 13.7339 6.62155 13.6551 6.48325 13.5168C6.34495 13.3785 6.26614 13.1916 6.26364 12.996C6.26114 12.8005 6.33513 12.6116 6.46984 12.4698L8.93922 10L6.46984 7.53016C6.33513 7.38836 6.26114 7.19955 6.26364 7.00398C6.26614 6.8084 6.34495 6.62155 6.48325 6.48325C6.62155 6.34495 6.8084 6.26614 7.00398 6.26364C7.19955 6.26114 7.38836 6.33513 7.53016 6.46984L10 8.93922L12.4698 6.46984C12.6116 6.33513 12.8005 6.26114 12.996 6.26364C13.1916 6.26614 13.3785 6.34495 13.5168 6.48325C13.6551 6.62155 13.7339 6.8084 13.7364 7.00398C13.7389 7.19955 13.6649 7.38836 13.5302 7.53016L11.0608 10L13.5302 12.4698Z" fill="#A5ACB7" />
                                                                            </svg>
                                                                            <p className='exclude_elem-text'>{excl}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="tour_page-reviews">
                                                    <div className="reviews_rating">
                                                        <div className="rating_elem">
                                                            <div className="rating_elem-count">{tour.reviewsCount.total}</div>
                                                            <p className="rating_elem-text">Всего</p>
                                                        </div>
                                                        <div className="rating_elem">
                                                            <div className="rating_elem-count positive">
                                                                {tour.reviewsCount.fiveStars + tour.reviewsCount.fourStars}
                                                                <span>{(((tour.reviewsCount.fiveStars + tour.reviewsCount.fourStars) / tour.reviewsCount.total) * 100).toFixed(0)}%</span>
                                                            </div>
                                                            <p className="rating_elem-text">Положительные</p>
                                                        </div>
                                                        <div className="rating_elem">
                                                            <div className="rating_elem-count negative">
                                                                {tour.reviewsCount.twoStars + tour.reviewsCount.oneStar}
                                                                <span>{(((tour.reviewsCount.twoStars + tour.reviewsCount.oneStar) / tour.reviewsCount.total) * 100).toFixed(0)}%</span>
                                                            </div>
                                                            <p className="rating_elem-text">Негативные</p>
                                                        </div>
                                                        <div className="rating_elem">
                                                            <div className="rating_elem-count neutral">
                                                                {tour.reviewsCount.threeStars}
                                                                <span>{((tour.reviewsCount.threeStars / tour.reviewsCount.total) * 100).toFixed(0)}%</span>
                                                            </div>
                                                            <p className="rating_elem-text">Нейтральные</p>
                                                        </div>
                                                    </div>
                                                    <div className="reviews_wrapper">
                                                        {/* <p className="reviews_wrapper-title">Отзывы наших клиентов</p> */}
                                                        {
                                                            tour.reviews.map((review, i) => {
                                                                return (
                                                                    <div className="review_item" style={{ backgroundColor: getBgColor(i) }}>
                                                                        <div className="review_author_rating">
                                                                            <p className="review_author">{review.reviewer.surname + ' ' + review.reviewer.name}</p>
                                                                            <div className="review_rating">
                                                                                <ReviewRating rating={review.rating} />
                                                                                <p>{review.rating}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review_body">
                                                                            {review.body.substr(0, 400)}
                                                                        </div>
                                                                        <div className="review_date">{review.date}</div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                {/* <p> {getReviewDate(1)}</p> */}
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </div>
                            </div>

                            : <p>загрузка данных...</p>
                    }

                </div>
            </div>
        </>
    )
}