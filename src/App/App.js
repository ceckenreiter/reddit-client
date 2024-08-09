import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import ComplaintForm from '../Components/ComplaintForm';
import Message from '../features/message/Message';
import Profile from '../features/profile/Profile';
import Link from '../features/link/Link';
import ClientView from '../Components/ClientView';



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<AppLayout />} >
      <Route path='/' element={<ClientView />}/>
      <Route path='me' element={<Profile />} />
      <Route path='report' element= {<ComplaintForm/>}/>
      <Route path='/posts/:id/:title' element={<Link />} />
    </Route>
    </>
  ))

  return (
    <div id='app'>
    <RouterProvider router = { router }/>
    </div>
  );
}

export default App;

