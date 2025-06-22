import React from "react";
import WatchList from "./WatchList";

const MovieCard = ({ backdrop_path, name,movieObj,handlewatchlist,removewatchlist,watchlist}) => {

 let contain=(movieObj)=>{
      for(let i=0;i<watchlist.length;i++){
        if(watchlist[i].id===movieObj.id){
               return true;
        }
      }
      return false
  }

  return (
    
    <div
      className="h-[40vh] w-[11vw] bg-center bg-cover bg-no-repeat rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      {contain(movieObj)?<div className="m-4 flex justify-center items-center rounded-2xl bg-gray-500 h-8 w-8 " onClick={()=>removewatchlist(movieObj)}>
      &#x2715;
      </div>:<div className="m-4 flex justify-center items-center rounded-2xl bg-gray-500 h-8 w-8 " onClick={()=>handlewatchlist(movieObj)}>
      &#128516;
      </div>}
      
      <div className="text-white absolute bottom-0 text-xl p-2 text-center w-full bg-gray-900/60 rounded-xl">{name}</div>
    </div>
   
  );
};

export default MovieCard;
