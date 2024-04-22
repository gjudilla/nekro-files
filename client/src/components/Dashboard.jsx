// import React, { useState } from "react";
// import Leaderboard from "./Leaderboard";
// import GameClock from "./GameClock";
// import Turn from "./CurrentTurn";
// import ActiveLaws from "./ActiveLaws";
// import PublicObjectives from "./PublicObjectives";
// import GameState from "./GameState";
// import StatusPhaseList from "./StatusPhaseList";
// import HostGameModal from "./HostGameModal";

// function Dashboard({ phase }) {
//     const isActionPhase = phase === "action";

//     const [currentTurnTimer, setCurrentTurnTimer] = useState(0); // Timer for the current turn
//     const [isModalVisible, setModalVisible] = useState(true);
//     const [isGameHosted, setGameHosted] = useState(false); // Track whether the game has been hosted or not
//     const [playerFactions, setPlayerFactions] = useState(Array(3).fill({ name: '', icon: '' })); // Adding the state for player factions
//     const [currentFactionIndex, setCurrentFactionIndex] = useState(0); // Track the index of the current faction
//     const [nextFactionIndex, setNextFactionIndex] = useState(1); // Track the index of the next faction

//     const handleNextTurn = () => {
//         setCurrentFactionIndex(nextFactionIndex);
//         setNextFactionIndex((nextFactionIndex + 1) % playerFactions.length);
//         setCurrentTurnTimer(0);
//     };

//     const closeModal = () => {
//         setModalVisible(false);
//     };

//     const handleGameHosted = () => {
//         setGameHosted(true);
//         setModalVisible(false); // Close the modal after hosting the game
//     };

//     return (
//         <div>
//             {isModalVisible && <HostGameModal visible={isModalVisible} closeModal={closeModal} onGameHosted={handleGameHosted} playerFactions={playerFactions} setPlayerFactions={setPlayerFactions} />}
//             <div className="grid grid-cols-2 grid-rows-3 gap-4">
//                 <div className="col-start-1 row-start-1">
//                     <Leaderboard playerFactions={playerFactions} />
//                 </div>
//                 <div className="col-start-1 row-start-2">
//                     <ActiveLaws />
//                 </div>
//                 <div className="col-start-2 row-start-1 row-span-2">
//                     {isGameHosted && (
//                         <GameState>
//                             <div className="flex-1 mb-4">
//                                 <GameClock />
//                             </div>
//                             {isActionPhase ? (
//                                 /* Content for Action Phase GameState */
//                                 <div className="col-span-1 row-span-2 flex flex-col gap-4">
//                                     <div className="flex-1">
//                                         <Turn
//                                             type="Current"
//                                             timer={currentTurnTimer}
//                                             setTimer={setCurrentTurnTimer}
//                                             factionOne={playerFactions[currentFactionIndex]?.name || ''} // Pass the current faction's name
//                                             onNextTurn={handleNextTurn} // Pass the function to handle the end of the turn
//                                         />
//                                     </div>
//                                     <div className="flex-1">
//                                     <Turn 
//                                             type="Next" 
//                                             factionTwo={playerFactions[nextFactionIndex]?.name || ''} // Pass the next faction's name
//                                         />
//                                     </div>
//                                 </div>
//                             ) : (
//                                 /* Content for Status Phase GameState */
//                                 <StatusPhaseList phase={phase} />
//                             )}
//                         </GameState>
//                     )}
//                 </div>
//                 <div className="col-start-1 row-start-3 col-span-2">
//                     <PublicObjectives />
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Dashboard;

// import React, { useState } from "react";
// import Leaderboard from "./Leaderboard";
// import GameClock from "./GameClock";
// import Turn from "./CurrentTurn";
// import ActiveLaws from "./ActiveLaws";
// import PublicObjectives from "./PublicObjectives";
// import GameState from "./GameState";
// import StatusPhaseList from "./StatusPhaseList";
// import HostGameModal from "./HostGameModal";

// function Dashboard({ phase }) {
//     const isActionPhase = phase === "action";

//     const [currentTurnTimer, setCurrentTurnTimer] = useState(0); // Timer for the current turn
//     const [isModalVisible, setModalVisible] = useState(true);
//     const [isGameHosted, setGameHosted] = useState(false); // Track whether the game has been hosted or not
//     const [playerFactions, setPlayerFactions] = useState(Array(3).fill({ name: '', icon: '' })); // Adding the state for player factions
//     const [currentFactionIndex, setCurrentFactionIndex] = useState(0); // Track the index of the current faction
//     const [nextFactionIndex, setNextFactionIndex] = useState(1); // Track the index of the next faction
//     const [savedTime, setSavedTime] = useState(0); // Track the saved time

//     const handleNextTurn = () => {
//         setSavedTime(currentTurnTimer);
//         setCurrentFactionIndex(nextFactionIndex);
//         setNextFactionIndex((nextFactionIndex + 1) % playerFactions.length);
//         setCurrentTurnTimer(0);
//     };

//     const closeModal = () => {
//         setModalVisible(false);
//     };

//     const handleGameHosted = () => {
//         setGameHosted(true);
//         setModalVisible(false); // Close the modal after hosting the game
//     };

//     return (
//         <div>
//             {isModalVisible && <HostGameModal visible={isModalVisible} closeModal={closeModal} onGameHosted={handleGameHosted} playerFactions={playerFactions} setPlayerFactions={setPlayerFactions} />}
//             <div className="grid grid-cols-2 grid-rows-3 gap-4">
//                 <div className="col-start-1 row-start-1">
//                     <Leaderboard playerFactions={playerFactions} />
//                 </div>
//                 <div className="col-start-1 row-start-2">
//                     <ActiveLaws />
//                 </div>
//                 <div className="col-start-2 row-start-1 row-span-2">
//                     {isGameHosted && (
//                         <GameState>
//                             <div className="flex-1 mb-4">
//                                 <GameClock />
//                             </div>
//                             {isActionPhase ? (
//                                 /* Content for Action Phase GameState */
//                                 <div className="col-span-1 row-span-2 flex flex-col gap-4">
//                                     <div className="flex-1">
//                                         <Turn
//                                             type="Current"
//                                             timer={currentTurnTimer}
//                                             setTimer={setCurrentTurnTimer}
//                                             factionOne={playerFactions[currentFactionIndex]?.name || ''} // Pass the current faction's name
//                                             onNextTurn={handleNextTurn} // Pass the function to handle the end of the turn
//                                             savedTime={savedTime}
//                                             setSavedTime={setSavedTime}
//                                         />
//                                     </div>
//                                     <div className="flex-1">
//                                     <Turn 
//                                             type="Next" 
//                                             factionTwo={playerFactions[nextFactionIndex]?.name || ''} // Pass the next faction's name
//                                         />
//                                     </div>
//                                 </div>
//                             ) : (
//                                 /* Content for Status Phase GameState */
//                                 <StatusPhaseList phase={phase} />
//                             )}
//                         </GameState>
//                     )}
//                 </div>
//                 <div className="col-start-1 row-start-3 col-span-2">
//                     <PublicObjectives />
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Dashboard;

import React, { useState } from "react";
import Leaderboard from "./Leaderboard";
import GameClock from "./GameClock";
import Turn from "./CurrentTurn";
import ActiveLaws from "./ActiveLaws";
import PublicObjectives from "./PublicObjectives";
import GameState from "./GameState";
import StatusPhaseList from "./StatusPhaseList";
import HostGameModal from "./HostGameModal";

function Dashboard({ phase }) {
    const isActionPhase = phase === "action";

    const [currentTurnTimer, setCurrentTurnTimer] = useState(0); // Timer for the current turn
    const [isModalVisible, setModalVisible] = useState(true);
    const [isGameHosted, setGameHosted] = useState(false); // Track whether the game has been hosted or not
    const [playerFactions, setPlayerFactions] = useState(Array(3).fill({ name: '', icon: '' })); // Adding the state for player factions
    const [currentFactionIndex, setCurrentFactionIndex] = useState(0); // Track the index of the current faction
    const [nextFactionIndex, setNextFactionIndex] = useState(1); // Track the index of the next faction
    const [savedTime, setSavedTime] = useState(0); // Track the saved time

    const handleNextTurn = () => {
        setSavedTime(currentTurnTimer);
        setCurrentFactionIndex(nextFactionIndex);
        setNextFactionIndex((nextFactionIndex + 1) % playerFactions.length);
        setCurrentTurnTimer(0);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleGameHosted = () => {
        setGameHosted(true);
        setModalVisible(false); // Close the modal after hosting the game
    };

    return (
        <div>
            {isModalVisible && <HostGameModal visible={isModalVisible} closeModal={closeModal} onGameHosted={handleGameHosted} playerFactions={playerFactions} setPlayerFactions={setPlayerFactions} />}
            <div className="grid grid-cols-2 grid-rows-3 gap-4">
                <div className="col-start-1 row-start-1">
                    <Leaderboard playerFactions={playerFactions} />
                </div>
                <div className="col-start-1 row-start-2">
                    <ActiveLaws />
                </div>
                <div className="col-start-2 row-start-1 row-span-2">
                    {isGameHosted && (
                        <GameState>
                            <div className="flex-1 mb-4">
                                <GameClock />
                            </div>
                            {isActionPhase ? (
                                /* Content for Action Phase GameState */
                                <div className="col-span-1 row-span-2 flex flex-col gap-4">
                                    <div className="flex-1">
                                        <Turn
                                            type="Current"
                                            timer={currentTurnTimer}
                                            setTimer={setCurrentTurnTimer}
                                            factionOne={playerFactions[currentFactionIndex]?.name || ''} // Pass the current faction's name
                                            onNextTurn={handleNextTurn} // Pass the function to handle the end of the turn
                                            savedTime={savedTime}
                                            setSavedTime={setSavedTime}
                                        />
                                    </div>
                                    <div className="flex-1">
                                    <Turn 
                                            type="Next" 
                                            timer={0} // Set initial timer to 0
                                            factionTwo={playerFactions[nextFactionIndex]?.name || ''} // Pass the next faction's name
                                            savedTime={savedTime}
                                            setSavedTime={setSavedTime}
                                        />
                                    </div>
                                </div>
                            ) : (
                                /* Content for Status Phase GameState */
                                <StatusPhaseList phase={phase} />
                            )}
                        </GameState>
                    )}
                </div>
                <div className="col-start-1 row-start-3 col-span-2">
                    <PublicObjectives />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
