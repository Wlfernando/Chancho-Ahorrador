import Btn from '../Button/Btn'
import './Showcase.css'

export default function Showcase({
  title = '',
  articles = [],
}) {
  return (
    <>
      <section className="showcase">
        <h2>{title}</h2>
        <ul>
          {articles.map(([name, image, alt, description, price, brand = 'Hacendado']) => <li>
            <img src={image} alt={alt} />
            <h3>{name.toLowerCase()}</h3>
            <p className='description'>{description}.</p>
            <p className='brand'>{brand}</p>
            <p className='price'>&euro;{price.toFixed(2)}<span className='unit'> por unidad</span></p>
            <Btn type='button' >Agregar</Btn>
          </li>)}
        </ul>
      </section>
    </>
  )
}