import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'

type Props = {
  text:string
}

const ButtonIcon = ({text}:Props) => {
  return (
    <button className="btn btn-primary btn-icon">
        <div className='content-text'>
        <h6>{text}</h6>
        </div>
      <div className="arrow">
        <ArrowIcon />
      </div>
    </button>
  );
};

export default ButtonIcon;
