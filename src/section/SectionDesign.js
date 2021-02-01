import React, {Component} from 'react';
import cartonize from '../assets/newCartonize.svg';
import github from '../assets/github-brands.svg';
import linkedIn from '../assets/linkedin-brands.svg';
import styles from './sectionStyles.module.css';
import resume from '../assets/Resume01.pdf';

class SectionDesign extends Component{
    render(){
        return(
            <div className='container-fluid' style={{padding: '0', marginLeft: '150px', marginRight: '100px', width:'86%'}}>
            <div className='row'>
                <div className='col'>
                    <div className={styles.introRect}>
                        <span>{this.props.title}</span>
                    </div>
                </div>
            </div>
            <div className={['row', styles.cartoonPosition].join(' ')}>
                <div className='col'>
                    <div className={styles.meRect}>
                        {this.props.hello ? <div className={styles.hello}>{this.props.hello}</div> : null}
                        <div className={styles.meRectText}>{this.props.content}
                        {this.props.cartoon && <div className={styles.contactIcon}>
                            <a href='https://github.com/AswinTimalsina' target="_blank"><img className={styles.icon} style={{marginRight: '25px'}} src={github}/></a>
                            <a href='https://www.linkedin.com/in/aswin-timalsina/' target="_blank"><img className={styles.icon} style={{marginLeft: '25px'}}src={linkedIn}/></a>
                        </div>}
                        </div>
                    </div>
                </div>
                {this.props.cartoon && <a href={resume} target='_blank'><div className={styles.cartoon}></div></a>}
            </div>
        </div>
        )
    }
}

export default SectionDesign;