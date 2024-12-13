import { useRef, useState } from "react";
import Main from "../component/main/Main";
import Select from "../component/Select/Select";
import { retailerLogo } from "../lib/const";
import { useBasketContext } from "./Root";
import PunchedCard from "../component/checkcard/PunchedCard";
import './Basket.css'

const walmart = 'walmart';
const integer = [-.05, -.04, -.03, -.02, -.01, .01, .02, .03, .04, .05];
const randomPrice = (value) => value * integer[Math.floor(Math.random() * 10)] + value

export default function Basket() {
  const { retailer, setRetailer, billRef } = useBasketContext();
  const retailerListRef = useRef((function() {
    const list = {}
    list[retailer] = new Map()
    billRef.current.forEach(value => list[retailer].set(value, [value[4]]))
    return list
  })());
  const [, setIsChange] = useState(false);

  if (!Object.hasOwn(retailerListRef.current, retailer)) {
    const list = retailerListRef.current
    list[retailer] = new Map()
    billRef.current.forEach((value) => {
      list[retailer].set(value, [randomPrice(value[4])])
    })
  }

  const renderedList = Array.from(billRef.current.values())
  .map(product => {
    const weakmap = retailerListRef.current[retailer]
    const price = weakmap.get(product)

    return <PunchedCard key={product[0]} product={product} price={price} onChange={setIsChange} weakmap={weakmap} />
  })

  const total = Array.from(retailerListRef.current[retailer].values()).reduce((t, n) => t + n[1], 0) || 0

  return (
    <>
      <Main >
        <section className="select-retailer">
          <hgroup>
            <h1>Tus items y el total</h1>
            <p>Estos son los items que elegiste según el supermercado, puedes comparar con otro super y/o quitar items</p>
          </hgroup>
          <div>
            <img src={retailerLogo[retailer || walmart]} alt="retailer's logo" />
            <Select
              options={[walmart, 'mercadona', 'carrefour', 'coto']}
              name={'retailer'} leyend={retailer || walmart}
              onChange={(value) => setRetailer(value)}
            />
          </div>
        </section>
        <section>
          <ul>
            {renderedList}
          </ul>
        </section>
        <aside className="total">
          <p>Total:</p>
          <p>{total.toFixed(2)}</p>
        </aside>
      </Main>
    </>
  )
}