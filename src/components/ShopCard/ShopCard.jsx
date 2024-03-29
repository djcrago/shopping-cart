import styles from './ShopCard.module.css';

function ShopCard({ info, cartItems, setCartItems }) {
  function handleClick(event) {
    console.log(cartItems);

    if (event.target.textContent === '-') {
      const newCartItems = [...cartItems];
      const index = newCartItems.indexOf(info.title);
      if (index !== -1) {
        newCartItems.splice(index, 1);
      }
      setCartItems(newCartItems);
    }

    if (event.target.textContent === '+') {
      setCartItems([...cartItems, info.title]);
    }
  }

  return (
    <div className={styles.card}>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <p>{info.price}</p>
      <button type="button" onClick={handleClick}>
        -
      </button>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default ShopCard;
