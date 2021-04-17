import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from './components/AuthForm/AuthForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HousesList from './components/HousesList/HousesList';

function App() {
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  return (
    <div className="app">
      <Header />
      { isAuth ? <HousesList/> : <AuthForm /> }
      <Footer />
    </div>
  );
}

export default App;
