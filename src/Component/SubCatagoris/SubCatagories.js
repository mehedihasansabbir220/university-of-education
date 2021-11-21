import React from 'react';
import './Subcatagories.css'

const SubCatagories = () => {
    return (
        <div className='subCatagoris'>
            <h1>COURSE CATEGORIES</h1>
            <div className='grid sub-Catagoris'>
                <div className="row  py-3 g-3  ">
                    <div className="col-md-6 border gx-3 border-1 rounded p-3 ">
                        <h4>BUSINESS</h4>
                        <p>Business Trends changing with latest courses are available with us.</p>
                    </div>
                    <div className="col-md-6 border border-1 rounded p-3">
                        <h4>ACCOUNTING</h4>
                        <p>Accounting need to be perfect. Come and join with us with best resources..</p>
                    </div>
                </div>
                <div className="row  py-3 g-3">
                    <div className="col-md-6 border gx-3 border-1 rounded p-3">
                        <h4>SCIENCE & TECHNOLOGY</h4>
                        <p>Latest technologies online courses are available with new courses..</p>
                    </div>
                    <div className="col-md-6 border border-1 rounded p-3">
                        <h4>HEALTH & PSYCHOLOGY</h4>
                        <p>Learn about the Health & Psychology with the complete presentation.</p>
                    </div>
                </div>
                <div className="row  py-3 g-3">
                    <div className="col-md-6 border gx-3 border-1 rounded p-3">
                        <h4>FOOD & DRINKING</h4>
                        <p>Get the best eating education and practice by taking online courses..</p>
                    </div>
                    <div className="col-md-6 border border-1 rounded p-3">
                        <h4>CREATIVE ARTS & MEDI</h4>
                        <p>Come and explore your creative arts and media by going further.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SubCatagories;