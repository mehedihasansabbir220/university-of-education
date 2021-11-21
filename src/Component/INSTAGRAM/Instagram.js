import React from 'react';
import './Instagram.css'
import images1 from '../../image/03.12.19_omc10267_hannah_nguyen_24_copy.jpg';
import images2 from '../../image/Optimized-happy-graduates.jpg';

const Instagram = () => {

    return (
        <div >
            <h2>INSTAGRAM</h2>
            <div className='instagram'>
                <img src={images1} class="rounded mx-auto d-block " alt="..."></img>
                <img src={images2} class="rounded mx-auto d-block " alt="..."></img>
            </div>

        </div>
    );
};

export default Instagram;