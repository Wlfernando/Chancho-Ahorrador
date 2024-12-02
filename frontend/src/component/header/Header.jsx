import IconBtn from '../button/IconBtn'
import './Header.css'

export default function Header() {
  return (
    <>
      <header className='header'>
        <IconBtn hamburger />
        <IconBtn magnifier />
        <IconBtn route />
        <IconBtn cart />
        <IconBtn perfil />
      </header>
    </>
  )
}