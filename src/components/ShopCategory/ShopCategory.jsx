import ShopCard from '../ShopCard/ShopCard';
import styles from './ShopCategory.module.css';

function ShopCategory() {
  return (
    <div className={styles.category}>
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
}

export default ShopCategory;
