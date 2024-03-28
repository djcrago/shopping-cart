import ShopCard from '../ShopCard/ShopCard';
import styles from './ShopCategory.module.css';

function ShopCategory({ info }) {
  return (
    <div className={styles.category}>
      <h2>{info.title}</h2>
      {info.cards.map((card) => (
        <ShopCard key={card} info={card} />
      ))}
    </div>
  );
}

export default ShopCategory;
