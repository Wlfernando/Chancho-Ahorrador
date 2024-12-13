import { useState } from "react";
import './PunchedCard.css'
import { useBasketContext } from "../../element/Root";
import crossIcon from '/icon_eliminate.png'

export default function PunchedCard({
  product,
  price,
  onChange,
  weakmap,
}) {
  const { recordBill } = useBasketContext();
  const [checked, setChecked] = useState(true);
  const [name, img, alt,,,,, discount] = product;
  const thePrice = price[0] - price[0] * discount

  if (checked) onChange(change => {
    price[1] = thePrice
    return thePrice
  })
  else onChange(change => {
    price[1] = 0
    return thePrice
  })

  return (
    <>
      <li className="punched-card">
        <img src={img} alt={alt} />
        <h3>{name}</h3>
        <p><span className="price" >${thePrice.toFixed(2)}</span></p>
        <p className="discount">+{discount * 100}%</p>
        <input type="checkbox" checked={checked} onChange={() => {
          onChange(change => {
            setChecked(!checked)
            return !change
          })
          }} />
        <button type="button" onClick={() => {
          onChange(change => {
            weakmap.delete(product)
            recordBill(product).delete()
            return !change
          })
        }}><img src={crossIcon} /></button>
      </li>
    </>
  )
}