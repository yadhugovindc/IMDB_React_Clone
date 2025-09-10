import React, { useEffect, useState } from "react";
import genres from "../utility/genre.js";

const WatchList = ({ watchlist, setWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All genre"]);
  const [currGenre, setCurrGenre] = useState("All genre");
  let handlesearch = (e) => {
    setSearch(e.target.value);
  };

  let sortincrease = () => {
    let sortedIn = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIn]);
  };
  let sortdecrease = () => {
    let sorteddec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sorteddec]);
  };

  let increSortpop = () => {
    let sortin = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchlist([...sortin]);
  };

  let decreSortpop = () => {
    let sortde = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchlist([...sortde]);
  };

  let deletefromwatchlist = (movieObj) => {
    let newwatchlist = watchlist.filter((item) => {
      return item.id !== movieObj.id;
    });
    setWatchlist(newwatchlist);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genres[movieObj.genre_ids[0]];
    });
    temp =new Set(temp)
    setGenre(["All genre", ...temp]);
    console.log(genre);
  }, [watchlist]);

  let handlefilter = (genre) => {
    setCurrGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genre.map((movieObj) => {
          return (
            <div
              onClick={() => handlefilter(movieObj)}
              className={
                currGenre === movieObj
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold text-center "
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold text-center"
              }
            >
              {movieObj}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handlesearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-xl"
        />
      </div>
      <div className="overflow-x-auto rounded overflow-hidden border border-gray-200 m-8 ">
        <table className="min-w-full text-center text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th>
                <div className="flex justify-center items-center relative h-full">
                  <div onClick={sortincrease} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  Ratings
                  <div onClick={sortdecrease} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </th>

              <th>
                <div className="flex justify-center items-center relative h-full">
                  <div onClick={increSortpop} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  Popularity
                  <div onClick={decreSortpop} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </th>

              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
                   if(currGenre==='All genre'){
                    return true;
                   }
                   else{
                    return genres[movieObj.genre_ids[0]]===currGenre;
                   }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr>
                    <td className="flex items-center px-3 py-3  ">
                      <img
                        className="h-[6rem] w-[10rem] rounded-xl hidden md:block"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt=""
                      />
                      <div className="lg:mx-10 ">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genres[movieObj.genre_ids[0]]}</td>
                    <td
                      className="text-red-600 hover:cursor-pointer"
                      onClick={() => {
                        deletefromwatchlist(movieObj);
                      }}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
