import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ShopPage from './components/ShopPage/ShopPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

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
  {
    path: 'cart',
    element: <ShoppingCart />,
  },
];

export default routes;
