import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from '../src/Components/Banner/Banner';
import FiltersBar from './Components/FiltersBar/FiltersBar';
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailsContainer from './Pages/ItemDetailsContainer';
import NavBar from './Components/NavBar/NavBar';
import CartProvider from './context/CartProvider';
import Cart from './Pages/Cart';
import './App.css';


function App() {
  return (
    <div className='mainWrapper'>

        <BrowserRouter>
          <CartProvider>

            <NavBar />
            
            <section className="content">
              <Banner />
              <FiltersBar />

              <Routes>

                <Route path='/' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailsContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<div><h1>Esta página no existe</h1></div>} />

              </Routes>
            </section>

          </CartProvider>
        </BrowserRouter>

    </div>
  )
}

export default App;