import React from 'react';

const BtnSlider = (props) => {
    return (
        <div onClick={props.moveSlide} className={props.direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            
        </div>
    );
};

export default BtnSlider;