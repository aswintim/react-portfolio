import React, {Component} from 'react';
import styles from './mainpage.module.css';

import SectionSample from '../section/SectionDesign';
import SideLink from '../sideLinks/SideLink';
import resume from '../assets/Resume01.pdf';

import ProjectModule from '../projects/ProjectModule';
import Contact from '../contact/Contact';

import ticketing from '../assets/Projects/ticketing.PNG';
import comeunity from '../assets/Projects/comeunity.PNG';
import burger from '../assets/Projects/burger.PNG';


class Mainpage extends Component {
    
    render() {
        var contact = (<div>
            <Contact/>
        </div>);
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
                    {/* <div style={{textAlign: 'center'}}> */}
                        <a href='#projects'><svg className={styles.arrows}>
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg></a>
                        {/* </div> */}

                {/* <SectionSample
                    secId='skills'
                    title="SKILLS"
                    hello='HELLO!'
                    content="I'm Aswin Timalsina. Currently, I'm studying Computer Science at University of Louisiana Monroe. The enormous possibilities of technology inspires me to learn and apply it. So blessed that I've got a laptop and internet. Let's make world a better place with technology! Please feel free to browse through these links and get to know me."
                    cartoon='yes'
                    
                    /> */}

                <SectionSample
                    secId='projects'
                    title="PROJECTS"
                    hello=''
                    content={
                        <div>
                            <ProjectModule 
                            image={ticketing}
                            titlee='Ticketing Productivity'
                            description={<> A web app created from scratch for tracking user's multi-tasks.</>}
                            tools={<><span className={[styles.one, styles.indv].join(' ')}>ReactJS</span> <span className={[styles.two, styles.indv].join(' ')}>Redux</span> <span className={[styles.three, styles.indv].join(' ')}>Firebase</span> <span className={[styles.four, styles.indv].join(' ')}>Firebase-Auth</span></>}
                            code={<><a className={styles.codeLink} href='https://github.com/AswinTimalsina/ticketingProductivity' target='_blank'>Github</a> | <a className={styles.codeLink} href='https://ticketing-d7350.web.app/' target='_blank'>Link</a></>}
                            />

                            <ProjectModule 
                            image={comeunity}
                            titlee='ComeUnity'
                            description={<> A social networking site that give users notification if any user signs in, signs up and posts.</>}
                            tools={<><span className={[styles.one, styles.indv].join(' ')}>ReactJS</span> <span className={[styles.two, styles.indv].join(' ')}>Redux</span> <span className={[styles.three, styles.indv].join(' ')}>Firebase</span> <span className={[styles.four, styles.indv].join(' ')}>Firebase-Auth</span> <span className={[styles.five, styles.indv].join(' ')}>CloudFunctions</span></>}
                            code={<><a className={styles.codeLink} href='https://github.com/AswinTimalsina/social-media' target='_blank'>Github</a> | <a className={styles.codeLink} href='https://come-unity-b8326.web.app/' target='_blank'>Link</a></>}
                            />

                            <ProjectModule 
                            image={burger}
                            titlee='Burger Restaurant'
                            description={<> A web app for burger restaurant. It shows a visually pleasing burger with customer's input. Customer can also look at their order details.</>}
                            tools={<><span className={[styles.one, styles.indv].join(' ')}>ReactJS</span> <span className={[styles.two, styles.indv].join(' ')}>Redux</span> <span className={[styles.three, styles.indv].join(' ')}>Firebase</span> <span className={[styles.four, styles.indv].join(' ')}>Firebase-Auth</span> <span className={[styles.five, styles.indv].join(' ')}>CloudFunctions</span></>}
                            code={<><a className={styles.codeLink} href='https://github.com/AswinTimalsina/reactBurgerProject' target='_blank'>Github</a> </>}
                            />
                            </div>
                    }
                    cartoon=''
                    // styling={"@media screen and (min-width: 1295px){.introRect{width: 507px}}"}
                    />

                    <SectionSample
                    secId='contactMe'
                    title="CONTACT ME"
                    hello=''
                    content={contact}
                    cartoon=''
                   
                    />

            </div>
        )
    }
}

export default Mainpage;