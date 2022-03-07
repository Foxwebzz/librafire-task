import React from 'react'
import '../Styles/Tevedren-section.scss'

function TeverdenSection() {
  return (
    <div className='teverden-main-bg'>
        <div className="overlay-teverden"></div>
        <img className='wave-blue' src="images/wave-blue.svg" alt="" />

        <div className="container">
            <h2>Tevreden klanten vertellen</h2>

            <div className="images-boxes-taverden">
                <div className="box-taverden">
                    <img src="images/piknik.png" alt="" />
                    <img className='logo-gray' src="images/gray-logo.png" alt="" />
                    <div className="content-box-taverden">
                        <h4>Robby Stordeur - Toyota Motor Europe</h4>
                        <p>“Toyota kiest milieubewust voor banken uit recycling materiaal. Wij zijn zeer tevreden van...</p>
                        <p className='view-btn-hero'>Klik hier voor meer informatie
                        <img src="images/view-icon-right.svg" alt="" />
                        </p>
                    </div>
                </div>

                <div className="box-taverden">
                    <img className='left-circle' src="images/white-circle-arr.svg" alt="" />
                    <img className='right-circle'  src="images/white-right-arr.png" alt="" />

                    <img src="images/oluk.png" alt="" />
                    <img className='logo-gray' src="images/gray-logo.png" alt="" />
                    <div className="content-box-taverden">
                        <h4>Steve Drechsel zaakvoerder van SD Dakwerken</h4>
                        <p>“In een van mijn gesprekken met Chris Leurs, de projectverantwoordelijke Dak & Gevel bij Van Wauwe…</p>
                        <p className='view-btn-hero'>Klik hier voor meer informatie
                        <img src="images/view-icon-right.svg" alt="" />
                        </p>
                    </div>
                </div>

                <div className="box-taverden">
                    <img src="images/krov.png" alt="" />
                    <img className='logo-gray' src="images/gray-logo.png" alt="" />
                    <div className="content-box-taverden">
                        <h4>Bob Lauman - zaakvoerder Dakrubbercentrale</h4>
                        <p>Snelheid, wendbaarheid en de beste marktprijzen, dat zijn naar mijn aanvoelen de belangrijkste troeven van Van Wauwe…</p>
                        <p className='view-btn-hero'>Klik hier voor meer informatie
                        <img src="images/view-icon-right.svg" alt="" />
                        </p>
                    </div>
                </div>
            </div>

            <div className="button-center">
                <button>Getuigenissen klanten</button>
            </div>
        </div>
    </div>
  )
}

export default TeverdenSection