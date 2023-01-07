
import React from 'react'
import Caroussel from './Components/caroussel/Caroussel';
import Destination from './Components/Destination/Destination';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Select from './Components/select/Select';

function App() {
  return (
    <div>
        < Navbar />
        < Hero />
        < Destination />
        < Search />
        < Select />
        <Caroussel />
        <Footer />
    </div>
  );
}

export default App;
