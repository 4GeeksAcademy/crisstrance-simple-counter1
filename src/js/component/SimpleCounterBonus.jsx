import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


export const SimpleCounterBonus = () => {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);
    const [ status, setStatus] = useState({
        title: 'Clock',
        color: 'primary',
        icon: <i className="fa-regular fa-clock"></i>
    })

    const handleButton = () => {
      setRunning(!running)
      setStatus({icon: <i className="fa-regular fa-clock"></i>, title: 'Chronometer', color: 'success'})
    }
    const handleReset = () => {
      setCounter(0);
    }

    useEffect(() => {
        if (running) {
            const newInterval = setInterval(() => setCounter(counter => counter + 1), 100)
            return () => clearInterval(newInterval)

        }
    },[running])
    return (
        <div className="container">
            <h1 className={`text-${status.color}`}>{status.title}</h1>
            <div className="bigCounter d-flex justify-content-center align-items-center bg-black text-light">
                <div className="Calendar col-1 bg-dark g-3 m-1">
                    <h1>
                        {status.icon}
                    </h1>
                </div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 100000000 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 10000000 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 1000000 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 100000 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 10000 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 1000 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 100 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">,</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter / 10 % 10)}</div>
                <div className="col-1 bg-dark g-3 m-1 py-2">{Math.floor(counter % 10)}</div>

            </div>
            <div className="container">
                <button onClick={handleButton} type="button" class="btn btn-primary btn-sm">
                    {running ? 'Pause' : counter == 0 ? 'Start' : 'Continue'}
                </button>
                <button onClick={handleReset} type="button" class="btn btn-danger btn-sm " disabled={running ? true : false }>
                    Reset
                </button>
            </div>
        </div>

    );

};
