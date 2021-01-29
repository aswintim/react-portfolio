import {Component} from 'react';
import styles from './App.module.css';
import nameBar from '../assets/namebar.svg';
import Typical from 'react-typical';



class Frontpage extends Component{
    render(){


        return(
            <div className={styles.frontBody}>

            {/* curvy yellow */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe900" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,208C384,171,480,117,576,106.7C672,96,768,128,864,144C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className={styles.greeting}>Namaste</div>
            <div className={styles.namebarDiv}>
                <img className={styles.namebar} src={nameBar} alt="Namebar svg"/>
            </div>

            <div className={styles.intro}>
            {/* <a 
            className={[styles.hi, styles.typewrite].join(' ')} 
            data-period={period} data-type={type}>
        <span className={styles.wrap}></span>
    </a> */}
    <p className={styles.typeEffect}>
    <Typical
    steps={['I\'m Aswin Timalsina', 500, 'I\'m a developer', 500,'I\'m a tech enthusiast', 500, 'I\'m a learner', 500,]}
    loop={Infinity}
    wrapper='p'
    />
    </p>

 <p className={styles.clickHere}>
   <a href="intro.html">  Click here to open the page  </a>
  </p>

</div>
            </div>
        )
    }
}

export default Frontpage;