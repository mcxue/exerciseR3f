import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { data: any, statusText: string; status: string };
  console.log(error);
  return (
    <div id="error-page" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '500px',
    }}>
      <h1>哦吼!</h1>
      <p>你访问的页面不存在</p>
      <p>
        <i>{`${error.status} ${error.statusText}`}</i>
      </p>
      <p>{error.data}</p>
    </div>
  );
};

export default ErrorPage;
