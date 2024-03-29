import ShopCard from '../ShopCard/ShopCard';
import styles from './ShopCategory.module.css';

function ShopCategory({ info, cartItems, setCartItems }) {
  return (
    <div className={styles.category}>
      <h2>{info.title}</h2>
      {info.cards.map((card) => (
        <ShopCard
          key={card.title}
          info={card}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default ShopCategory;
