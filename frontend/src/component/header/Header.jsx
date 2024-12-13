import { useNavigate } from 'react-router-dom'
import IconBtn from '../button/IconBtn'
import './Header.css'

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className='header'>
        <IconBtn hamburger onClick={() => navigate('/')} />
        <IconBtn magnifier />
        <IconBtn route onClick={() => navigate('/board/budget')} />
        <IconBtn cart />
        <IconBtn perfil />
      </header>
    </>
  )
}