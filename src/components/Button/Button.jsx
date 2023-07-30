import { Dna } from 'react-loader-spinner';
import s from './Button.module.css';

const Button = ({ onClick, isLoading }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      {isLoading ? '' : 'Load more'}
    </button>
  );
};

export default Button;
