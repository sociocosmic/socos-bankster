import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk-footer.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; Bankster &middot; SocioCosmic Inc.</p>
      {/* <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p> */}
    </div>
  );
}

export default Footer;
