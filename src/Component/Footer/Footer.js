import React from 'react';
import Contact from '../Contact/Contact';
import Information from '../information/Information';
import Instagram from '../INSTAGRAM/Instagram';
import StudentHelp from '../StudentHelp/StudentHelp';
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer-container my-auto'>
            <div class="row">
                <div class=" col-6 col-md-3"><Information></Information></div>
                <div class="col-6 col-md-3"><StudentHelp></StudentHelp></div>
                <div class="col-6 col-md-3"><Instagram></Instagram></div>
                <div class="col-6 col-md-3"><Contact></Contact></div>
            </div>
        </div>
    );
};

export default Footer;