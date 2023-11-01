import React from 'react'
import MainCarosel from '../../Components/Homecarosal/MainCarosal'
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel'

 import { mens_kurta } from '../../../Data/mens_Kurta'
 const Home = () => {
  console.log(mens_kurta,"This")
  return (
    <div>
        <MainCarosel/>

        <div className='space-y-10 py-20'>
            <HomeSectionCarosel data = {mens_kurta}/>
           
        </div>
    </div>
  )
}

export default Home
