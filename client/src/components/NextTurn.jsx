import React from "react";

function NextTurn({ onEndTurn, timer }) {
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="bg-gray-600 p-4 h-full">
            <h2 className="text-xl font-bold text-white">
                Next Turn
            </h2>
            <div className="flex justify-around items-center">
                <button className="rounded-lg bg-blue-400 p-4 text-3xl" onClick={onEndTurn}>
                    END OF TURN!!
                </button>
                <div className="rounded-lg bg-blue-400 p-4 text-3xl">
                    <span>{formatTime(timer)}</span>
                </div>
            </div>
        </div>
    );
}

export default NextTurn;

