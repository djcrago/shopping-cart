import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ShopPage from './components/ShopPage/ShopPage';

const routes = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
    ],
  },
];

export default routes;
