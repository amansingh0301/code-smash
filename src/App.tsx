
import { Provider } from 'react-redux';
import { store } from './store/index';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContestPage, FormPage, HomePage, LobbyPage, ResultPage } from './lib/pages';
import { Header, ProtectedRoute } from './lib/components';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/form' element={<FormPage/>}/>
          <Route path='/result' element={<ProtectedRoute><ResultPage/></ProtectedRoute>}/>
          <Route path='/Contest' element={<ProtectedRoute><ContestPage/></ProtectedRoute>}/>
          <Route path='/lobby' element={<ProtectedRoute><LobbyPage/></ProtectedRoute>}/>
        </Routes>
        {/* <Footer/> */}
        <div className='background_image'></div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
