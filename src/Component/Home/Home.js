import React from 'react';
import App from '../App/Menu';
import Catagoris from '../Catagories/Catagoris';
import OurCourse from '../OurCourse/OurCourse';
import StandardImageList from '../OurImage/Ourimage';
import './Home.css'

const Home = () => {
    return (
        <>
            <App></App>
            <Catagoris></Catagoris>
            <OurCourse></OurCourse>
            <StandardImageList></StandardImageList>
        </>
    );
};

export default Home;