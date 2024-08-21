import React from "react";
import PropTypes from "prop-types";


export const SimpleCounter = (props) => {
    return (
        <div className="bigCounter d-flex justify-content-center align-items-center bg-black text-light">
            <div className="Calendar col-1 bg-dark g-3 m-1">
                <h1>
                <i className="fa-regular fa-clock"></i>
                </h1>
            </div>
            <div className="four col-1 bg-dark g-3 m-1 py-2">{props.digitFour % 10}</div>
            <div className="three col-1 bg-dark g-3 m-1 py-2">{props.digitThree % 10}</div>
            <div className="two col-1 bg-dark g-3 m-1 py-2">{props.digitTwo % 10}</div>
            <div className="one col-1 bg-dark g-3 m-1 py-2">{props.digitOne % 10}</div>
        </div>

    );
    
};

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  };


{/* <i class="fa-regular fa-clock"></i> */}