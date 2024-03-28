import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import styles from './ShopPage.module.css';
import shopCategories from '../../shop-information';

function ShopPage() {
  return (
    <div className={styles.shop}>
      <Header />
      <NavBar />
      {shopCategories.map((category) => (
        <ShopCategory key={category} info={category} />
      ))}
      <Footer />
    </div>
  );
}

export default ShopPage;
