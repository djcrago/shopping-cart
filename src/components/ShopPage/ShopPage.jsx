import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './ShopPage.module.css';

function ShopPage() {
  return (
    <div className={styles.shop}>
      <Header />
      <NavBar />
      <ShoppingCart />
      <ShopCategory />
      <ShopCategory />
      <ShopCategory />
      <ShopCategory />
      <ShopCategory />
      <Footer />
    </div>
  );
}

export default ShopPage;
