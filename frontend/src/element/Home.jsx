import Main from "../component/main/Main";
import Priority from "../component/section/Priority";
import logo from '/logo.svg'
import './Home.css'
import Showcase from "../component/showcase/Showcase";
import { someOfferts } from "../lib/matrix/mercadona";
import Sheet from "../component/sheet/Sheet";
import historyIcon from '/icon_history.png'
import parnershipIcon from '/icon_partnership.png'
import heartIcon from '/icon_placeholder.png'
import savingIcon from '/icon_savings.png'

export default function Home() {
  return (
    <>
      <Main>
        <Priority title="Te damos la bienvenida" className="home" >
          <img src={logo} alt="chancho ahorrador" />
          <p>Por favor ingresa el monto del que te guiaras para que podamos ayudarte a seleccionar las mejores promociones y descuentos.</p>
        </Priority>
        <section className="menu">
          <Sheet title={'Historial'} text={<img src={historyIcon} alt="history's icon" />} className="gold" />
          <Sheet title={'Convenios'} text={<img src={parnershipIcon} alt="parnership's icon" />} className="blue" />
          <Sheet title={'Favoritos'} text={<img src={heartIcon} alt="placeholder's icon" />} className="orange" />
          <Sheet title={'Descuentos'} text={<img src={savingIcon} alt="saving's icon" />} className="green" />
        </section>
        <Showcase title="Algunas de nuestras ofertas" articles={someOfferts} />
      </Main>
    </>
  )
}