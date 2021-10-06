import React from 'react'

const StartRating = ({rating,handelRating}) => {
    let start =(rating)=>{
        let tab=[]
        for(let i =1;i<=5;i++ )
{
    if( i<=rating){
    tab.push(
        <span onClick={()=>handelRating(i)} style={{color:"gold",fontSize:"20px", cursor:"pointer"}}>★</span>
    )
}
else{
    tab.push(
    <span onClick={()=>handelRating(i)} style={{color:"gray" ,fontSize:"20px",cursor:"pointer"}}>★</span>
    )}}
return tab
}
    
    return (
        <div>
            {
                start(rating)
            }
        </div>
    )
}
StartRating.defaultProps ={
handelRating:()=>{}
}

export default StartRating
