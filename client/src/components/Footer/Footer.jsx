import './Footer.css'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer_inner">
                        <div className="footer_line">
                            <Link to='/'>
                                <p className="topheader_logo">
                                    Aventure <span>royale</span>
                                </p>
                            </Link>
                            <div className="column_nav">
                                <div className="column_nav-item">ТУРЫ</div>
                                <div className="column_nav-item">ТУРЫ С КЭШБЕКОМ</div>
                                <div className="column_nav-item">КОПРОРАТИВНЫЕ ТУРЕЫ</div>
                                <div className="column_nav-item">ОПЛАТА</div>
                            </div>
                            <div className="column_nav">
                                <div className="column_nav-item">РЕГИОНЫ</div>
                                <div className="column_nav-item">ДОСТОПРИМЕЧАТЕЛЬНОСТИ</div>
                                <div className="column_nav-item">ВЕБИНАРЫ</div>
                                <div className="column_nav-item">БЛОГ</div>
                            </div>
                            <div className="column_nav">
                                <div className="column_nav-item">ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</div>
                                <div className="column_nav-item">АВИАБИЛЕТЫ</div>
                                <div className="column_nav-item">СТРАХОВАНИЕ ПУТЕШЕСТВЕННИКОВ</div>
                                <div className="column_nav-item">ПАРТНЕРСКАЯ ПРОГРАММА</div>
                            </div>
                            <div className="column_nav">
                                <div className="column_nav-item">О НАС</div>
                                <div className="column_nav-item">МЫ В СМИ</div>
                                <div className="column_nav-item">КОНТАКТЫ</div>
                                <div className="column_nav-item">ОТЗЫВЫ</div>
                            </div>
                        </div>
                        <div className="footer_line">
                            <div className="footer_advantages">
                                <div className="footer_advantage">
                                    <img src="https://bolshayastrana.com/_nuxt/img/percent-border-none.19366d3.svg" width='40px' height='40px' alt="" />
                                    <div className="footer_advantage-text">Туры от прямых организаторов без наценок</div>
                                </div>
                                <div className="footer_advantage">
                                    <img src="https://bolshayastrana.com/_nuxt/img/license-border-none.f73f1b9.svg" width='40px' height='40px' alt="" />
                                    <div className="footer_advantage-text">Все организаторы в реестре туроператоров</div>
                                </div>
                                <div className="footer_advantage">
                                    <img src="https://bolshayastrana.com/_nuxt/img/federal-border-none.8d4c32c.svg" width='40px' height='40px' alt="" />
                                    <div className="footer_advantage-text">
                                        Федеральный сервис: 88 направлений и 22 вида отдыха</div>
                                </div>
                            </div>
                            <div className="footer_toagency">
                                <p className="footer_toagency-title">Турфирмам</p>
                                <p className="footer_toagency-subtitle">Хотите добавить свой тур?
                                    Пишите на aventure.royale.agency@gmail.com</p>
                                <div className="toagency_reestr">
                                    <img src="/src/components/Footer/image1.png" width='40px' height='40px' alt="" />
                                    <div className="toagency_reestr-text">
                                        <p className="footer_toagency-title">Мы в реестре туроператоров</p>
                                        <div className="footer_toagency-subtitle">ООО "AventureRoyale" РТО 020723</div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_toagency">
                                <p className="footer_toagency-title">Давайте дружить</p>
                                <p className="footer_toagency-subtitle">Вдохновляем на путешествия по России</p>
                                <div className="footer_social">
                                    <img src="/src/components/Footer/image.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="footer_line">
                            <p className="soglashenie">Пользовательское соглашение</p>
                            <p className="politika">Политика конфиденциальности</p>
                        </div>
                        <div className="footer_line">
                            <p className="copyright">
                                © 2016—2024 ООО «Aventure Royale». ИНН/КПП 5908078160/590801001 ОГРН 1185958020533
                                Номер в реестре Роскомнадзора № 59-18-006319 (Приказ № 321 от 11.10.2018)
                                Полное или частичное копирование изображений и текстов возможно только с указанием активной ссылки на сайт Aventure Royale.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}