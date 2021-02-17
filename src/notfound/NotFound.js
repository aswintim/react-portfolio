import React from 'react';
import styles from './notfound.module.css';
import SelfImage from '../assets/newCartonize.svg';

const NotFound = props =>{
    return(
        // <div className={styles.parentSelf}><div className={styles.selfImage}></div></div>
        <div>
            <div className='row'>
                <div className={['col-lg-4 col-md-4 col-sm-4', styles.errorText].join(' ')}>
                    404
                </div>
                <div className={['col-lg-4 col-md-4 col-sm-4', styles.parentSelf].join(' ')}>
                {/* <div className={styles.parentSelf}> */}
                    <img src={SelfImage} className={styles.selfImage}></img>
             {/* </div> */}
                </div>
                <div className={['col-lg-4 col-md-4 col-sm-4', styles.errorText].join(' ')}>
                    Error!
                </div>
            </div>
        
        </div>
    )
}

export default NotFound;
