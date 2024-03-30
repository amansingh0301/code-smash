
import { Provider } from 'react-redux';
import { store } from './store/index';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contest, Home, Result } from './lib/pages';
import { Footer, Header, ProtectedRoute } from './lib/components';

function App() {
  const currentPath = window.location.pathname;
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<ProtectedRoute><Result/></ProtectedRoute>}/>
          <Route path='/Contest' element={<ProtectedRoute><Contest/></ProtectedRoute>}/>
        </Routes>
        {/* <Footer/> */}
        <div className='background_image'></div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
