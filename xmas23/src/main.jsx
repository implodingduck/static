import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Match4 from './Match4.jsx'
import Stackandqueue from './Stackandqueue.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/match4",
    element: <Match4 />
  },
  {
    path: "/sq",
    element: <Stackandqueue />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
