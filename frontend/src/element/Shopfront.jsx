import { Outlet } from "react-router-dom";
import Main from "../component/main/Main";
import Showcase from "../component/showcase/Showcase";
import { lastStock, trendStock } from "../lib/matrix/mercadona";

export default function Shopfront() {
  return (
    <>
      <Main>
        <Outlet />
        <Showcase title="Productos Tendencia" articles={trendStock} />
        <Showcase title="Últimas unidades" articles={lastStock} />
      </Main>
    </>
  )
}