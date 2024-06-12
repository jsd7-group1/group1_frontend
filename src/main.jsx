import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartPage from './pages/CartPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';





const Main = () => {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider
          router={createBrowserRouter([
            {
              path:"/",
              element:<App /> //Test router just for a dev , this one should be home page 
            },
            {
              path:"/home",
              element:<></>
            },
            {
              path:"/login",
              element:<></>
            },
            {
              path:"/register",
              element:<></>
            },
            {
              path:"/allProduct",
              element:<></>
            },
            {
              path:"/cart",
              element:<CartPage/>
            },
            {
              path:"/payment",
              element:<PaymentPage />
            }
          ])}/>
      </React.StrictMode>,
    </div>
  )
}

export default Main

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

