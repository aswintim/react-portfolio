import React from 'react';
import styles from './project.module.css';


const ProjectModule = props =>{
    return(
        <div className={[styles.projectBox].join(' ')}>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-6' style={{textAlign: 'center'}}>
                    <img src={props.image} className={styles.projectImage}></img>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className='row'>
                       <div className={['col', styles.titlee].join(' ')}>{props.titlee}</div>
                   </div>
                   <div className='row'>
                       <div className={['col', styles.description].join(' ')}>{props.description}</div>
                   </div>
                   <div className='row'>
                       <div className={['col', styles.toolsBox].join(' ')}>
                           <span className={styles.toolsT}>Tools Used: </span>
                           <span className={styles.tools}>{props.tools}</span>
                        </div>
                   </div>
                   <div className='row'>
                       <div className={['col', styles.codeLive].join(' ')}>{props.code}</div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModule;