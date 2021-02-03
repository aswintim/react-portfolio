import React from 'react';
import styles from './sideStyles.module.css';

const SideLink = props =>{
    return(
    <div className={styles.sideLinkGroup}>
        <a href="#intro"><div className={styles.sidelink} style={{top: '9%'}}>Intro</div></a>
        {/* <a href="#skills"><div className={styles.sidelink} style={{top: '30%'}}>Skills</div></a> */}
        <a href="#projects"><div className={styles.sidelink} style={{top: '30%'}}>Projects</div></a>
        <a href="#contactMe"><div className={styles.sidelink} style={{top: '51%'}}>Contact Me!</div></a>
        
        
        
        {/* <a href="#projects"><div className={styles.sidelink}>Projects</div></a> */}

    </div>)
}

export default SideLink;