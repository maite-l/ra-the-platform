import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/reset.css'
import './css/style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from '../error-page';
import New, { action as newAction } from './routes/new';
import { action as deleteAction } from './routes/delete';
import Explore, { loader as exploreLoader } from './routes/explore';
import MyArtworks, { loader as myArtworksLoader } from './routes/my-artworks';
import Detail, { loader as detailLoader } from './routes/detail';
import Liked from './routes/liked';
import Img, { loader as imgLoader } from './routes/img';
import Login, { action as logInAction } from './routes/login';
import { action as logOutAction } from './routes/logout';
import Register, { action as registerAction } from './routes/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Explore />,
            loader: exploreLoader
          },
          {
            path: "new",
            element: <New />,
            action: newAction,
          },
          {
            path: "artwork/:id",
            element: <Detail />,
            loader: detailLoader,
            // action: ,
          },
          {
            path: "artwork/:id/delete",
            action: deleteAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "my-artworks",
            element: <MyArtworks />,
            loader: myArtworksLoader,
          },
          {
            path: "liked",
            element: <Liked />,
            // loader: ,
          },
          {
            path: "logout",
            action: logOutAction,
          }
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/img/:id",
    element: <Img />,
    loader: imgLoader,
  },
  {
    path: "login",
    element: <Login />,
    action: logInAction,
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
