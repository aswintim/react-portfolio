import React, {Component} from 'react';
import styles from './mainpage.module.css';

import SectionSample from '../section/SectionDesign';
import SideLink from '../sideLinks/SideLink';
import resume from '../assets/Resume01.pdf';

class Mainpage extends Component {
    render() {

        return (
            <div className={styles.body1}>
                <SideLink/>

                <SectionSample
                    secId='intro'
                    title="INTRO"
                    hello='HELLO!'
                    content={
                    <div>I'm Aswin Timalsina. Currently, I'm studying Computer Science at University of Louisiana Monroe. The enormous possibilities of technology inspires me to learn and apply it. So blessed that I've got a laptop and internet. Let's make world a better place with technology!
                    Please checkout my <a href="https://github.com/AswinTimalsina" target="_blank" className={styles.highlight}><span >Github</span></a> or <a href='#projects' className={styles.highlight}><span >projects</span></a> that I have worked on. Also, feel free to checkout my <a className={styles.highlight} href={resume} target='_blank'><span >resume</span></a> or send me an <a href='mailto:aswin.timalsina1@gmail.com' target='_blank' className={styles.highlight}><span >email</span></a>.</div>}
                    
                    cartoon='yes'/>

                <SectionSample
                    secId='skills'
                    title="INTRO"
                    hello='HELLO!'
                    content="I'm Aswin Timalsina. Currently, I'm studying Computer Science at University of Louisiana Monroe. The enormous possibilities of technology inspires me to learn and apply it. So blessed that I've got a laptop and internet. Let's make world a better place with technology! Please feel free to browse through these links and get to know me."
                    cartoon='yes'/>

                <SectionSample
                    secId='projects'
                    title="INTRO"
                    hello='HELLO!'
                    content="I'm Aswin Timalsina. Currently, I'm studying Computer Science at University of Louisiana Monroe. The enormous possibilities of technology inspires me to learn and apply it. So blessed that I've got a laptop and internet. Let's make world a better place with technology! Please feel free to browse through these links and get to know me."
                    cartoon='yes'/>

<SectionSample
                    secId='contactMe'
                    title="INTRO"
                    hello='HELLO!'
                    content="I'm Aswin Timalsina. Currently, I'm studying Computer Science at University of Louisiana Monroe. The enormous possibilities of technology inspires me to learn and apply it. So blessed that I've got a laptop and internet. Let's make world a better place with technology! Please feel free to browse through these links and get to know me."
                    cartoon='yes'/>

            </div>
        )
    }
}

export default Mainpage;