import React from "react";
import Style from './gifRun.module.css'
import Image from 'next/image';
import assets from '../../assets';


function GifRun (){
return(
    <div className={Style.gifRun_content}>
        <di
            <Image
            src={assets.giphy}
            objectFit="contain"
            alt='giphy'

            />
    </div>
)
}
export default GifRun;