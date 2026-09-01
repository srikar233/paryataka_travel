'use client';

import styles from './Footer.module.css';

export default function footer()
{
    return(
        <div className={styles.footer}>
            <div>Logo</div>
            <div>Explore</div>
            <div>Contact</div>
        </div>
    )
}