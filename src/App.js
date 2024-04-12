

import './App.css';
import { Header } from './comonents/header';
import { Home } from './pages/home';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Table } from './pages/table';
import { Footer } from './comonents/footer';
import { More } from './pages/more';


function App() {
  return (
    <div className='px-4 flex flex-col '>
      <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/details/:contactId" element={<More />}></Route>
         
        </Routes>
      </BrowserRouter>
      </div>
     
      <Footer/>
    </div>




  );
}

export default App;

