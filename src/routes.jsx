import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ShopPage from './components/ShopPage/ShopPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <ShopPage />,
  },
];

export default routes;
