
import { useEffect } from 'react';
import {BrowserRouter, Route, Routes,useLocation} from 'react-router-dom';
import {Home, Navbar, Checkout,ItemDetails, Confermation, Footer} from './scenes'
import CartMenu from './scenes/global/CartMenu';

const ScrollToTop = () => {
  
  const {pathname} = useLocation();
 
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <ScrollToTop/>
         <Routes>
           <Route path='/' element={<Home/>}/> 
           <Route path='item/:itemId' element={<ItemDetails/>}/> 
           <Route path='checkout' element={<Checkout/>}/> 
            <Route path='checkout/success' element={<Confermation/>}/> 
         </Routes>
         <CartMenu/>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
