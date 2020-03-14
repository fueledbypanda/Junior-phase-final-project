module.exports = function(server) {
  require("./student")(server);
  require("./school")(server);
  // require("./search")(server);
};
