import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/reset.css'
import './css/style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  // loader as rootLoader,
  // action as rootAction,
} from "./routes/root";
import Edit from './routes/edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Edit /> },
          // {
          //   path: "contacts/:contactId",
          //   element: <Contact />,
          //   loader: contactLoader,
          //   action: contactAction,
          // },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
