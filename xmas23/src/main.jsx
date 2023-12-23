import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Match4 from './Match4.jsx'
import Stackandqueue from './Stackandqueue.jsx'
import Math12 from './Math12.jsx'
import Carols from './Carols.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Carols />
  },
  {
    path: "/carols",
    element: <Carols />
  },
  {
    path: "/match4",
    element: <Match4 />
  },
  {
    path: "/sq",
    element: <Stackandqueue />
  },
  {
    path: "/math12",
    element: <Math12 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
