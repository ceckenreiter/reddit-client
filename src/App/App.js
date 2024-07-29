import '../index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './AppLayout';
import Posts from '../features/posts/Posts'
import ComplaintForm from '../Components/ComplaintForm';
import Message from '../features/message/Message';
import Profile from '../features/profile/Profile';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<AppLayout />} >
      <Route path='/' element={<Posts />} /> 
      <Route path='me' element={<Profile />} />
      <Route path='report' element= {<ComplaintForm/>}/>
      <Route path='posts/:id' element={<Message />} />
    </Route>
    
    
    </>
  ))

  return (
    <RouterProvider router = { router } />
  );
}

export default App;
