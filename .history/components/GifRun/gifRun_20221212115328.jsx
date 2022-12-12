import React from "react";
import Style from './gifRun.module.css'
import Image from 'next/image';
import assets from '../../assets';


function GifRun (){
return(
    <div className={Style.marqueecontainer}>
        <Image
            src={assets.giphyportal}
            className={}
            />
        <div className={Style.marquee}>
            
            
            <Image
            src={assets.giphy}
            objectFit="contain"
            alt='giphy'
             />
                 </div>
                 {/* <Image
            src={assets.giphyportal}
            /> */}
            </div>
)
}
export default GifRun;