import './Btn.css'

export default function Btn({
  type = 'submit',
  mod = '',
  children = 'Continuar',
  onClick,
}) {
  return (
    <>
      <button className={`button${mod && ' ' + mod}`} type={type} onClick={onClick} >{children}</button>
    </>
  )
}