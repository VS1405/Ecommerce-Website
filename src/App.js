import React, { useContext } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import CartProvider from './Store/CartProvider';
import MainPage from './Comp/Layouts/MainPage';
import StorePage from './Pages/Store/StorePage';
import AboutPage from './Pages/About/AboutPage';
import Contact from './Pages/ContactPage/Contact';
import AuthPage from './Pages/Login/AuthPage'
import AuthContect from './Pages/Login/store/auth-context';


function App() {

  const AuthCtx = useContext(AuthContect)

  return (
    <CartProvider>
    <Routes>
      <Route path={'/'} element= {<MainPage />} exact></Route>
      <Route path={'/About'} element= {<AboutPage />} ></Route>
      <Route path={'/Login'} element={<AuthPage />}  ></Route>
      <Route path={'/Contact'} element = {<Contact />} > </Route>
      {!AuthCtx.isLoggedIn && <Route path='/Login' element= {<AuthPage />} ></Route> }
      {AuthCtx.isLoggedIn && <Route path='/Login/product' element= {<StorePage />} exact ></Route> }
      <Route path='*' element={<Navigate to={'/'} exact/>}/>  
      {/* Navigate used when the path of url wrong that time home page will re-render  */}
    </Routes>
    </CartProvider>
  );
}

export default App;
