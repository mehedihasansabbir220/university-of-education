import React from 'react';
import './About.css';
import image from '../../image/Corpus-Christi-College-University-of-Cambridge-England.jpg'

const About = () => {
    return (
        <>
            <div className='about-container'>
                <img src={image} alt="" srcset="" />
                <div className='about-Us'>
                    <h4>About Our University</h4>
                    <h2>WELCOME TO UNIVERSITY OF EDUCATION</h2>
                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat cauctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per Mauris in erat justo.

                        Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed.</p>
                    <button className='btn btn-danger'>know more</button>
                </div>

            </div>

        </>
    );
};

export default About;