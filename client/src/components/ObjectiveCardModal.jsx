import React, { useState } from 'react';
import { QUERY_OBJECTIVES } from '../utils/queries';
import { useQuery } from '@apollo/client';

function ObjectiveCardApp({ onSelect, onClose }) {
  const [selectedObjective, setSelectedObjective] = useState('');
  const { loading, data } = useQuery(QUERY_OBJECTIVES);

  let objectives = data?.objectives || [];

  const handleSelectChange = event => {
    const selectedObjective = objectives.find(obj => obj.name === event.target.value);
    setSelectedObjective(selectedObjective);
    onSelect(selectedObjective); // Pass the selected objective to the parent component
  };
  
  const handleDropdownClick = event => {
    event.stopPropagation(); // Prevent the event from propagating to parent elements
  };

  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(flase);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Select Objective</h1>
          <select
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
            value={selectedObjective.name}
            onChange={handleSelectChange}
            onClick={handleDropdownClick}
          >
            <option value="">Select an objective to display</option>
            {objectives.map(objective => (
              <option key={objective.name} value={objective.name}>
                {objective.name}
              </option>
            ))}
          </select>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSelectedObjective}
            >
              Select
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              closeModal={handleOnClose}
              visible={showModal}
            >
              Close
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default ObjectiveCardApp;
