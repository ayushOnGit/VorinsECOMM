
import React ,{ useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../Homecarosal/HomeSectionCard/HomeSectionCard';
import {Button} from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { mens_kurta } from '../../../Data/mens_Kurta';
 
 



const HomeSectionCarosel = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4.5 },
    };
// console.log(mens_kurta)
    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)

    const syncActiveindex =  ({item}) => setActiveIndex(item)
    const items = data.slice(0,10).map((item) => <HomeSectionCard product = {item}/>)
   
  return (
 <div className='realtive px-4  lg:px-8'>
    <h2 className='text-2xl font-extrabold text-gray-800 py-5'> </h2>
      <div className="relative p-5">
     <AliceCarousel
    items={items} 
    disableButtonsControls
    disableDotsControls
    
     
    responsive={responsive}
    onSlideChange={syncActiveindex}
    activeIndex={activeIndex}

/>
  {activeIndex !== items.length - 5}{<Button  onClick={slideNext} variant = "contained"className='z-50' 
sx ={{position: 'absolute' , top : "8rem" ,right :"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label='next'><KeyboardArrowLeftIcon 
sx = {{transform : "rotate(90deg)", color : "black"}}/></Button>}


<Button  onClick={slidePrev} variant = "contained"className='z-50' 
sx ={{position: 'absolute' , top : "8rem" ,left :"0rem", transform:"translateX(50%) rotate(-90deg)", 
bgcolor:"white"}} aria-aria-label='next'><KeyboardArrowLeftIcon 
sx = {{transform : "rotate(90deg)", color : "black"}}/></Button>
   </div>
 </div>
  )
}

export default HomeSectionCarosel