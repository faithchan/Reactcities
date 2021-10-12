// IMPORT useState
import React, {useState} from 'react';
import './styles.css';
import imagesArr from "./imageData"
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 

const [bigImage, setBigImage] = useState(imagesArr[0])
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL

  function printImg (e){const target = e.target.src
  return setBigImage(target)}
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
const setImg = imagesArr.map((props, index)=>{

    const greenBorder = {
			border: "lightgreen",
			borderWidth: "5px",
			borderStyle: "solid",
		};

  return bigImage===props.img ? (<img
  key={index}
  className="thumb"
  src={props.img}
  alt={props.city}
  onClick={printImg}
  style={greenBorder}/>
): (<img
  key={index}
  className="thumb"
  src={props.img}
  alt={props.city}
  onClick={printImg}/>)})
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {setImg}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
