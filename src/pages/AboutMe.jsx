import React from 'react';
import AboutContent from '../components/AboutContent';
import Avatar from '../components/Avtar';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PageBottomMargin from '../components/PageBottomMargin';

const AboutMe = () => {
    return (
        <div>
            <NavBar aboutMe='active' />
            <Avatar />
            <AboutContent />
            <PageBottomMargin />
            <Footer />
        </div>
    );
}

export default AboutMe;
