import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthPorvider from './provider/AuthPorvider'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPorvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router}>
            </RouterProvider>
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthPorvider>
  </React.StrictMode>,
)
