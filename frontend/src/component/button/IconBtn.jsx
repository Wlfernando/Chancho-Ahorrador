import './IconBtn.css'

const hamburgerIcon = <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="18" height="2" rx="1" fill="#F5F5F5"/>
  <rect y="5" width="18" height="2" rx="1" fill="#F5F5F5"/>
  <rect y="10" width="18" height="2" rx="1" fill="#F5F5F5"/>
</svg>

const magnifierIcon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 8.77778C1 9.79917 1.20118 10.8106 1.59205 11.7542C1.98292 12.6978 2.55582 13.5553 3.27806 14.2775C4.00029 14.9997 4.85771 15.5726 5.80135 15.9635C6.745 16.3544 7.75639 16.5556 8.77778 16.5556C9.79917 16.5556 10.8106 16.3544 11.7542 15.9635C12.6978 15.5726 13.5553 14.9997 14.2775 14.2775C14.9997 13.5553 15.5726 12.6978 15.9635 11.7542C16.3544 10.8106 16.5556 9.79917 16.5556 8.77778C16.5556 7.75639 16.3544 6.745 15.9635 5.80135C15.5726 4.85771 14.9997 4.00029 14.2775 3.27806C13.5553 2.55582 12.6978 1.98292 11.7542 1.59205C10.8106 1.20118 9.79917 1 8.77778 1C7.75639 1 6.745 1.20118 5.80135 1.59205C4.85771 1.98292 4.00029 2.55582 3.27806 3.27806C2.55582 4.00029 1.98292 4.85771 1.59205 5.80135C1.20118 6.745 1 7.75639 1 8.77778Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 21L14.3333 14.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

const routeIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1V9.6129H8.7438V5.91398L2 11.7634L8.7438 17.6129V14H14H19.2562V10.3871L26 16.2366L19.2562 22.086V18.3871H14V27" stroke="#FDF6F6" strokeWidth="2" strokeLinecap="round"/>
</svg>

const cartIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z" fill="white"/>
</svg>

const perfilIcon = <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.99999 15.75H8.99999H16C17 14.25 15.4 10.25 8.99999 10.25C2.59999 10.25 0.999991 14.25 1.99999 15.75Z" stroke="#F5F5F5" strokeWidth="2"/>
  <circle cx="8.72552" cy="4.25" r="3" stroke="#F5F5F5" strokeWidth="2"/>
</svg>

export default function IconBtn({
  hamburger = false,
  magnifier = false,
  route = false,
  cart = false,
  perfil = false,
}) {
  return (
    <>
      <button className="icon-btn">{
        hamburger ? hamburgerIcon :
        magnifier ? magnifierIcon :
        route ? routeIcon :
        cart ? cartIcon :
        perfil ? perfilIcon :
        null
      }</button>
    </>
  )
}