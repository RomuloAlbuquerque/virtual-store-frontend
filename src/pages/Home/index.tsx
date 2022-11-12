import { ReactComponent as MainImage } from 'assets/images/image.svg';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>Conheça o melhor catálogo de produtos</h1>
          <p>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado.
          </p>
          <div className='container-btn'>
            <ButtonIcon text='Inicie sua busca aqui' />
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
