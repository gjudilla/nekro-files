import Faction from '../models/Faction.js';

const fetchFactions = async () => {
    try {

        const factionsFromDB = await Faction.find();

        const formattedFactions = factionsFromDB.map(faction => ({
            name: faction.name,
            icon: faction.icon
        }));

        return formattedFactions;

        
    } catch (error) {
        console.error('Error fetching faction cards:', error);
        return [];
    }
};

export default fetchFactions