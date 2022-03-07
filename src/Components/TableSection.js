import React from 'react'
import '../Styles/Table-section.scss'


function TableSection() {
  return (
    <div className='table-section-main'>
        <div className="bg-blue-div"></div>
        <div className="container">
            <img src="images/table-img.png" alt="" />
            <div className="table-content">
                <h2>Een ruime ervaring</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus. Pellentesque diam volutpat commodo sed egestas.
                </p>
                <p>
                    Consectetur lorem donec massa sapien faucibus et molestie. Neque convallis a cras semper auctor neque vitae tempus quam. Arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam sem
                </p>    
                <button>Meer Lezen</button>
            </div>
        </div>

        <div className="table-images-section">
            <img src="images/home-main.png" alt="" />
            <img src="images/majstor-main.png" alt="" />
            <img src="images/mastor2-main.png" alt="" />
        </div>
        <div className="arrow-table-section">
            <img src="images/left-arrrow.svg" alt="" />
            <img src="images/right-arrrow.svg" alt="" />
        </div>

    </div>
  )
}

export default TableSection