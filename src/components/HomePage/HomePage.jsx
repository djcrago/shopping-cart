import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './HomePage.module.css';
import Background from '../../assets/mountains.png';

function HomePage() {
  return (
    <div className={styles.home}>
      <Header />
      <NavBar />
      <div className={styles.body}>
        <img className={styles.background} src={Background} alt="mountains" />
        <p className={styles.text}>Get Out There</p>
        <Link to="/shop" className={styles.link}>
          Shop Now
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
