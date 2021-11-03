import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SkillStruct from '../components/SkillStruct';
import PageBottomMargin from '../components/PageBottomMargin';

const Skills = () => {
    return (
        <>
            <NavBar skills='active' />
            <div className="w-50 mx-auto mt-3">
                <SkillStruct skill='HTML/CSS' progress='75' />
                <SkillStruct skill='JavaScript' progress='70' />
                <SkillStruct skill='C/C++' progress='80' />
                <SkillStruct skill='Java' progress='75' />
                <SkillStruct skill='Python' progress='70' />
                <SkillStruct skill='React JS' progress='60' />
                <SkillStruct skill='Android' progress='50' />
                <SkillStruct skill='Blockchain' progress='30' />
                <SkillStruct skill='Arduino' progress='50' />
                <SkillStruct skill='DSA' progress='60' />
                <SkillStruct skill='MySQL' progress='60' />
                <SkillStruct skill='MongoDB' progress='50' />
            </div>
            <PageBottomMargin />
            <Footer />
        </>
    );
}

export default Skills;
