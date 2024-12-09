import './Btn.css'

export default function Btn({
  type = 'submit',
  mod = '',
  children = 'Continuar',
}) {
  return (
    <>
      <button className={`button${mod && ' ' + mod}`} type={type} >{children}</button>
    </>
  )
}