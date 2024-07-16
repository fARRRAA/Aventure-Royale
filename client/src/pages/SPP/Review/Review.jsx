import './Review.css'
import { ReviewRating } from './ReviewRating/Reviewrating'

export function Review(review,i){
    return (
        <div className="review_item">
            <div className="review_author_rating">
                <p className="review_author">{review.reviewer.surname + ' ' + review.reviewer.name}</p>
                <div className="review_rating">
                    <ReviewRating rating={review.rating}/>
                    <p>{review.rating}</p>
                </div>
            </div>
        </div>
    )
}