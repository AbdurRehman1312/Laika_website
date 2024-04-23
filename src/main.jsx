import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx';
import Layout from '../Layout.jsx';
import './index.css';
import Airdrop from './components/Airdrop.jsx';
import Waitlist from './components/Waitlist.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path= "" element={<Home />}/>
        <Route path= "/sputnik" element={<Airdrop />}/>
        <Route path= "waitlist" element={<Waitlist />}/>
    </Route>
  )
);

// Wrap your application with HelmetProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  </React.StrictMode>,
);
