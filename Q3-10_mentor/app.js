const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const modelConfig = require("./util/model-config");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(expressLayouts);

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Routes
const homeRoute = require("./routes/home-route");
const trainerRoutes = require("./routes/trainer-routes");
const eventRoutes = require("./routes/event-routes");
const courseRoutes = require("./routes/course-routes");
const contactRoutes = require("./routes/contact-routes");

app.use("/", homeRoute);
app.use("/about", homeRoute);
app.use("/trainers", trainerRoutes);
app.use("/events", eventRoutes);
app.use("/courses", courseRoutes);  
app.use("/contacts", contactRoutes);

modelConfig.configModelRelations();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
