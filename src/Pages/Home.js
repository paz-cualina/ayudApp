import Banner from './../Components/Banner/Banner.js';
import FiltersBar from './../Components/FiltersBar/FiltersBar.js';
import ItemCount from './../Components/ItemCount/ItemCount.js';

const Home = () => {
  return (

    <div className='home'>

        <section className="wrapper">

            <Banner />
            <FiltersBar />
                
            <ItemCount />

        </section>
            
    </div>
    
  )
}

export default Home

