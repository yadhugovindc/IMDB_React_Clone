import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handlewatchlist = (movieObj) => {
    let newwatchlist = [...watchlist, movieObj];
    localStorage.setItem('Movieapp',JSON.stringify(newwatchlist));
    setWatchlist(newwatchlist);
    console.log(newwatchlist);
  };
  let removewatchlist = (movieObj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchlist(filteredwatchlist);
    console.log(filteredwatchlist);
  };
  useEffect(()=>{
    let movieFromlocalstorage=localStorage.getItem("Movieapp");
    if(!movieFromlocalstorage){
      return
    }
    else{
      setWatchlist(JSON.parse(movieFromlocalstorage))
    }
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies handlewatchlist={handlewatchlist} removewatchlist={removewatchlist} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList  watchlist={watchlist} setWatchlist={setWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
