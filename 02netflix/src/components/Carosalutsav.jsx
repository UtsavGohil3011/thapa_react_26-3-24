import Cardutsav from "./Cardutsav";
import got from "../images/got.jpg";
// import Cardutsav from "./Cardutsav";
import Carddata from "./Carddata";




function Carosalutsav() {
  return (
    <>
{/* 
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active d-flex  justify-content-between">
    <Cardutsav name={Carddata[0].name} gener={Carddata[0].gener} source={Carddata[0].source}/>

    </div>
    <div className="carousel-item d-flex justify-content-between">
    <Cardutsav name={Carddata[1].name} gener={Carddata[1].gener} source={Carddata[1].source}/>
    
    </div>
    <div className="carousel-item d-flex  justify-content-between ">
    <Cardutsav name={Carddata[2].name} gener={Carddata[2].gener} source={Carddata[2].source}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
    <div className="d-flex justify-content-evenly  ">
    <Cardutsav name={Carddata[0].name} gener={Carddata[0].gener} source={Carddata[0].source}/>
    {/* <Cardutsav name={Carddata[1].name} gener={Carddata[1].gener} source={Carddata[1].source}/> */}
    </div>
    </div>



    <div className="carousel-item">
    <div className="d-flex justify-content-evenly">
    <Cardutsav name={Carddata[1].name} gener={Carddata[1].gener} source={Carddata[1].source}/>
    {/* <Cardutsav name={Carddata[3].name} gener={Carddata[3].gener} source={Carddata[3].source}/> */}
    </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-evenly">
    <Cardutsav name={Carddata[2].name} gener={Carddata[2].gener} source={Carddata[2].source}/>
    {/* <Cardutsav name={Carddata[3].name} gener={Carddata[3].gener} source={Carddata[3].source}/> */}
    </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-evenly">
    <Cardutsav name={Carddata[3].name} gener={Carddata[3].gener} source={Carddata[3].source}/>
    {/* <Cardutsav name={Carddata[3].name} gener={Carddata[3].gener} source={Carddata[3].source}/> */}
    </div>
    </div>


    <div className="carousel-item ">
    <div className="d-flex justify-content-evenly">
    <Cardutsav name={Carddata[4].name} gener={Carddata[4].gener} source={Carddata[4].source}/>
    </div>
    </div>
    <div className="carousel-item ">
    <div className="d-flex justify-content-evenly">
    <Cardutsav name={Carddata[5].name} gener={Carddata[5].gener} source={Carddata[5].source}/>
    </div>
    </div>
    <div className="carousel-item ">
    <div className="d-flex justify-content-evenly">
    <Cardutsav name={Carddata[6].name} gener={Carddata[6].gener} source={Carddata[6].source}/>
    </div>
    </div>



  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default Carosalutsav;
