import { useNavigate } from 'react-router-dom';
import style from './index.module.css';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={style.backButton}
        onClick={() => {
          navigate(-1);
        }}>
        返回
      </div>
    </>
  );
};

export default BackButton;
