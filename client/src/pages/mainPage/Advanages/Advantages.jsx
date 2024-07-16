import { Advantage } from './Advantage/Advantage'
import './Advantages.css'

export function Advantages() {
    return (
        <>
            <div className="advantages">
                <p className='advantages_title'>Преимущества</p>
                <div className="advantages_inner">
                    <Advantage img="https://cdn.coral.ru/content/cms/russia/russia-tours/icon-benefit-01.png" title="ONLINE БРОНИРОВАНИЕ" />
                    <Advantage img="https://cdn.coral.ru/content/cms/russia/russia-tours/icon-benefit-02.png" title="КРУГЛОСУТОЧНАЯ ПОДДЕРЖКА" />
                    <Advantage img="https://cdn.coral.ru/content/cms/russia/russia-tours/icon-benefit-03.png" title="НЕ НУЖНО ОФОРМЛЯТЬ ВИЗУ" />
                    <Advantage img="https://cdn.coral.ru/content/cms/russia/russia-tours/icon-benefit-04.png" title="28 ЛЕТ НА РЫНКЕ" />
                </div>
            </div>
        </>
    )
}