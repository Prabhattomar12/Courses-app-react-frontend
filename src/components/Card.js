import React from 'react'
import './Card.css';
import Rating from './Rating';
import { useHistory } from "react-router-dom";

function Card({ id, thumbnail, title, description, rating, students }) {
   
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
          history.push("/course/" + id);
        }
      };
   
    return (
        <div className='card' onClick ={selectChannel}>
            <div className="card_left">
              <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className="card_right">
                <h2 className='title'>{title}</h2>
                <p className='description' >{description?.substring(0, 45)}</p>
                <Rating  rating={rating}/>
                <h5 className='students'>{students + '  Students'}</h5>
            </div>
        </div>
    )
}

export default Card
