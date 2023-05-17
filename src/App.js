import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ProductsView from './views/ProductsView';
import InformationViews from './views/InformationViews';
import "./App.css";
import { useState } from 'react';
import GeneralContext from './componentes/Conteext/GeneralContext';
import DetailCar from './views/DetailCar';


function App() {

  const [car, setCar] = useState([]);

  const addToCar = (item) => {
    setCar([...car, item]);
  };

  const removeToCar = (item) => {
    const newArray = car.filter(_item => item.id !== _item.id);
    setCar(newArray)
  };

  const cleanCar = () =>{
    setCar([]);
  };

  return (
    <GeneralContext.Provider value={{ addToCar, car, removeToCar, cleanCar }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsView />}></Route>
          <Route path="/category/:category" element={<ProductsView />}></Route>
          <Route path="/products/:id" element={<InformationViews />}></Route>
          <Route path="/products/car" element={<DetailCar />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App