import React, { useState, useEffect } from "react";

function CurrentTurn() {
    const [timer, setTimer] = useState(0); // time in seconds, starts at 0s
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000); // increments time every second
        }
        return () => clearInterval(interval); // cleanup interval on component unmount
    }, [isPaused]);

    // convert time in seconds to HH:MM:SS format
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    // function to pause timer manually
    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="bg-black bg-opacity-25 p-4 h-full rounded-lg">
            <h2 className="text-xl font-bold text-white">
                Current Turn
            </h2>
            <div className="flex justify-around items-center">
                <button className="rounded-lg bg-blue-400 p-4 text-3xl">Politics | 4</button>
                <button className="rounded-lg bg-blue-400 p-4 text-3xl" onClick={togglePause}>
                    <span className={isPaused ? 'blink' : ""}>{formatTime(timer)}</span>
                </button>
            </div>
        </div>
    );
}

export default CurrentTurn;
