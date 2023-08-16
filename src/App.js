import About from './components/Body/About';
import Footer from './components/Body/Footer';
import Home from './components/Body/Home';
import Header from './components/Header/Header';
import Store from './components/Body/Store';
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Contact from './components/Body/Contact';
import SingleProduct from './components/Body/SingleProduct';
import { useContext, useState } from 'react';
import Login from './components/Login/Login';
import AuthContext from './context/auth-context';


function App() {

  const authCtx = useContext(AuthContext);
  const [cartShow , setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(true);
  }

  const hideCart = () => {
    setCartShow(false);
  }

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
        <Header onShowCart={showCart}/>
        {cartShow && <Cart onHideCart={hideCart}/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={authCtx.isLoggedin ? <Store/> : <Navigate to="/login"/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact onSubmit={addDataHandler}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/singleProduct/:id" element={<SingleProduct/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
