import React from 'react'
import '../Styles/Bezoek-section.scss'


function BezoekSection() {
  return (
    <div className='bezoek-section-main'>
        <div className="container">
            <h2>Bezoek één van onze showrooms</h2>   

            <div className="bezoek-boxes">
                <div className="bezoek-box">
                    <h3>Deurne (Antwerpen)</h3>

                    <div className="contact-content">
                        <img src="images/location-icon.png" alt="" />
                        <p>Oude Bosuilbaan 43, 2100 Deurne</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/phone-icon.png" alt="" />
                        <p>03/326 75 70</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/maill.png" alt="" />
                        <p>verkoop@vanwauwe.com</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/time.png" alt="" />
                        <h4>Maandag - Vrijdag</h4>

                    </div>
                    <div className="content-time-icon">
                        <p>van 7u tot 8u</p>
                        <p>Op afspraak via nummer <a href="">03 360 79 99</a> </p>
                        <h4>Maandag - Vrijdag</h4>
                        <p>Van 8u tot 17u</p>
                        <h4>Woensdag - Donderdag & Vrijdag</h4>
                        <p>van 17u tot 18u op</p>
                        <p>Op afspraak via nummer <a href="">03 360 79 99</a> </p>
                    </div>
                </div>  


                <div className="bezoek-box">
                    <h3>Lubbeek (Leuven)</h3>

                    <div className="contact-content">
                        <img src="images/location-icon.png" alt="" />
                        <p>Staatsbaan 4E, 3210 Lubbeek</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/phone-icon.png" alt="" />
                        <p>016/62 09 01</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/maill.png" alt="" />
                        <p>verkoop@vanwauwe.com</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/time.png" alt="" />
                        <h4>Maandag - Vrijdag</h4>

                    </div>
                    <div className="content-time-icon">
                        <p>van 7u tot 8u</p>
                        <p>Op afspraak via nummer <a href="">016/62 09 01</a> </p>
                        <h4>Maandag - Vrijdag</h4>
                        <p>Van 8u tot 17u</p>
                        <h4>Woensdag - Donderdag & Vrijdag</h4>
                        <p>van 17u tot 18u op</p>
                        <p>Op afspraak via nummer <a href="">016/62 09 01</a> </p>
                    </div>
                </div>  


                <div className="bezoek-box">
                    <h3>Kontich</h3>

                    <div className="contact-content">
                        <img src="images/location-icon.png" alt="" />
                        <p>Prins Boudewijnlaan 17 - unit 1, 2550 Kontich</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/phone-icon.png" alt="" />
                        <p>123/4567 890</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/maill.png" alt="" />
                        <p>verkoop@vanwauwe.com</p>
                    </div>

                    <div className="contact-content">
                        <img src="images/time.png" alt="" />
                        <h4>Maandag - Vrijdag</h4>

                    </div>
                    <div className="content-time-icon">
                        <p>van 8u tot 12u30 </p>
                        <p>van 13u tot 16u</p>
                        <h4>Zaterdag en zondag</h4>
                        <p>gesloten</p>
                        
                    </div>
                </div>   

            </div> 
            <div className="button-center">
                <button>Onze showrooms</button>
            </div>
        </div>
    </div>
  )
}

export default BezoekSection