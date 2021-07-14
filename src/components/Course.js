import React, { useEffect, useState } from 'react';
import './Course.css';
import { useParams } from 'react-router-dom';
import axios from '../axios.js';

function Course() {

  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  
  const fetchCourse = async (id) => {
       if(id){
           await axios.get(`/courses/${courseId}`)
                      .then(res => res.data)
                      .then(result => setCourse(result))
                      .catch(err => console.log(err.message));
       }

  }

  useEffect( () => {
      fetchCourse(courseId);
  }, [])

  console.log('courseId ', courseId)


  return (
    <div className='course'>
      <img
     src={course?.thumbnail}
     alt={course?.title}
      />
      <div className='course_info'>
        <h1>{course?.title}</h1>
         <h4>{course?.students} recents views</h4>
         <p>{course?.description}</p>
      </div>
    </div>
  );
}

export default Course;
