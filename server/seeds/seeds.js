import mongoose from 'mongoose';
import Objective from '../models/Objective.js';
import Faction from '../models/Faction.js'; 
import Law from '../models/Law.js';

import objectiveCardData from './objectiveCardData.json' assert {type : "json"};
import factionIconData from './factionIconData.json' assert {type : "json"};
import lawCardData from './lawCardData.json' assert {type : "json"};

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

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