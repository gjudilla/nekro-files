// import React, { useState, useEffect } from "react";
// import CurrentTurn from "./CurrentTurn";
// import NextTurn from "./NextTurn";

// function Game() {
//     const [currentTurn, setCurrentTurn] = useState("Current");
//     const [timer, setTimer] = useState(0); // Timer for the paused time
//     const [isPaused, setIsPaused] = useState(true); // Initially paused until Next Turn becomes Current Turn

//     // Effect to start the timer when Next Turn becomes Current Turn
//     useEffect(() => {
//         let interval;
//         if (currentTurn === "Current" && !isPaused) {
//             interval = setInterval(() => {
//                 setTimer((prevTime) => prevTime + 1);
//             }, 1000); // increments time every second
//         }
//         return () => clearInterval(interval); // cleanup interval on component unmount or when Next Turn becomes Current Turn
//     }, [currentTurn, isPaused]);

//     // Function to handle the end of the current turn
//     const handleEndTurn = () => {
//         setCurrentTurn("Current");
//         setIsPaused(false); // Start the timer when Next Turn becomes Current Turn
//     };

//     // Function to handle the start of the next turn
//     const handleNextTurn = () => {
//         setCurrentTurn("Next");
//         setIsPaused(true); // Pause the timer when Current Turn becomes Next Turn
//     };

//     return (
//         <div>
//             {currentTurn === "Current" ? (
//                 <CurrentTurn onNextTurn={handleNextTurn} />
//             ) : (
//                 <NextTurn onEndTurn={handleEndTurn} timer={timer} />
//             )}
//         </div>
//     );
// }

// export default Game;

import React, { useState } from "react";
import Turn from "./CurrentTurn";

function Game() {
    const [currentTurn, setCurrentTurn] = useState("Current");
    const [timer, setTimer] = useState(0); // Timer for the paused time

    const handleEndTurn = () => {
        setCurrentTurn("Next");
        setTimer(0); // Reset timer when the turn ends
    };

    return (
        <div>
            <Turn
                type={currentTurn}
                onNextTurn={() => setCurrentTurn("Next")}
                onEndTurn={handleEndTurn}
                timer={timer}
                setTimer={setTimer}
            />
        </div>
    );
}

export default Game;
