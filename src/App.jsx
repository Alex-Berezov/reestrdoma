import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage';
import HousesListPage from './pages/HousesListPage';

function App() {
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  return (
    <div className="app">
      <Header />
      { isAuth ? <HousesListPage /> : <AuthPage /> }
      <Footer />
    </div>
  );
}

export default App;
