import { useContext } from 'react';
import AuthForm from './Auth/AuthForm';
import HeaderPage from '../UIPage/HeaderPage';
import AuthContect from './store/auth-context';
import { Routes, Route } from 'react-router-dom';
import ProductPage from '../ProductsPage/ProductPage';


const AuthPage = () => {


  return <section>
    <HeaderPage />
    <AuthForm />
   
  </section>;
};

export default AuthPage;
