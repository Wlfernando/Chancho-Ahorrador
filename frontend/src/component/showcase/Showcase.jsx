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
          {articles.map(({display_name, thumbnail, brand, slug, price_instructions: { unit_price }, details: { description }}) => <li>
            <img src={thumbnail} alt={slug} />
            <h3>{display_name.toLowerCase()}</h3>
            <p className='description'>{description}</p>
            <p className='brand'>{brand}</p>
            <p className='price'>&euro;{unit_price}<span className='unit'> por unidad</span></p>
            <button>Agregar</button>
          </li>)}
        </ul>
      </section>
    </>
  )
}