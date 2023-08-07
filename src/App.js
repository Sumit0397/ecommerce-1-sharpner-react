import About from './components/Body/About';
import Footer from './components/Body/Footer';
import Home from './components/Body/Home';
import Header from './components/Header/Header';
import Store from './components/Body/Store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/> 
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
