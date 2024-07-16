import { ButtonBack, ButtonNext, Carousel, Slide, Slider, SliderBarLine, SliderBarDotGroup, renderDotsDynamicCircle, renderDotsDynamicPill } from "react-scroll-snap-anime-slider";
import './Reviews.css';
import { reviews } from './reviewsStore';
import { useState } from 'react';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
export function CarouselReviews() {
    const [index, setIndex] = useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function morePhoto(id) {
        console.log(index)
        return (
            <>
                <div className="more_photo" onClick={handleOpen}>
                    <img src={reviews[id].imgs[3]} alt="" />
                    <p>Еще {reviews[id].imgs.length - 3} фото</p>
                </div>
            </>
        )
    }

    function photosOpen(id){
        return (
            <>
                <div className="photo_gallery">
                    {
                        reviews[id].imgs.map((img, i) => {
                            return (
                                <img key={i} src={img} alt="" />
                            )
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <>
            
        
            <Carousel
                totalSlides={6}
                visibleSlides={2}
                step={1}
                slideMargin='5px'
            >
                <Slider>
                    {
                        reviews.map((review, i) => {
                            return (
                                <>
                                    <Slide>
                                    
                                        <div className="test_item">
                                            <div className="test_reviewer">
                                                <img src={review.pfp} alt="pfp" title='' />
                                                <div className="reviewer_name_tour">
                                                    <p className="reviewer_name">{review.reviewerName}</p>
                                                    <p className="reviewer_tour">Тур <span>{review.tourName}</span> в {review.year} году</p>
                                                </div>
                                            </div>
                                            <div className='test_body'>
                                                <div className="test_imgs">
                                                    {
                                                        reviews[i].imgs.length > 4 ?
                                                        
                                                            reviews[i].imgs.slice(0, 3).map((img) => {
                                                                return (
                                                                    <img src={img} alt='' />
                                                                )
                                                            })
                                                            :
                                                            reviews[i].imgs.map((img) => {
                                                                return <img src={img} alt='' />
                                                            })
                                                    }
                                                    {
                                                        reviews[i].imgs.length > 4 && morePhoto(i)
                                                        

                                                    }
                                                </div>
                                                <p className={reviews[i].imgs.length > 4 ? 'test_text more' : 'test_text'}>{review.body}</p>

                                            </div>
                                        </div>
                                    </Slide>
                                </>
                            )
                        })
                    }
                </Slider>
                <SliderBarDotGroup
                    id="my-slider-dot-group"
                    className="my-class-name"
                    aria-label="slider bar"
                    dotGroupProps={{
                        id: "my-slider-bar-dot-group",
                    }}
                    renderDots={renderDotsDynamicPill}
                    style={{ marginTop: "33px" }}
                />
            </Carousel>
        </>
    )
}