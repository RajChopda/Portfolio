import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ProjectCardStruct from '../components/ProjectCardStruct'
import PageBottomMargin from '../components/PageBottomMargin'

export default function Projects() {
    return (
        <>
            <NavBar projects='active' />
            <div className="w-50 mx-auto">
                <ProjectCardStruct name='Secure Files' type='Java Desktop Application' discription='Secure your any format file and text by your own key.' link='#SecureFiles' />
                <ProjectCardStruct name='E-Classroom' type='Web Application' discription='Announcement by post, share files to your students and take attendance.' link='#E-Classroom' />
                <ProjectCardStruct name='Online Voting App' type='Java Desktop Application' discription='Give vote from home. #StayHomeStaySafe' link='#OnlineVotingApp' />
                <PageBottomMargin />
                <Footer />
            </div>
        </>
    )
}
