import React from 'react';
import CountrySelect from '../CoseCatagories/CoseCatgories';
import OurCourse from '../OurCourse/OurCourse';
import SubCatagories from '../SubCatagoris/SubCatagories';
import './Catagoris.css'

const Catagoris = () => {
    return (
        <div className='grid catagoris-container'>
            <div className="row p-3">
                <div className="col-md-8 col-12 sub-Catagories">
                    <SubCatagories></SubCatagories>
                </div>
                <div className="col-md-4 col-12 py-3">
                    <h2>Coose a Country </h2>
                    <CountrySelect></CountrySelect>
                </div>
            </div>

        </div>
    );
};

export default Catagoris;