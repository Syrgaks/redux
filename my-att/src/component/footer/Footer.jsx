import React from 'react'
import './footer.css'
import foto from '../../assets/link.svg'
import foto1 from '../../assets/facebok.svg'
import foto2 from '../../assets/insta.svg'
import foto3 from '../../assets/twiter.svg'

function Footer() {
  return (
    <div className='footer container'>
       <div className="info">
          <div className="info1">
              <h3>Exclusive</h3>
              <h5> subscribe</h5>
              <p>get 10% off your first order</p>
          </div>
          <div className="info2">
              <h3> Support </h3>
              <p> exlusive@gmail.com </p>
              <p> +996 220 091 909 </p>
          </div>
          <div className="info3">
              <h3>accoount</h3>
              <p> register </p>
              <p>shop</p>
          </div>
          <div className="info4">
              <h3> download app </h3>
              <p> save $3 with new user only</p>
              <div className="apps">
               <img src={foto3} />
               <img src={foto1} />
               <img src={foto2} />
               <img src={foto} />
              </div>

          </div>
       </div>
    </div>
  )
}

export default Footer
