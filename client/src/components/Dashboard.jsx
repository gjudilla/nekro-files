import React, { useState } from "react";
import Leaderboard from "./Leaderboard";
import GameClock from "./GameClock";
import CurrentTurn from "./CurrentTurn";
import ActiveLaws from "./ActiveLaws";
import NextTurn from "./NextTurn";
import PublicObjectives from "./PublicObjectives";
import GameState from "./GameState";
import StatusPhaseList from "./StatusPhaseList";

function Dashboard({ phase }) {
    const isActionPhase = phase === "status";
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <div className="col-start-1 row-start-1">
                <Leaderboard />
            </div>
            <div className="col-start-1 row-start-2">
                <ActiveLaws />
            </div>
            <div className="col-start-2 row-start-1 row-span-2">
                <GameState> 
                    <div className="flex-1 mb-4">
                        <GameClock />
                    </div>
                    {isActionPhase ? (
                    /* Content for Action Phase GameState */
                        <div className="col-span-1 row-span-2 flex flex-col gap-4">
                            
                            <div className="flex-1">
                                <CurrentTurn />
                            </div>
                            <div className="flex-1">
                                <NextTurn />
                        </div>
            </div>
            ) : (
                /* Content for Status Phase GameState */
                <StatusPhaseList phase={phase} />
            )}
                </GameState>
            </div>
            <div className="col-start-1 row-start-3 col-span-2">
                <PublicObjectives />
            </div>
                
        </div>
    )
}

export default Dashboard;