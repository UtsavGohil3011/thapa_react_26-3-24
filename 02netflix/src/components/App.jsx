import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarutsav from "./Navbarutsav";
import Carosalutsav from "./Carosalutsav";
import Headingtop5 from "./Headingtop5";
import Maincard from "./Maincard";
import Carddata from "./Carddata";
import { useState } from "react";



function App() {
  const [cardData, SetCardData] = useState(Carddata)
  const allItems = () => {
    SetCardData(Carddata);
  };

  const movieItems = () => {
    const movieData = Carddata.filter((item) => item.category === "movie");
    SetCardData(movieData)
  };

  const webItems = () => {
    const webData = Carddata.filter((item) => item.category === "web");
    SetCardData(webData);
  };

  return (
    <>
      <Navbarutsav />

      <Headingtop5 />

      <div className="main_btns">
      <button className="btns" onClick={allItems}>All</button>
      <button className="btns" onClick={movieItems}>Movies</button>
      <button className="btns" onClick={webItems}>Web Series</button>
      </div>

      <Maincard Carddata ={cardData}/>

      <Headingtop5 />

      <Carosalutsav />
    </>
  );
}

export default App;
