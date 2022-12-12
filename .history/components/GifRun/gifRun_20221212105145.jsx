import React from "react";
import Style from './gifRun.module.css'

function GifRun (){
return(
    <div className={Style.gifRun_content}>
            <Image
            src={assets.giphy}
            objectFit="contain"

            />
    </div>
)
}
export default GifRun;