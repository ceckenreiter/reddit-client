import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import ComplaintForm from '../Components/ComplaintForm';
import Message from '../features/message/Message';
import Profile from '../features/profile/Profile';
import Link from '../features/link/Link';
import ClientView from '../Components/ClientView';
import Comment from '../features/comment/Comment';



function App() {

  const [token, setToken] = useState('')

    useEffect(() => {
      const hash = window.location.hash
      let value = window.localStorage.getItem('token')

      if (!value && hash) { //checks if we get a access token//
          var blank = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          window.location.hash=""
          window.localStorage.setItem('token', blank) 
      }
      setToken(window.localStorage.getItem("token")) //if so we extract the token part and set our token -- must be after if statement otherwise token is never set
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<AppLayout />} >
      <Route path='/' element={<ClientView />}/>
      <Route path='me' element={<Profile />} />
      <Route path='report' element= {<ComplaintForm/>}/>
      <Route path='posts/:type/:id' element={<Link />} />
      <Route path='posts/:type/:id' element={<Message />} />
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

