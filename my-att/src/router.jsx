import { createBrowserRouter } from "react-router-dom";
import Layout from './component/layout/Layout';
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import Header from "./component/header/Header";

export const myRouter = createBrowserRouter([
     {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'cartpage',
                element: <Cart/>
            },
       
         ]
      }
   ]
)