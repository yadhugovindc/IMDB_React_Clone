import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import Pagination from './Pagination';


const Movies = ({handlewatchlist,movieObj,removewatchlist,watchlist}) => {
  const [movies,setMovies]=useState([]);
  const [pageNo,setpageNo]=useState(1);

  const handleprev=()=>{
    if(pageNo!=1){
      setpageNo(pageNo-1);
    }
     
  }
  const handlefor=()=>{
    setpageNo(pageNo+1);
 }


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`).then(function(res){setMovies(res.data.results)
      console.log(res.data.results);
        
    })
    ;
    
  },[pageNo])
  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around gap-8'>
        {movies.map((movieObj)=>{
          return <MovieCard backdrop_path={movieObj.backdrop_path} 
          name
          ={movieObj.original_title} handlewatchlist={handlewatchlist} movieObj={movieObj} key={movieObj.id} removewatchlist={removewatchlist} watchlist={watchlist}/>
        })}
       
      </div>

     <Pagination handleprev={handleprev} handlefor={handlefor} pageNo={pageNo}/>
    </div>
  )
}

export default Movies;