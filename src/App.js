import NavBar from './Components/NavBar/NavBar.js';
import FiltersBar from './Components/FiltersBar/FiltersBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import Banner from './Components/Banner/Banner.js';
import logoAyudapp from './assets/img/logoAyudapp.png';
import './App.css';


function App() {
  return (
    
    <>
    <img src={logoAyudapp} className="logo" /><NavBar />

    <section className="wrapper">

      <Banner />
      <FiltersBar />
      <ItemListContainer greeting={"Bienvenido/a a AyudApp"} />

    </section>
    </>

  );
}

export default App;