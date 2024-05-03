import { useState } from 'react'
import './imageCarousel.css'


const ImageCarousel = ({images}) => {

const [centerImage, setCenterImage] = useState(images[0])



console.log(images)
    return (
        <>
        <p>I'm an image carousel</p>
        
        <img src={centerImage} className="screenshotImg"/>
        </>
    )
}

export default ImageCarousel