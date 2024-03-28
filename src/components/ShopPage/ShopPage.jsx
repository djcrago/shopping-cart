import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import styles from './ShopPage.module.css';

function ShopPage() {
  return (
    <div className={styles.shop}>
      <Header />
      <NavBar />
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
