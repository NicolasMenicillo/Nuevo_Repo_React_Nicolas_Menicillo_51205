import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ProductsView from './views/ProductsView';
import InformationViews from './views/InformationViews';
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import DetailCar from './views/DetailCar';
import { GeneralProvider } from './componentes/Conteext/GeneralContext';


function App() {

  return (
    <GeneralProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsView />}></Route>
          <Route path="/category/:category" element={<ProductsView />}></Route>
          <Route path="/products/:id" element={<InformationViews />}></Route>
          <Route path="/products/car" element={<DetailCar showDelete />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}

export default App