import React from 'react'
import '../Styles/News-section.scss'

function NewsSection() {
  return (
    <div className='news-section-main'>
        <div className="container">
            <h2>Nieuws</h2>    

            <div className="block-images-news">
                <div className="news-content-block">
                    <img src="images/news-people.png" alt="" />    
                    <h3>Opleiding Tridex Deurne</h3>
                    <div className="even-block">
                        <span>EVENEMENTEN</span>
                        <p>21/01/2019</p>    
                    </div>

                    <p className='content-p-news'>Op donderdag 18 november konden onze professionele klanten een opleiding volgen…</p>
                    <p className='view-btn-hero'>Klik hier voor meer informatie
                        <img src="images/white-arrow-link.svg" alt="" />
                    </p>
                </div>

                <div className="news-content-block">
                    <img src="images/news-logo.png" alt="" />    
                    <h3>Vernieuwde showroom Deurne</h3>
                    <div className="even-block">
                        <span>EVENEMENTEN</span>
                        <p>21/01/2019</p>    
                    </div>

                    <p className='content-p-news'>Op donderdag 18 november konden onze professionele klanten een opleiding volgen…</p>
                    <p className='view-btn-hero'>Klik hier voor meer informatie
                        <img src="images/white-arrow-link.svg" alt="" />
                    </p>
                </div>

                <div className="news-content-block">
                    <img src="images/news-hang.png" alt="" />    
                    <h3>Vernieuwde showroom Deurne</h3>
                    <div className="even-block">
                        <span>EVENEMENTEN</span>
                        <p>21/01/2019</p>    
                    </div>

                    <p className='content-p-news'>Op donderdag 18 november konden onze professionele klanten een opleiding volgen…</p>
                    <p className='view-btn-hero'>Klik hier voor meer informatie
                        <img src="images/white-arrow-link.svg" alt="" />
                    </p>
                </div>
            </div>

            <div className="button-center">
                <button>Nieuws</button>
            </div>
        </div>
        
    </div>
  )
}

export default NewsSection