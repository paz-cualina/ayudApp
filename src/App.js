// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from '../src/Components/Banner/Banner';
import FiltersBar from './Components/FiltersBar/FiltersBar';
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailsContainer from './Pages/ItemDetailsContainer';
import NavBar from './Components/NavBar/NavBar';
import logoAyudapp from './assets/img/logoAyudapp.png';
import './App.css';


function App() {
  return (

  <section className="wrapper">
    <img src={logoAyudapp} className="logo" />

    <Banner />
    <FiltersBar />
    <ItemListContainer />

  </section>

    // <BrowserRouter>
    
    //   <img src={logoAyudapp} className="logo" />
    //   <NavBar />
    //   <Home />
    //   <ItemListContainer />

    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/' element={<ItemListContainer />} />
    //     <Route path='/category/:categoryId' element={<ItemListContainer greeting={ItemList} />} />
    //     <Route path='/item:id' element={<ItemDetailsContainer />} />
    //   </Routes>

    // </BrowserRouter>

  )
}

export default App;