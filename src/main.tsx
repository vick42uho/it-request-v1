import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test3d from './Test3d.tsx';
import FormRequest from './components/FormRequest.tsx';
import FormITAdmin from './components/FormITAdmin.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test3d",
    element: <Test3d />,
  },
  {
    path: "/it-request",
    element: <FormRequest />,
  },
  {
    path: "/it-admin",
    element: <FormITAdmin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
