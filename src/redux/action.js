import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FILTER_MOVIE, FILTER_MOVIE_START } from "./actiontype"




export const handelDelete =(id) => {
    return {
        type: DELETE_MOVIE,
         payload:id
       
    }
}
export const handelAdd =(newmovie) => {
    return {
        type: ADD_MOVIE,
         payload:
           newmovie
            
            
       
    }
}
export const handelFilter =(newv,c) => {
    return {
        type: FILTER_MOVIE,
         payload:newv,c
           
            
       
    }
}
export const handelFilterStart =(newv) => {
    return {
        type: FILTER_MOVIE_START,
         payload:newv
           
            
       
    }
}
export const handelEdit =(editmovie) => {
    return {
        type: EDIT_MOVIE,
         payload:editmovie
         
           
            
       
    }
}