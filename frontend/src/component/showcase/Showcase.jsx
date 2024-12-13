import { useBasketContext } from '../../element/Root'
import Btn from '../Button/Btn'
import IconCurrency from '../icon-currency/IconCurrency';
import './Showcase.css'
import iconCompany from '/icon_company.svg'

export default function Showcase({
  title = '',
  articles = [],
  promo,
}) {
  const { recordBill } = useBasketContext();

  return (
    <>
      <section className={`showcase${promo ? ' promo' : ''}`}>
        <h2>{title}</h2>
        <ul>
          {articles.map(([name, image, alt, description, price, brand = 'Hacendado', promo], i) => {
            let isChecked = false;

            return <li key={i}>
              <img src={image} alt={alt} />
              <h3>{name.toLowerCase()}</h3>
              <p className='description'>{description}.</p>
              <p className='brand'>{brand}</p>
              <p className='price'><IconCurrency fill='green' width='14' height='12'/>{(price).toFixed(2)}<span className='unit'> por unidad</span></p>
              {promo &&
                <label>
                  <input type="checkbox" onChange={({ target: { checked }}) => isChecked = checked} />
                  20% en este producto
                  <img src={iconCompany} alt="icon of your company" />
                </label>
              }
              <Btn type='button' onClick={() => recordBill([name, image, alt, description, price, brand]).set(isChecked ? .2 : undefined)} >Agregar</Btn>
          </li>})}
        </ul>
      </section>
    </>
  )
}