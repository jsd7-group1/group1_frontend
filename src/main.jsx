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
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AllproductPage from './pages/AllproductPage.jsx';
import HomePage from './pages/HomePage.jsx';





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
              element:<HomePage />
            },
            {
              path:"/login",
              element:<LoginPage />
            },
            {
              path:"/register",
              element:<RegisterPage />
            },
            {
              path:"/allProduct",
              element:<AllproductPage />
            },
            {
              path:"/cart",
              element:<NavBar/>,
              children:[{
                path:"",
                element:<CartPage />
              }]
            },
            {
              path:"/payment",
              element:<NavBar />,
              children:[{
                path:"",
                element:<PaymentPage />
              }]
            }
          ])}/>
      </React.StrictMode>,
    </div>
  )
}

export default Main

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

