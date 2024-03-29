import ShopCard from '../ShopCard/ShopCard';
import styles from './ShopCategory.module.css';
import PropTypes from 'prop-types';

function ShopCategory({ info, cartItems, setCartItems }) {
  return (
    <div className={styles.category}>
      <h2>{info.category}</h2>
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
  );
}

ShopCategory.propTypes = {
  info: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default ShopCategory;
