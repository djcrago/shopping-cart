import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import styles from './ShopPage.module.css';
import { useEffect, useState } from 'react';

function useShopInfo() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setCategories(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { categories, products, error, loading };
}

function ShopPage() {
  const [cartItems, setCartItems] = useState([]);
  const { categories, products, error, loading } = useShopInfo();

  if (error) console.error(error);

  if (loading)
    return (
      <div className={styles.shop}>
        <Header />
        <NavBar cartItemsLength={cartItems.length} />
        <h2>One moment please</h2>
        <Footer />
      </div>
    );

  return (
    <div className={styles.shop}>
      <Header />
      <NavBar cartItemsLength={cartItems.length} />
      {categories &&
        products &&
        categories.map((category) => (
          <ShopCategory
            key={category}
            info={{ category, products }}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      <Footer />
    </div>
  );
}

export default ShopPage;
