import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/reset.css'
import './css/style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  // loader as rootLoader,
  // action as rootAction,
} from "./routes/root";
import ErrorPage from '../error-page';
import Edit from './routes/edit';
import Explore from './routes/explore';
import MyArtworks from './routes/my-artworks';
import Liked from './routes/liked';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Explore /> },
          {
            path: "new",
            element: <Edit />,
            // loader: ,
            // action: ,
          },
          {
            path: "my-artworks",
            element: <MyArtworks />,
            // loader: ,
            // action: ,
          },
          {
            path: "liked",
            element: <Liked />,
            // loader: ,
            // action: ,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
