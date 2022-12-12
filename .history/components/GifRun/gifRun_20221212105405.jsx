import React from "react";
import Style from './gifRun.module.css'
import Image from 'next/image';
import giphy from '../assets';


function GifRun (){
return(
    <div className={Style.gifRun_content}>
            <Image
            src={assets.giphy}
            objectFit="contain"
            alt='gip'

            />
    </div>
)
}
export default GifRun;