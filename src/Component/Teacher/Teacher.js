import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OurTeacher from '../OurTeacher/OurTeacher';
import './Teacher.css'

const Teacher = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);
    return (
        <div>
            <h2 className='bg-dark text-light py-3'>Our Teachers</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-2">
                {
                    teachers.map(teacher => <OurTeacher
                        key={teacher.id}
                        teacher={teacher}
                    ></OurTeacher>

                    )
                }
            </div>

        </div>
    );
};

export default Teacher;