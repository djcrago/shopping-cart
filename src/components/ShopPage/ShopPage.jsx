import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './ShopPage.module.css';
import shopCategories from '../../shop-categories';

function ShopPage() {
  return (
    <div className={styles.shop}>
      <Header />
      <NavBar />
      <ShoppingCart />
      {shopCategories.map((category) => (
        <ShopCategory key={category} info={category} />
      ))}
      <Footer />
    </div>
  );
}

export default ShopPage;
