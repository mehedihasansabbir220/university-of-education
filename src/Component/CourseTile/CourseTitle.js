import React from 'react';
import './CourseTitle.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CourseTitle = (props) => {
    console.log(props.course);
    const { title, CoursePrice, discription, image } = props.course;
    return (
        <div className='coursetitle-container'>
            <img src={image} alt="" srcset="" />
            <div className='text'>
                <h1>{title}</h1>
                <p> CoursePrice : {CoursePrice}</p>
                <p>Rating :
                    <Stack spacing={1}>
                        <Rating name="size-large" defaultValue={4} size="large" />
                    </Stack>

                </p>
                <p>{discription}</p>
                <button className='btn btn-danger'>LEARN MORE </button>
            </div>

        </div>
    );
};

export default CourseTitle;