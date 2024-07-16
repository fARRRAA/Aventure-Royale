import './Card.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export function Card(tour) {
    const [open, setOpen] = useState('tour_btn closed')

    return (
        <div className="tour_item">
            <div className="tour_left">
                <img className='tour_img' src={tour.images[0]} alt="" />

            </div>
            <div className="tour_center">
                <p className='tour_name'>{tour.name}</p>
                <p className='tour_description'>{tour.body.substr(0, 200)}...</p>
                <div className="tour_cities">
                    <div className='cities_title'>
                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.36443 2.61378C2.84059 2.08514 3.40695 1.66549 4.03089 1.379C4.65484 1.0925 5.32405 0.944822 6 0.944456C7.36286 0.944456 8.67086 1.54419 9.63557 2.61378C10.6016 3.6864 11.1434 5.13644 11.1429 6.64756C11.1429 9.25709 9.82971 11.6192 8.46171 13.3631C7.88524 14.0945 7.26024 14.7776 6.59186 15.4069C6.39858 15.5895 6.20124 15.7668 6 15.9386C5.79887 15.7667 5.60153 15.5894 5.40814 15.4069C4.73976 14.7776 4.11476 14.0945 3.53829 13.3631C2.17029 11.6192 0.857143 9.25709 0.857143 6.64756C0.857143 5.13406 1.39971 3.68338 2.36443 2.61378ZM5.75314 16.9138L6 16.528L6.24686 16.9138C6.17461 16.9699 6.08838 17 6 17C5.91162 17 5.82539 16.9699 5.75314 16.9138ZM5.75314 16.9138L6 16.528L6.24686 16.9138L6.24857 16.9129L6.25286 16.9095L6.26571 16.8987L6.31629 16.8585C6.35971 16.8236 6.42114 16.7726 6.50057 16.7055C6.65829 16.5724 6.882 16.3764 7.149 16.1247C7.84989 15.4646 8.50527 14.748 9.10971 13.9808C10.5274 12.174 12 9.59568 12 6.64708C12 4.88567 11.3683 3.1951 10.2437 1.94841C9.6879 1.33135 9.0268 0.841528 8.29849 0.507136C7.57017 0.172744 6.78902 0.000391287 6 0C5.21101 0.000329432 4.42988 0.172608 3.70156 0.506918C2.97325 0.841228 2.31214 1.33097 1.75629 1.94794C0.630729 3.19756 -0.000615818 4.88697 4.5074e-07 6.64756C4.5074e-07 9.59568 1.47257 12.174 2.89029 13.9808C3.49473 14.748 4.15011 15.4646 4.851 16.1247C5.11843 16.3764 5.34171 16.5724 5.49943 16.7055C5.5768 16.7712 5.65495 16.8358 5.73386 16.8992L5.74757 16.9095L5.75143 16.9129L5.75314 16.9138ZM4.28571 6.61119C4.28571 6.11022 4.46633 5.62977 4.78782 5.27553C5.10931 4.92129 5.54534 4.72228 6 4.72228C6.45466 4.72228 6.89069 4.92129 7.21218 5.27553C7.53367 5.62977 7.71429 6.11022 7.71429 6.61119C7.71429 7.11216 7.53367 7.59262 7.21218 7.94686C6.89069 8.3011 6.45466 8.50011 6 8.50011C5.54534 8.50011 5.10931 8.3011 4.78782 7.94686C4.46633 7.59262 4.28571 7.11216 4.28571 6.61119ZM6 3.77783C5.31801 3.77783 4.66396 4.07634 4.18173 4.6077C3.69949 5.13906 3.42857 5.85974 3.42857 6.61119C3.42857 7.36265 3.69949 8.08333 4.18173 8.61469C4.66396 9.14605 5.31801 9.44456 6 9.44456C6.68199 9.44456 7.33604 9.14605 7.81828 8.61469C8.30051 8.08333 8.57143 7.36265 8.57143 6.61119C8.57143 5.85974 8.30051 5.13906 7.81828 4.6077C7.33604 4.07634 6.68199 3.77783 6 3.77783Z" fill="rgba(0, 0, 0, 0.65)" />
                        </svg>
                        Города:</div>
                    {tour.cities.map(city => {
                        return (
                            <p class='tour_city'>{city}</p>
                        )
                    })}
                </div>
            </div>
            <div className="tour_right">
                <div className="tour_right-info">
                    <p className="tour_price">
                        {tour.price} ₽
                    </p>
                    <div className="tour_dura">
                        <div className="dura_night">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.46667 2.13333V0.533333C7.46667 0.391885 7.52286 0.256229 7.62288 0.15621C7.7229 0.0561903 7.85855 0 8 0C8.14145 0 8.27711 0.0561903 8.37712 0.15621C8.47714 0.256229 8.53333 0.391885 8.53333 0.533333V2.13333C8.53333 2.27478 8.47714 2.41044 8.37712 2.51046C8.27711 2.61048 8.14145 2.66667 8 2.66667C7.85855 2.66667 7.7229 2.61048 7.62288 2.51046C7.52286 2.41044 7.46667 2.27478 7.46667 2.13333ZM8 3.73333C7.15613 3.73333 6.33122 3.98357 5.62957 4.4524C4.92792 4.92122 4.38105 5.58759 4.05811 6.36722C3.73518 7.14685 3.65069 8.00473 3.81532 8.83239C3.97995 9.66004 4.38631 10.4203 4.98301 11.017C5.57972 11.6137 6.33996 12.0201 7.16762 12.1847C7.99527 12.3493 8.85315 12.2648 9.63278 11.9419C10.4124 11.619 11.0788 11.0721 11.5476 10.3704C12.0164 9.66878 12.2667 8.84387 12.2667 8C12.2654 6.86879 11.8155 5.78426 11.0156 4.98438C10.2157 4.18449 9.13121 3.73457 8 3.73333ZM3.356 4.11067C3.45608 4.21074 3.59181 4.26696 3.73333 4.26696C3.87486 4.26696 4.01059 4.21074 4.11067 4.11067C4.21074 4.01059 4.26696 3.87486 4.26696 3.73333C4.26696 3.59181 4.21074 3.45608 4.11067 3.356L3.044 2.28933C2.94393 2.18926 2.80819 2.13304 2.66667 2.13304C2.52514 2.13304 2.38941 2.18926 2.28933 2.28933C2.18926 2.38941 2.13304 2.52514 2.13304 2.66667C2.13304 2.80819 2.18926 2.94393 2.28933 3.044L3.356 4.11067ZM3.356 11.8893L2.28933 12.956C2.18926 13.0561 2.13304 13.1918 2.13304 13.3333C2.13304 13.4749 2.18926 13.6106 2.28933 13.7107C2.38941 13.8107 2.52514 13.867 2.66667 13.867C2.80819 13.867 2.94393 13.8107 3.044 13.7107L4.11067 12.644C4.16022 12.5944 4.19953 12.5356 4.22634 12.4709C4.25316 12.4061 4.26696 12.3367 4.26696 12.2667C4.26696 12.1966 4.25316 12.1272 4.22634 12.0625C4.19953 11.9977 4.16022 11.9389 4.11067 11.8893C4.06112 11.8398 4.00229 11.8005 3.93754 11.7737C3.8728 11.7468 3.80341 11.733 3.73333 11.733C3.66326 11.733 3.59387 11.7468 3.52912 11.7737C3.46438 11.8005 3.40555 11.8398 3.356 11.8893ZM12.2667 4.26667C12.3367 4.26672 12.4061 4.25297 12.4709 4.22621C12.5356 4.19944 12.5944 4.16018 12.644 4.11067L13.7107 3.044C13.8107 2.94393 13.867 2.80819 13.867 2.66667C13.867 2.52514 13.8107 2.38941 13.7107 2.28933C13.6106 2.18926 13.4749 2.13304 13.3333 2.13304C13.1918 2.13304 13.0561 2.18926 12.956 2.28933L11.8893 3.356C11.8147 3.43059 11.7638 3.52566 11.7432 3.62917C11.7226 3.73268 11.7331 3.83998 11.7735 3.93749C11.8139 4.03499 11.8824 4.11832 11.9701 4.17692C12.0579 4.23552 12.1611 4.26675 12.2667 4.26667ZM12.644 11.8893C12.5439 11.7893 12.4082 11.733 12.2667 11.733C12.1251 11.733 11.9894 11.7893 11.8893 11.8893C11.7893 11.9894 11.733 12.1251 11.733 12.2667C11.733 12.4082 11.7893 12.5439 11.8893 12.644L12.956 13.7107C13.0056 13.7602 13.0644 13.7995 13.1291 13.8263C13.1939 13.8532 13.2633 13.867 13.3333 13.867C13.4034 13.867 13.4728 13.8532 13.5375 13.8263C13.6023 13.7995 13.6611 13.7602 13.7107 13.7107C13.7602 13.6611 13.7995 13.6023 13.8263 13.5375C13.8532 13.4728 13.867 13.4034 13.867 13.3333C13.867 13.2633 13.8532 13.1939 13.8263 13.1291C13.7995 13.0644 13.7602 13.0056 13.7107 12.956L12.644 11.8893ZM2.66667 8C2.66667 7.85855 2.61048 7.7229 2.51046 7.62288C2.41044 7.52286 2.27478 7.46667 2.13333 7.46667H0.533333C0.391885 7.46667 0.256229 7.52286 0.15621 7.62288C0.0561903 7.7229 0 7.85855 0 8C0 8.14145 0.0561903 8.27711 0.15621 8.37712C0.256229 8.47714 0.391885 8.53333 0.533333 8.53333H2.13333C2.27478 8.53333 2.41044 8.47714 2.51046 8.37712C2.61048 8.27711 2.66667 8.14145 2.66667 8ZM8 13.3333C7.85855 13.3333 7.7229 13.3895 7.62288 13.4895C7.52286 13.5896 7.46667 13.7252 7.46667 13.8667V15.4667C7.46667 15.6081 7.52286 15.7438 7.62288 15.8438C7.7229 15.9438 7.85855 16 8 16C8.14145 16 8.27711 15.9438 8.37712 15.8438C8.47714 15.7438 8.53333 15.6081 8.53333 15.4667V13.8667C8.53333 13.7252 8.47714 13.5896 8.37712 13.4895C8.27711 13.3895 8.14145 13.3333 8 13.3333ZM15.4667 7.46667H13.8667C13.7252 7.46667 13.5896 7.52286 13.4895 7.62288C13.3895 7.7229 13.3333 7.85855 13.3333 8C13.3333 8.14145 13.3895 8.27711 13.4895 8.37712C13.5896 8.47714 13.7252 8.53333 13.8667 8.53333H15.4667C15.6081 8.53333 15.7438 8.47714 15.8438 8.37712C15.9438 8.27711 16 8.14145 16 8C16 7.85855 15.9438 7.7229 15.8438 7.62288C15.7438 7.52286 15.6081 7.46667 15.4667 7.46667Z" fill="#0093D0" />
                            </svg>
                            <p className="dura_night-text">{tour.duration} дней</p>
                        </div>
                        <div className="dura_night">

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.28567 16C6.08817 16 3.98068 15.127 2.42682 13.5732C0.872952 12.0193 0 9.91183 0 7.71433C0 4.35721 1.92856 1.34722 4.91462 0.0475886C5.01985 0.00172278 5.13647 -0.0113816 5.24926 0.00998327C5.36206 0.0313481 5.4658 0.0861915 5.54698 0.167367C5.62815 0.248543 5.68299 0.352286 5.70436 0.46508C5.72572 0.577874 5.71262 0.694488 5.66675 0.799727C5.3239 1.58687 5.14283 2.59507 5.14283 3.71435C5.14283 7.6529 8.3471 10.8572 12.2856 10.8572C13.4049 10.8572 14.4131 10.6761 15.2003 10.3332C15.3055 10.2874 15.4221 10.2743 15.5349 10.2956C15.6477 10.317 15.7515 10.3718 15.8326 10.453C15.9138 10.5342 15.9687 10.6379 15.99 10.7507C16.0114 10.8635 15.9983 10.9801 15.9524 11.0854C14.6528 14.0714 11.6428 16 8.28567 16Z" fill="#0093D0" />
                            </svg>

                            <p className="dura_night-text">{tour.duration - 1} ночей</p>
                        </div>

                    </div>
                    <div className="tour_rating">

                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.5L13.4697 8.10081H21.4616L14.996 12.7984L17.4656 20.3992L11 15.7016L4.53436 20.3992L7.00402 12.7984L0.538379 8.10081H8.53035L11 0.5Z" fill="#0093D0" />
                        </svg>
                        <p>{tour.rating}</p>
                        <span>{tour.reviewsCount.total} отзывов</span>
                    </div>
                    <p className="tour_type">
                        Тип тура:
                        {tour.types.map(type => {
                            return (<p className='tour_type-name'>{type}</p>)
                        }
                        )}
                    </p>
                    {/* <p className="tour_date">
                        Дата начала тура:<br />
                        <span>
                            {tour.date}
                        </span>
                    </p> */}
                </div>
                <p className="tour_descrpp">*стоимость указана на 1 чел.</p>
                <Link to={`/catalog/tour/id/${tour.id}`}>
                    <div className={open} onMouseLeave={() => { setOpen('tour_btn closed') }} onMouseEnter={() => { setOpen('tour_btn open') }}>
                        <p>Смотреть тур</p>

                        <svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2916 0.293265C13.1986 0.386132 13.1249 0.496416 13.0746 0.617806C13.0242 0.739196 12.9983 0.869312 12.9983 1.00072C12.9983 1.13212 13.0242 1.26224 13.0746 1.38363C13.1249 1.50502 13.1986 1.6153 13.2916 1.70817L20.5849 9.00018H0.999935C0.734737 9.00018 0.480399 9.10553 0.292875 9.29306C0.105351 9.48058 2.43697e-06 9.73492 2.43697e-06 10.0001C2.43697e-06 10.2653 0.105351 10.5197 0.292875 10.7072C0.480399 10.8947 0.734737 11 0.999935 11H20.5849L13.2916 18.2921C13.104 18.4797 12.9986 18.7342 12.9986 18.9995C12.9986 19.2649 13.104 19.5193 13.2916 19.707C13.4792 19.8946 13.7337 20 13.9991 20C14.2644 20 14.5189 19.8946 14.7065 19.707L23.7059 10.7076C23.7989 10.6147 23.8726 10.5044 23.923 10.383C23.9733 10.2616 23.9992 10.1315 23.9992 10.0001C23.9992 9.86871 23.9733 9.73859 23.923 9.6172C23.8726 9.49581 23.7989 9.38553 23.7059 9.29266L14.7065 0.293265C14.6136 0.200295 14.5034 0.126541 14.382 0.0762198C14.2606 0.0258989 14.1305 -3.86717e-07 13.9991 -3.86717e-07C13.8677 -3.86717e-07 13.7375 0.0258989 13.6161 0.0762198C13.4948 0.126541 13.3845 0.200295 13.2916 0.293265Z" fill="white" />
                        </svg>

                    </div>
                </Link>


            </div>
        </div>
    )
}

// style={{backgroundImage:url(props.images[0]), backgroundSize:cover}}