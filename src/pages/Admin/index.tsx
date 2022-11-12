import { Categories, Product, Users } from 'components/adminProducts';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/admin/products" element={<Product />} />
        </Routes>

        <Routes>
          <Route path="/admin/categories" element={<Categories />} />
        </Routes>

        <Routes>
          <Route path="/admin/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};
export default Admin;
