// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './App.css'

// R O U T E R
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// L A Y O U T
import RootLayout from './layouts/RootLayout';
import MainLayout from './layouts/MainLayout';

//LOGIN
import Login from './auth/login/Login';
import ForgotPassword from './auth/forgot-password/ForgotPassword';
import Error404 from './views/Error404';
import Home from './views/Home';
import FormBasicPage from './pages/form-basic/FormBasicPage';
import StyleGuide from './views/StyleGuide';
import FormAdvancedPage from './pages/form-advance/FormAdvancedPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout showNavbar={false} showFooter={false} /> }>
      <Route index element={ <Login /> } />
      <Route path='forgot-password' element={ <ForgotPassword />} />

      <Route path='main' element={ <MainLayout showNavbar={true} showFooter={true} /> }>
        <Route index element={ <Home /> } />

        <Route path='styleguide' element={ <StyleGuide /> } />
        <Route path='form-basic' element={ <FormBasicPage /> } />
        <Route path='form-advanced' element={ <FormAdvancedPage /> } />
      </Route>
      
      <Route path='*' element={ <Error404 /> } />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
library.add(fab, fas, far)