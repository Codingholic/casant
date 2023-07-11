import React, { useRef }  from "react"
import "./HomePageSecontion2.css"
import Swipers from "./Swipers"
// import Swipers from "./Swipers"
const HomePageSecontion2 = () => {
    const scollToRef = useRef();
    return <div ref={scollToRef} className="HomePageSecontion2">
                
            
        <div className="carousle_images">
         <Swipers />
        </div>
    </div>


}

export default HomePageSecontion2