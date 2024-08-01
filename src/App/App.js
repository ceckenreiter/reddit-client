import '../index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './AppLayout';
import ComplaintForm from '../Components/ComplaintForm';
import Message from '../features/message/Message';
import Profile from '../features/profile/Profile';
import Link from '../features/link/Link';
import ClientView from '../Components/ClientView';
import Comment from '../features/comment/Comment';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<AppLayout />} >
      <Route path='/' element={<ClientView />}/>
      <Route path='me' element={<Profile />} />
      <Route path='report' element= {<ComplaintForm/>}/>
      <Route path='posts/:type/:id' element={<Link />} />
      <Route path='posts/:type/:id' element={<Message />} />
      <Route path='/posts/:type/:id/:commentid' element={<Comment />} />
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
