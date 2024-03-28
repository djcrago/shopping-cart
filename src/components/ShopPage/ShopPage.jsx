import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ShopCategory from '../ShopCategory/ShopCategory';
import styles from './ShopPage.module.css';
import shopCategories from '../../shop-information';
import { useState } from 'react';

function ShopPage() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div className={styles.shop}>
      <Header />
      <NavBar totalCount={totalCount} />
      {shopCategories.map((category) => (
        <ShopCategory
          key={category}
          info={category}
          totalCount={totalCount}
          setTotalCount={setTotalCount}
        />
      ))}
      <Footer />
    </div>
  );
}

export default ShopPage;
