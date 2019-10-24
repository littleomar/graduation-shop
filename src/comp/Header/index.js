import React from 'react';
import styles from './header.module.css';


function MyHeader() {
  console.log(styles.myHeader);
    return(
        <div className={styles.myHeader}>
            <div className={styles.myHeader}>hello world</div>
        </div>
    )
}

export default MyHeader;
