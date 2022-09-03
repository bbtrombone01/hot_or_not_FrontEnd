import React from "react";

const Image =(props) =>{

    return <div className="thermoImageParent">
        <img 
            className="thermoImage"
            crossOrigin= "anonymous"
            src={`http://localhost:8000/${props.image}`} alt="testing" />
    </div>
}


export default Image