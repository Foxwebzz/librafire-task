import React from 'react'
import '../Styles/Footer-section.scss'

function FooterSection() {
  return (
    <div className='footer-section-main'>
        <div className="container">
            <img src="images/Logo.png" alt="" />

            <div className="main-footer-flex">
                <div className="left-side-footer">
                    <ul>
                        <h4>Assortiment</h4>    
                        <li>Dak</li>
                        <li>Isolatie</li>
                        <li>Plaat & Folie</li>
                        <li>Leiding</li>
                        <li>BekLeding</li>
                        <li>Tuin</li>
                        <li>Diverse</li>
                    </ul>    
                    
                    <ul>
                        <h4>Bezoek ons</h4>
                        <li>
                            <img src="images/location-icon-white.svg" alt="" />
                            <div className="location-info">
                                <h5>Deurne (Antwerpen)</h5>  
                                <p>Oude Bosuilbaan 43, 2100 Deurne</p>  
                            </div>
                        </li>
                        <li>
                            <img src="images/location-icon-white.svg" alt="" />
                            <div className="location-info">
                                <h5>Lubbeek (Leuven)</h5>  
                                <p>Staatsbaan 4E, 3210 Lubbeek</p>  
                            </div>
                        </li>
                        <li>
                            <img src="images/location-icon-white.svg" alt="" />
                            <div className="location-info">
                                <h5>Kontich</h5>  
                                <p>Prins Boudewijnlaan 17 - unit 1, 2550 Kontich</p>  
                            </div>
                        </li>

                        <div className="socials-footer">
                            <h4>Volg ons</h4>    
                            <div className="socials-icons">
                                <img src="images/facebook-icon.svg" alt="" />
                                <img src="images/Linkedin-icon.svg" alt="" />
                                <img src="images/yt-icon.svg" alt="" />
                                <img src="images/insta-icon.svg" alt="" />
                            </div>
                        </div>
                    </ul>
                </div>


                <div className="right-side-footer">
                    <div className="block-footer-right">
                        <h4>Installateur</h4>    
                        <p>Graag installateur worden?</p>
                        <img src="images/footer-majstor.png" alt="" />
                        <button>Meer informatie</button>
                    </div>
                    <div className="block-footer-right">
                        <h4>Werken bij?</h4>    
                        <p>Van Wauwe werft aan…</p>
                        <img src="images/footer-ppl.png" alt="" />
                        <button>Meer informatie</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="copy-footer">
            <div className="container">
                <p>Copyright © 2021 Alle rechten voorbehouden. Van Wauwe - BE 415.527.412</p>

                <ul>
                    <li>Disclaimer</li>
                    <li>Levervoorwaarden</li>
                    <li>Algemene voorwaarden</li>
                    <li>Clubvoorwaarden</li>
                    <li>Vacatures</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterSection