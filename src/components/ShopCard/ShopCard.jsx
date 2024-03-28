import styles from './ShopCard.module.css';

function ShopCard({ info }) {
  return (
    <div className={styles.card}>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <p>{info.price}</p>
    </div>
  );
}

export default ShopCard;
