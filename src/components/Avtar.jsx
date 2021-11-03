import React from 'react'
import profilePhoto from '../images/profilePhoto.png';
import styles from './avtar.module.css';

function Avatar() {
    return (
        <div className={styles.avtar}>
            <img src={profilePhoto} className={styles.avtarImg} alt='Profile'/>
            <h1 className={styles.name}>Raj Patel</h1>
        </div>
    )
}

export default Avatar;