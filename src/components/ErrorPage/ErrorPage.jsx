import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className={styles.error}>
        <h2>Error: Page not found</h2>
        <p>Navigate using links above.</p>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
