
import { Provider } from 'react-redux';
import { store } from './store/index';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contest, Home, Lobby } from './lib/pages';
import { Footer, Header, ProtectedRoute } from './lib/components';

function App() {
  const currentPath = window.location.pathname;
  return (
    <Provider store = {store}>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lobby' element={<ProtectedRoute><Lobby/></ProtectedRoute>}/>
          <Route path='/Contest' element={<ProtectedRoute><Contest/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Provider>
  );
}

export default App;
