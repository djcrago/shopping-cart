import styles from './ShopCard.module.css';

function ShopCard({ info, totalCount, setTotalCount }) {
  function handleClick(event) {
    event.preventDefault();

    const newCount = totalCount + 1;

    setTotalCount(newCount);
  }

  return (
    <div className={styles.card}>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <p>{info.price}</p>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default ShopCard;
