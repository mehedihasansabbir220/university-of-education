import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const OurCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Carousel.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <h1 className='bg-info'>OUR COURSES</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    courses.map(course => <SingleCourse
                        key={course.id}
                        course={course}
                    ></SingleCourse>
                    )
                }
            </div>
        </div>
    );
};

export default OurCourse;