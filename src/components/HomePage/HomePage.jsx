import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.home}>
      <Header />
      <NavBar />
      <div>
        <p className={styles.text}>Body</p>
        <Link to="/shop" className={styles.link}>
          Shop
        </Link>
      </div>
      <div>
        <p className={styles.trips}>Home Trips</p>
        <Link>Trips</Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
