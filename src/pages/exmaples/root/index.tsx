import { Outlet } from 'react-router-dom';
import BackButton from '../../../components/backButton';

const Root = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Outlet />
      <BackButton />
    </div>
  );
};

export default Root;
