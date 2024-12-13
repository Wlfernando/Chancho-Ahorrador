import './App.css'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Root from './element/Root'
import Shopfront from './element/Shopfront';
import Amount from './component/amount/Amount';
import Nav from './component/nav/Nav';
import Picker from './element/Picker';
import Offers from './element/Offers';
import Home from './element/Home';
import Basket from './element/Basket';

const basketPage = {
  path: 'basket',
  element: <Basket />,
}

const offers = {
  path: 'offers',
  element: <Offers />
}

const retailerPath = {
  path: 'compilation/:retailer',
  element: <Picker />,
};

const budget = {
  path: 'budget',
  Component: Amount,
};

const retailer = {
  path: 'retailer',
  Component: Nav,
}

const board = {
  path: 'board',
  element: <Shopfront />,
  children: [budget, retailer],
};

const main = {
  index: true,
  element: <Home />
}

const root = {
  path: '/',
  element: <Root />,
  children: [main, board, retailerPath, offers, basketPage],
};

const router = createBrowserRouter([root]);

function App() {
  return <RouterProvider router={router} />
}

export default App
