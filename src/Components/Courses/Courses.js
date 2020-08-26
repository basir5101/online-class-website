import React from 'react';
import './Courses.css';

const Courses = (props) => {
    return (
        <div className = 'course-data'>
            <h4>{props.course.name}</h4>
            <h2>Price: ${props.course.price}</h2>
            <button onClick = { () => props.handleAddClick(props.course)} className = 'enroll-btn'>Enroll Now</button>
        </div>
    );
};

export default Courses;