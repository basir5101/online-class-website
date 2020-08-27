import React from 'react';
import './Courses.css';

const Courses = (props) => {
    return (
        <div className = 'course-data'>
            <img style = {{height: '120px', width: 'auto'}} className = 'img-thumbnail m-3'  src={props.course.picture} alt=""/>
            <h3 className = "course-name">{props.course.name}</h3>
            <hr/>
            <h2>Price: ${props.course.price}</h2>
            <button onClick = { () => props.handleAddClick(props.course)} className = 'btn btn-primary'>Enroll Now</button>
        </div>
    );
};

export default Courses;