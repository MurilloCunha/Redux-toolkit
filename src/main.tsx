import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/global.css'
import { RouterProvider } from 'react-router-dom'
import router from '../routes';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { rickAndMortyAPI } from './APIs';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={rickAndMortyAPI}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>,
)
