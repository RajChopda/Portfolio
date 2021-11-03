import React from 'react'
import styles from './aboutContent.module.css';

function AboutContent() {
    return (
        <>
            <div className={styles.text}>
                <p>
                    I am currently pursuing my B.Tech in Computer Engineering from <abbr title="Charotar University of Science and Tecnology"><a href='https://charusat.ac.in/'>CHARUSAT</a></abbr>.
                </p>
                <p>
                    As a student I'm always eager to learn new things and technologies to improve myself.
                </p>
                <p>
                    I have done some projects in various fields and technologies.
                    <ul className='w-50 p-3 mx-auto text-start'>
                        <li>Web Development</li>
                        <li>Desktop Application</li>
                        <li>Android Development</li>
                        <li>Blockchain</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default AboutContent
