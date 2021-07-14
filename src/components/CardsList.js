import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardsList.css';
import axios from '../axios.js';

function CardsList() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    await axios
      .get('/courses')
      .then((res) => res.data)
      .then((result) => setCourses(result))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // console.log('courses', courses);

  return (
    <div className='cardsList'>
       {courses.map(({_id, title, description, rating, thumbnail, students  }) => <Card
        key={_id}
        id={_id}
        thumbnail={thumbnail}
        title={title}
        description={description}
        rating={rating}
        students={students}
      />)}
    </div>
  );
}

export default CardsList;
