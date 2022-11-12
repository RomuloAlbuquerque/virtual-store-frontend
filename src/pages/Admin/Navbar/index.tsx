import { NavLink } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
  return (
    <nav className="admin-navbar-content">
      <ul>
        <li>
          <NavLink to="/admin/products" className='admin-link-item'>
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className='admin-link-item'>
            <p>Categorias</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className='admin-link-item'>
            <p>Usuários</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
