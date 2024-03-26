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
import BookDetails from './components/BookDetails';
import Page404 from './Page/Page404';
import Reviews from './Page/Reviews';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout> ,
    errorElement:<Page404></Page404>,
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
      {
        path:'/bookDetails/:boodID',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/fackData.json')
      },
      {
        path:'/reviews',
        element:<Reviews></Reviews>,
        loader:()=>fetch('/fackData.json')
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
