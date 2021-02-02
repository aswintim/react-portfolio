import React from 'react';
import styles from './sideStyles.module.css';

const SideLink = props =>{
    return(
    <div className={styles.sideLinkGroup}>
        <a href="#contactMe"><div className={styles.sidelink}>Contact Me!</div></a>
        <a href="#projects"><div className={styles.sidelink}>Projects</div></a>
        <a href="#skills"><div className={styles.sidelink}>Skills</div></a>
        <a href="#intro"><div className={styles.sidelink} >Intro</div></a>
        {/* <a href="#projects"><div className={styles.sidelink}>Projects</div></a> */}

    </div>)
}

export default SideLink;