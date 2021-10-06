import React from 'react'
import { Card } from 'antd';
import { TiDelete } from 'react-icons/ti';

import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TASK} from '../redux/actiontype';
import { handelDelete } from '../redux/action';
import StartRating from './StartRating';
import Edit from './Edit';

const MovieCard = ({movie}) => {
    const dispatch = useDispatch()

    return (
        <div style={{display:"flex",flexWrap: "wrap", marginLeft:50, marginTop:"50px"}}>

    <Card
    hoverable
    style={{ width: 240, 
        backgroundColor: 'teal',
        marginLeft: '20px',
        marginBottom: '20px',
      }} 
    cover={<img  src={movie.imgs} style={{ height: '400px' }} />
}
  >
<h3>{movie.name}</h3>
<h3>{movie.years}</h3>
<StartRating rating={movie.rating}/>

<button>description</button>
<button onClick={() => dispatch(handelDelete(movie.id))}>delete</button>

<Edit movie={movie}/>
  </Card>,
  
           
        
          </div>
     
    )
}

export default MovieCard
