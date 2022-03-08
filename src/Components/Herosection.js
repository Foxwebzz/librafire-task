import React from 'react'
import '../Styles/Hero-section.scss'
import '../App.css'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


function Herosection() {
  return (
      
    <div className="hero-section">
        <div className="overlay-hero"></div>

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
            <div className="container">
            <div className="left-hero">
                <h2>Dé specialist…</h2>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 

                <button><img src="images/white-shoping.svg" alt="" />Winkel</button>

                <img src="images/left-arrrow.svg" alt="" />
                <img src="images/right-arrrow.svg" alt="" />
            </div>


            <div className="right-hero">
                <img className='window-hero-img' src="images/hero-window.png" alt="" />
                <img className='waves-hero' src="images/waves.svg" alt="" />

                <div className="content-right-hero">
                    <h4>Dak</h4>    
                    <h5>Lichtkoepels</h5>
                    <p>De renovatie van bestaande koepels of het plaatsen van een nieuwe koepel ? Een traditionele…</p>
                    <p className='view-btn-hero'>Klik hier voor meer informatie
                    <img src="images/view-icon-right.svg" alt="" />
                    </p>
                </div>
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="container">
            <div className="left-hero">
                <h2>Dé specialist…</h2>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 

                <button><img src="images/white-shoping.svg" alt="" />Winkel</button>

                <img src="images/left-arrrow.svg" alt="" />
                <img src="images/right-arrrow.svg" alt="" />
            </div>


            <div className="right-hero">
                <img className='window-hero-img' src="images/hero-window.png" alt="" />
                <img className='waves-hero' src="images/waves.svg" alt="" />

                <div className="content-right-hero">
                    <h4>Dak</h4>    
                    <h5>Lichtkoepels</h5>
                    <p>De renovatie van bestaande koepels of het plaatsen van een nieuwe koepel ? Een traditionele…</p>
                    <p className='view-btn-hero'>Klik hier voor meer informatie
                    <img src="images/view-icon-right.svg" alt="" />
                    </p>
                </div>
            </div>
        </div>
            </SwiperSlide>
            
            
        </Swiper>

        


        <div className="footer-hero">
            <div className="block-footer-main">
                <span className="circle">
                    <img src="images/box-icon.svg" alt="" />
                </span>
                <span className="content-block-footer">
                    <p>Assortimente
                    <img className='right-icon-white' src="images/right-icon.svg" alt="" />
                    </p>
                </span>
            </div>

            <div className="block-footer-main">
                <span className="circle">
                    <img src="images/message-icon.svg" alt="" />
                </span>
                <span className="content-block-footer">
                    <p>Getuigenissen
                    <img className='right-icon-white' src="images/right-icon.svg" alt="" />
                    </p>
                </span>
            </div>

            <div className="block-footer-main">
                <span className="circle">
                    <img src="images/reload-icon.svg" alt="" />
                </span>
                <span className="content-block-footer">
                    <p>Up-To-Date
                    <img className='right-icon-white' src="images/right-icon.svg" alt="" />
                    </p>
                </span>
            </div>

            <div className="block-footer-main">
                <span className="circle">
                    <img src="images/customer-support.svg" alt="" />
                </span>
                <span className="content-block-footer">
                    <p>Services
                    <img className='right-icon-white' src="images/right-icon.svg" alt="" />
                    </p>
                </span>
            </div>

            <div className="block-footer-main">
                <span className="circle">
                    <img src="images/wave-icon-small.svg" alt="" />
                </span>
                <span className="content-block-footer">
                    <p>Wie zijn wij
                    <img className='right-icon-white' src="images/right-icon.svg" alt="" />
                    </p>
                </span>
            </div>
        </div>
    </div>
  )
}


export default Herosection