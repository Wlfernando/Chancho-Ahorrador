import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
import { createContext, useContext, useRef, useState } from "react";

const BasketContext = createContext({});
export const useBasketContext = () => useContext(BasketContext);

const setProduct = (p, discount = Math.ceil(Math.random() * 10) / 100) => [...p, Math.random() < .65, discount];

export default function Root() {
  const [retailer, setRetailer] = useState('');
  const basketRef = useRef(new Map());
  const billRef = useRef(new Map());
  const budgetRef = useRef(0);
  
  function recordBasket(check, product) {
    const basket = basketRef.current;

    check ? 
      basket.set(product[0], setProduct(product)) :
      basket.delete(product[0]);
  }

  function recordBill(product) {
    const bill = billRef.current;
    
    return {
      delete: () => bill.delete(product[0]),
      set: (d) => bill.set(product[0], setProduct(product, d)),
    }
  }

  return (
    <>
      <Header />
      <BasketContext.Provider value={{retailer, setRetailer, recordBasket, basketRef, budgetRef, billRef, recordBill}}>
        <Outlet />
      </BasketContext.Provider>
    </>
  )
}