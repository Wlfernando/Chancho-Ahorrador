import { Form, useNavigate } from "react-router-dom";
import Main from "../component/main/Main";
import ScrollCategory from "../component/nav/ScrollCategory";
import category from "../lib/matrix/mercadona";
import { useState } from "react";
import CheckCard from "../component/checkcard/CheckCard";
import { useBasketContext } from "./Root";
import Btn from "../component/button/Btn";
import './Picker.css'

export default function Picker() {
  const [stock, setStock] = useState('');
  const { recordBasket, basketRef } = useBasketContext();
  const navigate = useNavigate()
  
  return (
    <>
      <Main>
        <ScrollCategory setStock={setStock} />
        {stock && <Form>
          <menu className="board">
            <li><Btn type="button" mod="gray forward" onClick={() => navigate(-1)} >Atrás</Btn></li>
            <li><Btn type="Button" mod="forward" /></li>
          </menu>
          <ul>
            {category[stock].map((d) => <CheckCard key={d[0]} data={d} onClick={recordBasket} isChecked={basketRef.current.has(d[0])} />)}
          </ul>
        </Form>}
      </Main>
    </>
  )
}