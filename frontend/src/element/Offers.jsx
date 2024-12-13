import Main from "../component/main/Main";
import Priority from "../component/section/Priority";
import { retailerLogo } from "../lib/const";
import { useBasketContext } from "./Root";
import './Offers.css'
import Select from "../component/Select/Select";
import Sheet from "../component/sheet/Sheet";
import IconCurrency from "../component/icon-currency/IconCurrency";
import Showcase from "../component/showcase/Showcase";

export default function Offers() {
  const { retailer, setRetailer, budgetRef, basketRef } = useBasketContext();
  const list = []
  let i = 0
  basketRef.current.forEach((value) => i++ % 2 === 0 && list.push(value))

  return (
    <>
      <Main>
        <Priority title="Ahorra como un Campeón">
          <p>A continuación te presentamos las mejores afertas según los datos que ingresaste.</p>
        </Priority>
        <section className="resume" >
          <img src={retailerLogo[retailer]} alt="retailer's logo" />
          <Sheet className="blue big" title='Category' />
          <Sheet className="green big bigger-text" title="Monto Ingresado" text={<IconCurrency money={budgetRef.current.toFixed(2)} />} />
          <Select
            options={['walmart', 'mercadona', 'carrefour', 'coto']}
            name={'retailer'} leyend={retailer}
            onChange={(value) => setRetailer(value)}
          />
        </section>
        <Showcase title="Tenemos estas ofertas para ti" articles={list} promo />
      </Main>
    </>
  )
}