import { Form } from 'react-router-dom'
import './Amount.css'
import InputNum from '../InputNum/InputNum'
import Btn from '../Button/Btn'
import logo from '/logo.svg'
import Priority from '../section/Priority'

export default function Amount() {
  return (
    <>
      <Priority title={'Ahorra como un Campeón'} className={'amount'}>
        <img src={logo} alt="logo" />
        <p>Por favor ingresa el monto del que te guiaras para que podamos ayudarte a seleccionar las mejores promociones y descuentos.</p>
        <Form>
          <InputNum name='amount' symbol='€' />
          <Btn mod='forward' />
        </Form>
      </Priority>
    </>
  )
}