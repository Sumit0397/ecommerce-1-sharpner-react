import About from './components/Body/About';
import Footer from './components/Body/Footer';
import Home from './components/Body/Home';
import Header from './components/Header/Header';
import Store from './components/Body/Store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Contact from './components/Body/Contact';


function App() {

  const addDataHandler = async (data) => {
    const response = await fetch("https://ecommerce-sharpener-6d324-default-rtdb.firebaseio.com/userdata.json" , {
      method : 'POST',
      body : JSON.stringify(data),
      headers : {
        "Content-Type": "application/json"
      }
    })
    const getData = await response.json();
    console.log(getData);
  }

  return (
    <BrowserRouter>
        <Header />
        <Cart/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact onSubmit={addDataHandler}/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
