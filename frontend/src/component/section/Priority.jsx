import './Priority.css'

export default function Priority({
  title = '',
  className = '',
  children,
}) {
  return (
    <>
      <section className={`priority${className && ' ' + className}`}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  )
}