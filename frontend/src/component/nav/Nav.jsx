import { retailerLogo } from '../../lib/const'
import './Nav.css'
import { Link } from 'react-router-dom'
import Priority from '../section/Priority'

const retailerNav = [
  ['walmart', retailerLogo.walmart, 'walmart icon'],
  ['mercadona', retailerLogo.mercadona, 'mercadona icon'],
  ['carrefour', retailerLogo.carrefour, 'carrefour icon'],
  ['coto', retailerLogo.coto, 'coto icon'],
]

export default function Nav() {
  return (
    <>
      <Priority title='Elige un supermercado' >
        <p>Por favor elige un supermercado de donde consultar los productos</p>
        <nav>
          <ul className='retailer-list'>
            {retailerNav.map(([link, icon, alt], i) => <li key={i}>
              <Link to={'/compilation/' + link}><img src={icon} alt={alt} /></Link>
            </li>)}
          </ul>
        </nav>
      </Priority>
    </>
  )
}