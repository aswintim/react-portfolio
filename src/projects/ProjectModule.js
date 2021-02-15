import React, {Component} from 'react';
import styles from './project.module.css';


class ProjectModule extends Component{
    state={
        projectMobile: ''
    }

    componentDidMount(){
        window.addEventListener('resize', () => {
            this.setState({
                projectMobile: window.innerWidth < 1111
            });
        }, false);
    }

    render(){
        const classy = this.state.projectMobile ? 'col-12' : 'col-lg-6';
    return(
        <div className={[styles.projectBox].join(' ')}>
            <div className='row'>
                <div className={['col-sm-12 col-md-12', classy].join(' ')} style={{textAlign: 'center'}}>
                    <img src={this.props.image} className={styles.projectImage}></img>
                </div>
                <div className={['col-sm-12 col-md-12', classy].join(' ')}>
                    <div className='row'>
                       <div className={['col', styles.titlee].join(' ')}>{this.props.titlee}</div>
                   </div>
                   <div className='row'>
                       <div className={['col', styles.description].join(' ')}>{this.props.description}</div>
                   </div>
                   <div className='row'>
                       <div className={['col', styles.toolsBox].join(' ')}>
                           <span className={styles.toolsT}>Tools Used: </span>
                           <span className={styles.tools}>{this.props.tools}</span>
                        </div>
                   </div>
                   <div className='row'>
                       <div className={['col', styles.codeLive].join(' ')}>{this.props.code}</div>
                   </div>
                </div>
            </div>
        </div>
    )
    }
}

export default ProjectModule;