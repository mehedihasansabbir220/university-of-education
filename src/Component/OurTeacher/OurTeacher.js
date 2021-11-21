import React from 'react';

const OurTeacher = (props) => {
    const { title, image, heading, discription } = props.teacher;
    console.log(props.teacher)
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h4>{heading}</h4>
                        <p className="card-text">{discription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeacher;