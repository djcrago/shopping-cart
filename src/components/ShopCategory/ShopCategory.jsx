import ShopCard from '../ShopCard/ShopCard';
import styles from './ShopCategory.module.css';

function ShopCategory({ info, totalCount, setTotalCount }) {
  return (
    <div className={styles.category}>
      <h2>{info.title}</h2>
      {info.cards.map((card) => (
        <ShopCard
          key={card}
          info={card}
          totalCount={totalCount}
          setTotalCount={setTotalCount}
        />
      ))}
    </div>
  );
}

export default ShopCategory;
