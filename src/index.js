import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionList from './Components/Questions/QuestionList/QuestionList';
import QuestionShow from './Components/Questions/QuestionShow/QuestionShow';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/questions",
    element: <QuestionList />,
  },
  {
    path: "/questions/:id",
    element: <QuestionShow />,
  },
]);



root.render(
  <RouterProvider router={router} />
);
