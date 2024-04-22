import React, { useState, useEffect } from "react";

function GameClock() {
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

    // function to pause or play the timer
    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="bg-gray-500 p-4 h-full flex items-center justify-between">
            <span className="text-xl font-bold text-white">Action Phase <span className={isPaused ? 'blink' : ""}>{formatTime(timer)}</span></span>
            <button onClick={togglePause} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                {isPaused ? "▶️" : "||"}
            </button>
        </div>
    );
}

export default GameClock;
