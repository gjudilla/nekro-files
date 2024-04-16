const mongoose = require('mongoose');
const Objective = require('../models/Objective');
const Faction = require('../models/Faction'); // Assuming you have Faction and Law models
const Law = require('../models/Law');

const objectiveCardData = require('./objectiveCardData.json');
const factionIconData = require('./factionIconData.json');
const lawCardData = require('./lawCardData.json');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data (optional)
    await Promise.all([
      Objective.deleteMany(),
      Faction.deleteMany(),
      Law.deleteMany(),
    ]);

    // Seed data
    await Promise.all([
      Objective.create(objectiveCardData),
      Faction.create(factionIconData),
      Law.create(lawCardData),
    ]);

    console.info('Seeding complete! 🌱');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();






























// const db = require('../config/connection');
// const { Faction, Law, Objective } = require('../models');


// const objectiveCardData = require('./objectiveCardData.json');
// const factionIconData = require('./factionIconData.json')
// const lawCardData = require('./lawCardData.json')


// db.once(open, async () => {


//   await Objective.create(objectiveCardData);
//   await Faction.create(factionIconData);
//   await Law.create(lawCardData);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });

// seedDatabase();