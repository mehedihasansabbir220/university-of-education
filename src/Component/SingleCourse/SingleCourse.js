import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const { title, heading, discription, date, image, id } = props.course;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2>{heading}</h2>
                    <h5 class="card-title">{title}</h5>
                    <p><small>{date}</small></p>
                    <p class="card-text">{discription}</p>
                </div>
                <div class="card-footer">
                    <Link to={`/course/${id}`}>
                        <button type="button" class="btn btn-primary">More Detiels </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;