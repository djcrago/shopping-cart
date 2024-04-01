import { useEffect, useState } from 'react';
import ShopCard from '../ShopCard/ShopCard';
import styles from './ShopCategory.module.css';
import PropTypes from 'prop-types';

function ShopCategory({ info, cartItems, setCartItems }) {
  const [title, setTitle] = useState(null);

  function capitalizeTitle(title) {
    const words = title.split(' ');
    const capitalizedWords = words.map((word) => {
      const otherLetters = word.slice(1);
      const capitalFirstLetter = word[0].toUpperCase();
      return capitalFirstLetter.concat(otherLetters);
    });
    if (capitalizedWords.length > 0) {
      return capitalizedWords.join(' ');
    } else return capitalizedWords;
  }

  useEffect(() => {
    setTitle(capitalizeTitle(info.category));
  }, [info.category]);

  return (
    <div className={styles.category}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.products}>
        {info.products.map(
          (product) =>
            product.category === info.category && (
              <ShopCard
                key={product.title}
                info={product}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            )
        )}
      </div>
    </div>
  );
}

ShopCategory.propTypes = {
  info: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default ShopCategory;
