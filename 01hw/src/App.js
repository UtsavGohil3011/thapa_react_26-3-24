import './App.css';
import Heading from './Heading';
import List from './List';
import Text from './Text';


function App() {

  const name = 'Utsav'
  const age = 22

  const fcolor = 'white'
  const lcolor = 'black'

  const d = new Date().toLocaleDateString()
  const t = new Date().toLocaleTimeString()
  const re = 33+66

  const img = 'https://picsum.photos/201/300'
  const img1 = 'https://picsum.photos/202/300'
  const img2 = 'https://picsum.photos/203/300'
  const img3 = 'https://picsum.photos/204/300'
  const img4 = 'https://picsum.photos/205/300'
  const img5 = 'https://picsum.photos/206/300'
  const link = 'https://picsum.photos/'


  const styling = {
    backgroundColor:'yellow',
    // text-align: center;
    textAlign: 'justify',
    // font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
     fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
     padding:'5rem'
  }


  let currDate = new Date()
  currDate = currDate.getHours()
  let greeting = ''
  let colorStyle = { }

  if (currDate >= 1 && currDate < 12) {
    greeting = 'Good Morning'
    colorStyle.color = 'aqua'
  }
  if (currDate >= 12 && currDate < 19) {
    greeting = 'Good Afternoon'
    colorStyle.color = 'orange'
    
    
  }
  if (currDate >= 19 && currDate <= 24) {
    greeting = 'Good Night'
    colorStyle.color = 'Blue'
  }






  return (

    <>

       <h1 style={{color:'red'}} > THIS IS SIMPLE HELLO WORLD CODE </h1>
      <h1>HEllo WOrld !!</h1>
      <h2>Utsav</h2>

      <br/>
      <hr/>
      <br/>

      <div>
      <h1 style={{color:'red'}}>CHALLENGE : </h1>
        <span style={{backgroundColor:'red', padding:'10px', fontSize:'1.5rem'}}>NETFLIX</span>
        <p>Here is my top 5 NETFLIX SERIES</p>
        <ol type='1'>
          <li>Game Of throns</li>
          <li>Vikings</li>
          <li>Money Heist</li>
          <li>Stranger Things</li>
          <li>Aarya</li>
        </ol>
      </div>

      
      <br/>
      <hr/>
      <br/>

      <div>
      <h1>THis is JS expression in JSX : <strong style={{color:'red'}}>"curly bracket" </strong> </h1>
        <h1> HELLO MY NAME IS {name}</h1>
        <h1> hello my age is {age}</h1>
        <Heading />
        <h1> SUM OF 33 + 33 = {33+33}</h1>
        <h1> Random number bwtween 1 to 100 = {Math.round(Math.random()*100 + 1)}</h1>
        <h2 style={{color:'red'}}>curly bracket ni andar khali expression work karse || koi condition or koi loop 'statemenmt' work nahi kare</h2>
      </div>

      
      <br/>
      <hr/>
      <br/>

      <div>
        <h1 style={{color:'red'}}>Template literals in react</h1>
        <h2>1) My fav color is {fcolor} and {lcolor}</h2>
        <h2>2) My fav color is {fcolor +' & '+ lcolor}</h2>
        <h2> {` 3) using tempalate literal ${fcolor} |||| ${lcolor}`}</h2>
      </div>


      <br/>
      <hr/>
      <br/>

      <div>
      <h1 style={{color:'red'}}>Challenge :- display current tima and date </h1>
      <h1>Hello, My name is Utsav</h1>
      <p>Date : {d} </p>
      <p>Time : {t} </p>
      <p>re : {re} </p>
      <Heading />
      </div>


      <br/>
      <hr/>
      <br/>

      <div>
        <h1  style={{color:'red'}}>JSX attribute</h1>
        <Heading />
        <h1 contentEditable='true' >Gohil Utsav A</h1>
        <a href={link} target='_utsav'>
        <img src={img}/>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
        </a>
      </div>

      <br/>
      <hr/>
      <br/>

      <div>
        <h1 style={{color:'red'}} > *CSS* : *className*</h1> 
        <h1 className='name'> GOHIL UTSAV A</h1>
        <Heading />
      </div>


      <br/>
      <hr/>
      <br/>

      <div  style={{backgroundColor:'pink'}}>
      <h1>"CSS"</h1>
        {/* inline css */}
        <h1 style={{color:'red'}}>How to use google font in REACT</h1>
        {/* className css */}
        <p className='fonts'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        {/* variable css */}
        <p style={styling}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <br/>
      <hr/>
      <br/>

      <div>
        <h1 className='chal'>Challange :- dynamically message GM, GA & GN</h1>
        <div className='main'>
        <h1 className='sub_main'>Hello, <span style={colorStyle}> {greeting} </span> </h1>
        </div>
      </div>


      <br/>
      <hr/>
      <br/>


    <div>
      <Text />
      <Heading />
      <List />
    </div>

    


    </>

  );
}

export default App;
