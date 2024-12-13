import './Sheet.css'

export default function Sheet({
  title,
  text,
  className = '',
}) {
  return (
    <>
      <article className={`sheet${className && ' ' + className}`} >
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    </>
  )
}