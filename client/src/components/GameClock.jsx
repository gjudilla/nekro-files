import React, { useState, useEffect } from "react";

function GameClock() {
    const [timer, setTimer] = useState(0); // time in seconds, starts at 0s
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000) // increments time every second
        }
        return () => clearInterval(interval); // cleanup interval on component unmount
    }, [isPaused])

    // convert time in seconds to HH:MM:SS format
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0")
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    };

    // function to pause timer manually
    const togglePause = () => {
        setIsPaused(!isPaused)
    }
    return (
        <div className="flex flex-col bg-black bg-opacity-25 p-4 rounded-lg overflow-hidden text-xl font-bold text-white" onClick={togglePause}>Round 2 - Status Phase <span className={isPaused ? 'blink' : ""}>{formatTime(timer)}</span></div>
    )
}

export default GameClock;
