import IconCurrency from '../icon-currency/IconCurrency'
import './CheckCard.css'

export default function CheckCard({
  data: [
    name,
    img,
    alt,
    description,
    price,
    brand = 'Hacendado',
  ],
  onClick,
  isChecked,
}) {
  return (
    <>
      <li className="check-card">
        <img src={img} alt={alt} />
        <h3>{name}</h3>
        <p className='description' >{description}</p>
        <p className='price'><IconCurrency fill='green' height='12' width='10' />{(price).toFixed(2)} <span>por unidad</span></p>
        <input type="checkbox" defaultChecked={isChecked} onClick={({target}) => onClick(target.checked, [name, img, alt, description, price, brand])} />
      </li>
    </>
  )
}