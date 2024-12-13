import { useNavigate } from 'react-router-dom'
import './Amount.css'
import InputNum from '../InputNum/InputNum'
import Btn from '../button/Btn.jsx'
import logo from '/logo.svg'
import Priority from '../section/Priority'
import { useBasketContext } from '../../element/Root'
import { useState } from 'react'
import IconCurrency from '../icon-currency/IconCurrency'

export default function Amount() {
  const { budgetRef } = useBasketContext();
  const [budget, setBudget] = useState(budgetRef.current);
  const navigate = useNavigate();

  return (
    <>
      <Priority title={'Ahorra como un Campeón'} className={'amount'}>
        <img src={logo} alt="logo" />
        <p>Por favor ingresa el monto del que te guiaras para que podamos ayudarte a seleccionar las mejores promociones y descuentos.</p>
        <form>
          <InputNum name='budget' symbol={<IconCurrency fill='var(--green)' />} onChange={(_, value) => setBudget(value)} value={budget} />
          <Btn mod='forward' onClick={() => {
            budgetRef.current = +budget;
            navigate('../retailer');
          }} />
        </form>
      </Priority>
    </>
  )
}