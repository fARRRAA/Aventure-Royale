import { Link } from 'react-router-dom'
import './BottomHeader.css'

export function BottomHeader() {
    return (
        <>
            <div className="bottomheader">
                <nav className="bottomheader_nav">
                    <div className="bottomheader_menu">
                        <svg width="18" height="11" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H21M1 7.66667H21M1 14.3333H21" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Меню</p>
                    </div>
                    <Link to='/catalog' className="bottomheader_nav-item">Туры</Link>
                    <p className="bottomheader_nav-item">Проживание</p>
                    <p className="bottomheader_nav-item">Горящие туры</p>
                    <p className="bottomheader_nav-item">Акции</p>
                    <p className="bottomheader_nav-item">Бронирование</p>
                    <Link to='/catalog' className="bottomheader_nav-item">Каталог</Link>
                </nav>
            </div>
        </>
    )
}