const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(expressLayouts);

// Routes
const homeRoute = require("./routes/home-route");
const trainerRoutes = require("./routes/trainer-routes");
const eventRoutes = require("./routes/event-routes");

app.use("/", homeRoute);
app.use("/about", homeRoute);
app.use("/trainers", trainerRoutes);
app.use("/events", eventRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
