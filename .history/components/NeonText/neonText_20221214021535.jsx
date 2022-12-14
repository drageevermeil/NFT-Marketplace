import React from "react";
import Style from './neonText.module.css'

function NeonText() {
    return (
        <div className={Style.signwrap}>
            <div className={Style.signword}>NF<span>он</span>овы<span>й</span> тек<span>ст</span></div>
        </div>
    )
}
export default NeonText;