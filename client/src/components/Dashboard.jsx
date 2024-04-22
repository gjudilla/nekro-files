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

    const handleNextTurn = () => {
        setCurrentTurnTimer(0); // Reset the timer when switching to the next turn
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
            {isModalVisible && <HostGameModal visible={isModalVisible} closeModal={closeModal} onGameHosted={handleGameHosted} />}
            <div className="grid grid-cols-2 grid-rows-3 gap-4">
                <div className="col-start-1 row-start-1">
                    <Leaderboard />
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
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Turn type="Next" onEndTurn={handleNextTurn} />
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

