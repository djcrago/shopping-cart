import styles from './ShoppingCart.module.css';
import PropTypes from 'prop-types';

function ShoppingCart({ cartItemsLength }) {
  return (
    <div>
      <p className={styles.cart}>Shopping Cart</p>
      <p>{cartItemsLength}</p>
    </div>
  );
}

ShoppingCart.propTypes = {
  cartItemsLength: PropTypes.number,
};

export default ShoppingCart;
