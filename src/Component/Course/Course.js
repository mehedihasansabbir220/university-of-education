import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CourseTitle from '../CourseTile/CourseTitle';
import './Course.css'

const Course = () => {
    const { id } = useParams();
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./course.Json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);
    return (
        <div>
            {
                courses.map(course => <CourseTitle
                    key={course.id}
                    course={course}
                ></CourseTitle>)
            }
        </div>
    );
};

export default Course;