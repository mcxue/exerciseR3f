import { Outlet } from 'react-router-dom';
import BackButton from '../../../components/backButton';

const Root = () => {
  return (
    <div>
      <Outlet />
      <BackButton />
    </div>
  );
};

export default Root;
