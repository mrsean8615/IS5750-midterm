const sequelize = require("./database");

const { configModelRelationships } = require("./model-config");

const Trainer = require("../models/trainer-model");
const trainerData = require("../data/trainers.json");

const Event = require("../models/event-model");
const eventData = require("../data/events.json");

// configModelRelationships();

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log("SUCCESS!", result);
  })
  .then(() => {
    return Trainer.bulkCreate(trainerData);
  })
  .then(() => {
    return Event.bulkCreate(eventData);
  })
  .catch((err) => {
    console.log(err);
  });
