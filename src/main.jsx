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
import NavBar from './components/Navbar.jsx';





const Main = () => {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider
          router={createBrowserRouter([
            {
              path:"/",
              element:<NavBar />, //Test router just for a dev , this one should be home page 
              children:[{
                path:"/",
                element:<App />
              }]
            },
            {
              path:"/home",
              element:<NavBar />,
              children:[{
                path:"",
                element:<></>
              }]
            },
            {
              path:"/login",
              element:<NavBar />,
              children:[{
                path:"",
                element:<></>
              }]
            },
            {
              path:"/register",
              element:<NavBar />,
              children:[{
                path:"",
                element:<></>
              }]
            },
            {
              path:"/allProduct",
              element:<NavBar />,
              children:[{
                path:"",
                element:<></>
              }]
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

