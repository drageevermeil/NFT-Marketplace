import React from "react";
import Style from './gifRun.module.css'

function GifRun (){
return(
    <div className={Style.GifRun}>
            <Image
            src={assets.giphy}
            />
    </div>
)
}
export default GifRun;