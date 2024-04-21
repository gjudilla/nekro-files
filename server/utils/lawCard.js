import Law from '../models/Law.js';

const fetchLaws = async () => {
    try {

        const lawsFromDB = await Law.find();

        const formattedLaws = lawsFromDB.map(law => ({
            name: law.name,
            effect: law.effect,
            icon: law.icon
        }));

        return formattedLaws;

        
    } catch (error) {
        console.error('Error fetching law cards:', error);
        return [];
    }
};

export default fetchLaws