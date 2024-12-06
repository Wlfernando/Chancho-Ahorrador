import walmart from '/icon_walmart.svg'
import mercadona from '/icon_mercadona.svg'
import carrefour from '/icon_carrefour.svg'
import coto from '/icon_coto.svg'
import './Nav.css'
import { Link } from 'react-router-dom'

const retailerNav = [
  ['', walmart, 'walmart icon'],
  ['', mercadona, 'mercadona icon'],
  ['', carrefour, 'carrefour icon'],
  ['', coto, 'coto icon'],
]

export default function Nav() {
  return (
    <>
      <nav>
        <ul className='retailer-list'>
          {retailerNav.map(([link, icon, alt]) => <li>
            <Link to={link}><img src={icon} alt={alt} /></Link>
          </li>)}
        </ul>
      </nav>
    </>
  )
}