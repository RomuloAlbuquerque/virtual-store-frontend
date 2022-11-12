import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import Navbar from 'components/Navbar';
import ProductDetails from 'components/ProductDetails';

const MyRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Routes>
      <Route path="/products" element={<Catalog />} />
    </Routes>

    <Routes>
      <Route path="/products/:productid" element={<ProductDetails />} />
    </Routes>

    <Routes>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
