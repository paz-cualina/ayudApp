import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Banner from '../src/Components/Banner/Banner';
import FiltersBar from './Components/FiltersBar/FiltersBar';
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailsContainer from './Pages/ItemDetailsContainer';
import NavBar from './Components/NavBar/NavBar';
import logoAyudapp from './assets/img/logoAyudapp.png';
import './App.css';


function App() {
  return (
    <div className='topWrapper'>
      <section className="content">

        <BrowserRouter>
          <Link to='/'>
            <img src={logoAyudapp} className="logo" />
          </Link>
        
          <NavBar />
          <Banner />
          <FiltersBar />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailsContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='*' element={<div><h1>Esta página no existe</h1></div>} />

          </Routes>

        </BrowserRouter>

      </section>
    </div>
  )
}

export default App;