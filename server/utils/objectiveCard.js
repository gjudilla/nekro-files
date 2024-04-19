import Objective from '../models/Objective.js';

const fetchObjectives = async () => {
    try {

        const objectivesFromDB = await Objective.find();

        const formattedObjectives = objectivesFromDB.map(objective => ({
            name: objective.name,
            description: objective.description,
            points: objective.points,
            image: objective.image
        }));

        return formattedObjectives;

        
    } catch (error) {
        console.error('Error fetching objective cards:', error);
        return [];
    }
};

export default fetchObjectives