import { useState } from "react";
import { store } from "../../../imgStore";

import './Carousel.css'

export function Carousel() {
  const [index, setIndex] = useState(0);
  function handleLeft() {
    if (index > 0) {
      setIndex(index - 1)
      console.log(index)
    }
  }
  function handleRight() {
    if (index < store.length - 1) {
      setIndex(index + 1)
      console.log(index)
    }
  }
  return (
    <div className="carousel">
      <p className="carousel_title">Популярные направления</p>
      <section className="slider">
      <button className={index==0? 'left_arrow hidden': 'left_arrow'} onClick={handleLeft}>
        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.2273 1.68725C10.3176 1.59178 10.3881 1.47947 10.4349 1.35674C10.4817 1.23401 10.5039 1.10327 10.5002 0.971965C10.4965 0.840663 10.4669 0.711378 10.4133 0.591492C10.3596 0.471606 10.2828 0.363467 10.1873 0.273249C10.0919 0.183031 9.97957 0.112501 9.85684 0.0656852C9.73411 0.0188697 9.60336 -0.00331434 9.47206 0.000400002C9.34076 0.00411435 9.21147 0.0336542 9.09159 0.0873329C8.9717 0.141012 8.86356 0.217778 8.77334 0.313249L0.273343 9.31325C0.0978063 9.49892 0 9.74474 0 10.0002C0 10.2558 0.0978063 10.5016 0.273343 10.6872L8.77334 19.6882C8.86296 19.7858 8.97108 19.8646 9.09141 19.92C9.21173 19.9754 9.34187 20.0064 9.47427 20.0111C9.60666 20.0158 9.73867 19.9942 9.86263 19.9474C9.98659 19.9007 10.1 19.8298 10.1963 19.7388C10.2927 19.6479 10.3699 19.5387 10.4237 19.4176C10.4775 19.2965 10.5067 19.166 10.5095 19.0335C10.5124 18.9011 10.489 18.7694 10.4405 18.6461C10.3921 18.5228 10.3196 18.4103 10.2273 18.3153L2.37534 10.0002L10.2273 1.68725Z" fill="white" />
        </svg>
      </button>
      <div className="slider__body" >
        <div className="slider__inner" style={{transform:`translateX(${-100 * index}%)`}}>
          <div className="slider_item">
            <img src={store[0].img} alt="" />
          </div>
          <div className="slider_item">
            <img src={store[1].img} alt="" />
          </div>
          <div className="slider_item">
            <img src={store[2].img} alt="" />
          </div>
          <div className="slider_item">
            <img src={store[3].img} alt="" />
          </div>
          <div className="slider_item">
            <img src={store[4].img} alt="" />
          </div>
        </div>
      </div>
      <button className={index==store.length-1? 'right_arrow hidden': 'right_arrow'} onClick={handleRight}>
        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.282423 18.3245C0.192205 18.4199 0.121675 18.5322 0.0748596 18.655C0.0280441 18.7777 0.0058596 18.9085 0.00957394 19.0398C0.0132883 19.1711 0.0428284 19.3003 0.0965071 19.4202C0.150186 19.5401 0.226952 19.6483 0.322423 19.7385C0.417894 19.8287 0.530201 19.8992 0.652929 19.946C0.775658 19.9928 0.906405 20.015 1.03771 20.0113C1.16901 20.0076 1.29829 19.9781 1.41818 19.9244C1.53807 19.8707 1.64621 19.7939 1.73642 19.6985L10.2364 10.6985C10.412 10.5128 10.5098 10.267 10.5098 10.0115C10.5098 9.75596 10.412 9.51014 10.2364 9.32447L1.73642 0.323469C1.6468 0.225908 1.53869 0.147126 1.41836 0.0917015C1.29803 0.0362769 1.16789 0.00531418 1.0355 0.000610352C0.903103 -0.00409348 0.771093 0.017557 0.647137 0.0643024C0.52318 0.111048 0.409747 0.181956 0.313426 0.272911C0.217105 0.363866 0.139817 0.473053 0.086051 0.59413C0.0322848 0.715206 0.0031124 0.84576 0.000227928 0.978207C-0.00265654 1.11065 0.0208042 1.24235 0.0692482 1.36566C0.117692 1.48896 0.190154 1.60141 0.282423 1.69647L8.13442 10.0115L0.282423 18.3245Z" fill="white" />
        </svg>
      </button>
    </section>
    </div>
    
  )
}
{/* <div className="carousel-container">
      <button className={index==0? 'left_arrow hidden': 'left_arrow'} onClick={handleLeft}>

        

      </button>
      <div className="carousel">
        <img src={store[index].img} alt="" />
      </div>
      <button className={index==store.length-1? 'right_arrow hidden': 'right_arrow'} onClick={handleRight}>


        


      </button>
    </div> */}