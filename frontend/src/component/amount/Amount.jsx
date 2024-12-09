import { Form } from 'react-router-dom'
import './Amount.css'
import InputNum from '../InputNum/InputNum'
import Btn from '../Button/Btn'

export default function Amount() {
  return (
    <>
      <section className="amount">
        <h1>Ahorra como un Campeón</h1>
        <div className="img"></div>
        <p>Por favor ingresa el monto del que te guiaras para que podamos ayudarte a seleccionar las mejores promociones y descuentos.</p>
        <Form>
          <InputNum name='amount' symbol='€' />
          <Btn mod='forward' />
        </Form>
      </section>
    </>
  )
}