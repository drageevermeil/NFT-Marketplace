import React from "react";
import Style from './gifRun.module.css'
import Image from 'next/image';
import assets from '../../assets';


function GifRun (){
return(
    <div className={Style.gifRun_content}>
            <Image
            src={assets.giphy}
            cl
            objectFit="contain"
            alt='giphy'

            />
    </div>
)
}
export default GifRun;