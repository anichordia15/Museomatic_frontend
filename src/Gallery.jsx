import React from 'react'
import "./Gallery.css"
import g1 from "./images/g1.jpg"
import g2 from "./images/g2.jpg"
import g3 from "./images/g3.jpg"
import g4 from "./images/g4.jpg"
import g5 from "./images/g5.jpg"
import g6 from "./images/g6.jpg"
import g7 from "./images/g7.jpg"
import g8 from "./images/g8.jpg"
import g111 from "./images/g111.jpg"
import g222 from "./images/g222.jpg"
import g333 from "./images/g333.jpg"
import g444 from "./images/g444.jpg"
import g555 from "./images/g555.jpg"
import g666 from "./images/g666.jpg"



const Gallery = () => {
  return (
    <>
    <div className='gallery_h1'>
    <h1>Gallery</h1>
    </div>
    <div className='gall'> 
    <img src={g1} alt="Image 1"/>
    <img src={g2} alt="Image 2"/>
    <img src={g3} alt="Image 3"/>
    <img src={g4} alt="Image 4"/>
    <img src={g5} alt="Image 5"/>
    <img src={g6} alt="Image 6"/>
    <img src={g7} alt="Image 7"/>
    <img src={g8} alt="Image 8"/>
    <img src={g111} alt="Image 9"/>
    <img src={g222} alt="Image 11"/>
    <img src={g333} alt="Image 12"/>
    <img src={g444} alt="Image 10"/>
    <img src={g555} alt="Image 10"/>
    <img src={g666} alt="Image 10"/>
    </div>
    </>
  )
}

export default Gallery