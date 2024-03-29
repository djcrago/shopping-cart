import styles from './ShoppingCart.module.css';

function ShoppingCart({ cartItemsLength }) {
  return (
    <div>
      <p className={styles.cart}>Shopping Cart</p>
      <p>{cartItemsLength}</p>
    </div>
  );
}

export default ShoppingCart;
