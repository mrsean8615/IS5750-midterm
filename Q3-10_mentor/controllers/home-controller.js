const Trainer = require("../models/trainer-model");

exports.getHome = (req, res) => {
  res.render("index", { title: "Home" });
};

exports.getAbout = (req, res) => {
  res.render("about", { title: "About" });
};

exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.findAll();
    res.render("trainers", { title: "Trainers", trainers });
  } catch (err) {
    console.log(err);
  }
};
