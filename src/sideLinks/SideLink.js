import React from 'react';
import styles from './sideStyles.module.css';

const SideLink = props =>{
    return(
    <div>
        <a href="#projects"><div className={styles.sidelink}>Projects</div></a>
        <a href="#skills"><div className={styles.sidelink} style={{top: '39%'}}>Skills</div></a>
        <a href="#contactMe"><div className={styles.sidelink} style={{top: '67%'}}>Contact Me!</div></a>
        {/* <a href="#projects"><div className={styles.sidelink}>Projects</div></a> */}

    </div>)
}

export default SideLink;