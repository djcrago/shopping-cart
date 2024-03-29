import { useState } from 'react';
import styles from './ShopCard.module.css';
import numberOfValues from '../../numberOfValues';

function ShopCard({ info, cartItems, setCartItems }) {
  const [inputValue, setInputValue] = useState(0);

  function handleChange(event) {
    const cartItemsCopy = [...cartItems];
    const previousNumberOfItems = numberOfValues(cartItemsCopy, info.title);

    if (event.target.type === 'number') {
      const newNumberOfItems = +event.target.value;

      if (newNumberOfItems >= 0) {
        setInputValue(newNumberOfItems);
      }

      if (previousNumberOfItems < newNumberOfItems) {
        for (let i = previousNumberOfItems; i < newNumberOfItems; i += 1) {
          cartItemsCopy.push(info.title);
        }
      }

      if (previousNumberOfItems > newNumberOfItems) {
        for (let i = previousNumberOfItems; i > newNumberOfItems; i -= 1) {
          const index = cartItemsCopy.indexOf(info.title);
          if (index !== -1) {
            cartItemsCopy.splice(index, 1);
          }
        }
      }
    }

    if (event.target.type === 'button') {
      let newInputValue;

      if (event.target.textContent === '+') {
        cartItemsCopy.push(info.title);
        newInputValue = inputValue + 1;
      }

      if (event.target.textContent === '-') {
        const index = cartItemsCopy.indexOf(info.title);
        if (index !== -1) {
          cartItemsCopy.splice(index, 1);
        }
        newInputValue = inputValue - 1;
      }

      if (newInputValue !== undefined && newInputValue >= 0) {
        setInputValue(newInputValue);
      }
    }

    setCartItems(cartItemsCopy);
  }

  return (
    <div className={styles.card}>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <p>{info.price}</p>
      <button type="button" onClick={handleChange}>
        -
      </button>
      <input
        type="number"
        id={info.title}
        onChange={handleChange}
        value={inputValue}
      />
      <button type="button" onClick={handleChange}>
        +
      </button>
    </div>
  );
}

export default ShopCard;
