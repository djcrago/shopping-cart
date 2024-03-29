import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import styles from './ShopPage.module.css';
import shopCategories from '../../shop-information';
import { useState } from 'react';

function ShopPage() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={styles.shop}>
      <Header />
      <NavBar cartItemsLength={cartItems.length} />
      {shopCategories.map((category) => (
        <ShopCategory
          key={category.title}
          info={category}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
      <Footer />
    </div>
  );
}

export default ShopPage;
