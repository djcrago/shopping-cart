import styles from './ShoppingCart.module.css';
import PropTypes from 'prop-types';

function ShoppingCart({ cartItemsLength }) {
  return (
    cartItemsLength >= 0 && <div className={styles.cart}>{cartItemsLength}</div>
  );
}

ShoppingCart.propTypes = {
  cartItemsLength: PropTypes.number,
};

export default ShoppingCart;
