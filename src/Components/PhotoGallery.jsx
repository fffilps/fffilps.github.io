import React from 'react'
import {CAR_IMAGES} from '../Images/CAR_IMAGES';
import '../App.css';


const PhotoGallery = () => {
    
    const imageSrc = () => 
        {CAR_IMAGES.forEach(car => {
            return car.src = `../Images/carImages${car.src}`
        })}

        imageSrc();
    
    
    return (
        <>
        <img className="carImages" alt="Expensive Car" src="gs://react-fffilps.appspot.com/carImages/1.jpg"></img>
        </>

    )
}

export default PhotoGallery;