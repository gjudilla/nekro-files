import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_FACTIONS = gql`
query GetFactions {
    factions {
        _id
        name
        icon
    }
}
`;

const HostGameModal = ({ visible, closeModal, onGameHosted, playerFactions, setPlayerFactions }) => {
    const navigate = useNavigate();
    const [numberOfPlayers, setNumberOfPlayers] = useState(3);

    const { loading, error, data } = useQuery(GET_FACTIONS);
    const factions = data?.factions || [];

    if (!visible) return null;

    const handleSliderChange = (event) => {
        const newNumberOfPlayers = Number(event.target.value);
        setNumberOfPlayers(newNumberOfPlayers);

        setPlayerFactions(prevFactions => {
            const newFactions = prevFactions.slice(0, newNumberOfPlayers); // Keep only the selections for the current number of players
            // If the new number is greater than the current length, add empty strings for new players
            // for (let i = prevFactions.length; i < newNumberOfPlayers; i++) {
            //     newFactions.push('');
            // }
            while (newFactions.length < newNumberOfPlayers) {
                newFactions.push({ name: '', icon: '' }); // Ensure empty objects for new players
            }
            return newFactions;
        });
    };

    const handleFactionChange = (index, selectedName) => {
        const faction = factions.find(faction => faction.name === selectedName);
        const updatedFactions = [...playerFactions];
        updatedFactions[index] = faction || { name: '', icon: '' }; // Reset if no faction is found
        setPlayerFactions(updatedFactions);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the API request to create a game session here
        // Send playerFactions as part of our game data
        console.log('Hosing game with factions:', playerFactions); // List of players (factions) in speaker order
        onGameHosted();
        closeModal();
        navigate('/dashboard'); // Redirect to dashboard after form submission
    };

    // Filters out factions that are already selected
    const getAvailableFactionsForPlayer = (currentIndex) => {
        return factions.filter(faction =>
            // Check if the faction is not selected by any other player
            !playerFactions.some((f, idx) => idx !== currentIndex && f.name === faction.name)
        );
    };

    if (loading) return <p>Loading factions...</p>;
    if (error) return `Error! ${error.message}`;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-45"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Host a Game</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="gameName" className="block text-sm font-medium text-gray-700">Number of Players: {numberOfPlayers}</label>
                                        <input
                                            type="range"
                                            min="3"
                                            max="8"
                                            value={numberOfPlayers}
                                            onChange={handleSliderChange}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            required
                                        />
                                        {playerFactions.map((selectedFaction, index) => (
                                            <div key={index} >
                                                <label htmlFor={`faction-${index}`}>
                                                    {index === 0 ? 'Speaker' : `Player ${index + 1}`}
                                                </label>
                                                <select
                                                    className='flex justify-between'
                                                    value={selectedFaction.name || ''}
                                                    onChange={(e) => handleFactionChange(index, e.target.value)}>
                                                    <option value=''>Select Faction</option>
                                                    {getAvailableFactionsForPlayer(index).map(faction => (
                                                        <option key={faction._id} value={faction.name}>
                                                            {faction.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>

                                    {/* <div className="mb-4">
                                        <label htmlFor="gameType" className="block text-sm font-medium text-gray-700">Speaker</label>
                                        <input
                                            type="text"
                                            name="gameType"
                                            id="gameType"
                                            value={gameData.gameType}
                                            onChange={handleInputChange}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            required
                                        />
                                    </div> */}

                                    <div className="text-right">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-200 text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Host Game
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostGameModal;

