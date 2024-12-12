import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
import { createContext, useContext, useState } from "react";

const BasketContext = createContext({})
export const useBasketContext = () => useContext(BasketContext)

export default function Root() {
  const [retailer, setRetailer] = useState('');

  return (
    <>
      <Header />
      <BasketContext.Provider value={{retailer, setRetailer}}>
        <Outlet />
      </BasketContext.Provider>
    </>
  )
}