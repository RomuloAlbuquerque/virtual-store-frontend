import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import { SpringPage } from 'types/vendor/spring';
import { Product } from 'types/product';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/requests';
import LoaderCatalog from './LoaderCatalog';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const params: AxiosParams = {
    //   method: 'GET',
    //   url: `${BASE_URL}/products`,
    //   params: {
    //     page: 0,
    //     size: 12,
    //   },
    // };

    setIsLoading(true);

    //acrescentado//////////////////////////////////////////
    axios({
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
      headers: {
        'ngrok-skip-browser-warning': 'qualquer',
      },
    })
      .then((response) => {
        setPage(response.data);
      }).finally(() => setIsLoading(false));
//////////////////////////////////////////////////////////////


      // axios(params)
      //   .then((response) => {
      //     setPage(response.data);
      //   })
      //.finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de Produtos</h1>
      </div>

      <div className="row">
        {isLoading ? (
          <LoaderCatalog />
        ) : (
          page?.content.map((x) => (
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3" key={x.id}>
              <Link to="/products/1">
                <ProductCard product={x} />
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
