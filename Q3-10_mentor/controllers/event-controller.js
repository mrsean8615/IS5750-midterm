const Event = require("../models/event-model");

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.render("events", { title: "Events", events });
  } catch (err) {
    console.log(err);
  }
};
