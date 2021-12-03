import React, {Component} from 'react';
// import cartonize from '../assets/newCartonize.svg';
import styles from './sectionStyles.module.css';
import resume from '../assets/Resume01.pdf';
import {ReactComponent as GithubIcon} from '../assets/github-brands.svg';
import {ReactComponent as LinkedinIcon} from '../assets/linkedin-brands.svg';

class SectionDesign extends Component{


    render(){

        return(
            <div id={this.props.secId} className='container-fluid' style={{padding: '0', marginLeft: '150px', marginRight: '100px', width:'86%'}}>
            <div className='row'>
                <div className='col'>
                    <div className={[styles.introRect].join(' ')} style={this.props.styling}>
                        <span>{this.props.title}</span>
                    </div>
                </div>
            </div>
            <div className={['row', styles.cartoonPosition].join(' ')}>
                <div className='col'>
                    <div className={styles.meRect} style={this.props.cartoonM ? {marginBottom:'150px'} : {marginBottom:'500px'}}>
                        {this.props.hello ? <div className={styles.hello}>{this.props.hello}</div> : null}
                        <div className={styles.meRectText}>{this.props.content}
                        {this.props.cartoon && <div className={styles.contactIcon}>
                            {/* <a href='https://github.com/AswinTimalsina' target="_blank"><img className={styles.icon} style={{marginRight: '25px'}} src={github}/></a> */}
                            <a href='https://github.com/AswinTimalsina' className={styles.tagIcon} target="_blank"><GithubIcon className={styles.icon} style={{marginRight: '25px'}}/></a>
                            <a href='https://www.linkedin.com/in/aswin-timalsina/' className={styles.tagIcon} target="_blank"><LinkedinIcon className={styles.icon} style={{marginLeft: '25px'}}/></a>
                        </div>}
                        </div>
                    </div>
                </div>
                {this.props.cartoon && <a href='https://drive.google.com/file/d/1L-3WKeb08Rczcz7luNDzS7lL3lsTBgH-/view?usp=sharing' target='_blank'><div className={styles.cartoon}></div></a>}
            </div>
            
        </div>
        )
    }
}

export default SectionDesign;