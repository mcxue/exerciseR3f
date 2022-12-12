import { Link } from 'react-router-dom';
import routes from '../../router/routes';
import { RouteObject } from 'react-router';

const formatToPath = (str: string) => {
  return /^\/.?/.test(str) ? str : `/${str}`;
};

const formatRoutesToLinkInfos = (routes: RouteObject[]) => {
  const linkInfos: { label: string, value: string }[] = [];
  const formatFn = (routes: RouteObject[], lastPath?: string) => {
    routes.forEach(route => {
      if (!route.children) {
        linkInfos.push({
          label: (lastPath ? lastPath : '') + formatToPath(route.path || ''),
          value: (lastPath ? lastPath : '') + formatToPath(route.path || ''),
        });
      } else {
        formatFn(route.children, formatToPath(route.path || ''));
      }
    });
  };
  formatFn(routes);
  return linkInfos;
};

const Home = () => {
  const linkInfos = formatRoutesToLinkInfos(routes);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: '50px',
      width: '100%',
      height: '500px',
    }}>
      <ul>
        {
          linkInfos.map(linkInfo => (
            <li key={linkInfo.value}><Link to={linkInfo.value}>{linkInfo.label}</Link></li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
