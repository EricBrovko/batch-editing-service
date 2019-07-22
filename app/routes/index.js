const API_PATH_SUBROUTES = "/subroutes";

module.exports = app => {
  app.use("/batch", require("./" + API_PATH_SUBROUTES + "/batch"));
};
