import { useState } from 'react';
import styles from './ShopCard.module.css';
import numberOfValues from '../../numberOfValues';
import PropTypes from 'prop-types';

function ShopCard({ info, cartItems, setCartItems }) {
  const [inputValue, setInputValue] = useState(0);

  function handleChange(event) {
    const cartItemsCopy = [...cartItems];

    if (event.target.type === 'number') {
      const newNumberOfItems = +event.target.value;
      const previousNumberOfItems = numberOfValues(cartItemsCopy, info.title);

      if (newNumberOfItems >= 0 && newNumberOfItems <= 100) {
        setInputValue(newNumberOfItems);
      }

      if (previousNumberOfItems < newNumberOfItems) {
        for (
          let i = previousNumberOfItems;
          i < newNumberOfItems && i < 100;
          i += 1
        ) {
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

      if (
        event.target.textContent === '+' ||
        event.target.textContent === 'Add to Cart'
      ) {
        if (inputValue < 100) {
          cartItemsCopy.push(info.title);
          newInputValue = inputValue + 1;
        }
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
      <img src={info.image} alt={info.title} />
      <div className={styles.price}>
        <p>{'$' + info.price}</p>
        {inputValue === 0 && (
          <button className={styles.add} type="button" onClick={handleChange}>
            Add to Cart
          </button>
        )}
        {inputValue > 0 && (
          <div className={styles.numberOfItems}>
            <button type="button" onClick={handleChange}>
              -
            </button>
            <input
              type="number"
              id={info.title}
              onChange={handleChange}
              value={inputValue.toString()}
            />
            <button type="button" onClick={handleChange}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  info: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default ShopCard;
