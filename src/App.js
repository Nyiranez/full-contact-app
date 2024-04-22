

import './App.css';
import { Header } from './comonents/header';
import { Home } from './pages/home';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Table } from './pages/table';
import { Footer } from './comonents/footer';
import { More } from './pages/more';
import { Update } from './pages/update';
import { Login } from './pages/login';
import { SingUp } from './pages/signup';


function App() {
  return (
    <div className='px-4 flex flex-col '>
      <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SingUp />}></Route>
          <Route path="/Table" element={<Table />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/update/:contId" element={<Update />}></Route>
          <Route path="/details/:contactId" element={<More />}></Route>
         
        </Routes>
      </BrowserRouter>
      </div>
     
      <Footer/>
    </div>




  );
}

export default App;

