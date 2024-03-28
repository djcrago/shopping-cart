import styles from './ShoppingCart.module.css';

function ShoppingCart({ totalCount }) {
  return (
    <div>
      <p className={styles.cart}>Shopping Cart</p>
      <p>{totalCount}</p>
    </div>
  );
}

export default ShoppingCart;
