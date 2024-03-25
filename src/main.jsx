import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Page/Home';
import ListedBook from './Page/ListedBook';
import PagesToRead from './Page/PagesToRead';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
