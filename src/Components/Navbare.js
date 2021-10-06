import React, { useState } from 'react'
import { BiMoviePlay } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handelFilter, handelFilterStart } from '../redux/action';
import { FILTER_MOVIE } from '../redux/actiontype';
import StartRating from './StartRating';

const Navbare = () => {
    const [textm, setTextm] = useState('')
  const [star, setStar] = useState(1)
  const handelChange = (e) => {
    setTextm(e.target.value)
  }
  const handelRating = (note) => {
    setStar(note)
  }
  const dispatch = useDispatch()

    return (
        <div style={{display:"flex" ,marginTop:"8px"}}>
            <BiMoviePlay style={{color:"red" ,fontSize:"40px"}}/>
              <h2
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "40px",
              color: " rgb(255, 0, 0)",
            }}
          >
            NETFLIX
          </h2>
          <form className="formnav" >

           <input className="inpnav " value={textm} type="text" style={{fontSize:"20px"}} onChange={  (e)=>{setTextm(e.target.value);dispatch(handelFilter(e.target.value))}  }/>
       </form>   
     
      <StartRating rating={star} handelRating={  (x)=>{setStar(x);dispatch(handelFilterStart(x))}   }  />

        </div>
    )
}

export default Navbare

