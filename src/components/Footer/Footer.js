import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../images/header-bk-footer.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; Bankster &middot; SocioCosmic Inc.</p>  
    </div>
  );
}

export default Footer;
