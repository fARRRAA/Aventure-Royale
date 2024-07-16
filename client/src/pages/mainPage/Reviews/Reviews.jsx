import { useState } from 'react';
import './Reviews.css';
import { CarouselReviews } from './ReviewsSlider';

export function Reviews() {

    const [index, setIndex] = useState(0)
    return (
        <>
            
            <div className="reviews">
                <div className="reviews_title">Отзывы наших туристов</div>
                <div className="reviews_slider">
                    <div className="tests_wrapper">
                        {
                            <CarouselReviews />
                        }
                    </div>
                </div>

            </div>
        </>
    )
}