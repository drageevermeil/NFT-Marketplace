import React from "react";
import Style from './gifRun.module.css'
import Image from 'next/image';
import assets from '../../assets';


function GifRun (){
return(
    <div className={Style.marqueecontainer}>
        <div className={Style.marquee}>
            
            <I
            <Image
            src={assets.giphy}
            objectFit="contain"
            alt='giphy'
             />
                 </div>
            </div>
)
}
export default GifRun;