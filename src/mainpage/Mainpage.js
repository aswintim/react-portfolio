import React, {Component} from 'react';
import styles from './mainpage.module.css';

import SectionSample from '../section/SectionDesign';
import SideLink from '../sideLinks/SideLink';

class Mainpage extends Component {
    render() {

        return (
            <div className={styles.body1}>
                <SideLink/>

                <SectionSample
                    secId='intro'
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
                    secId='skills'
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