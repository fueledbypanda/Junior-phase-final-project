const db = require("../db");
const axios = require("axios");

module.exports = function(server) {
  server.get("/api/school", (req, res, next) => {
    db.getSchool()
      .then(response => res.status(200).send(response))
      .catch(next);
  });

  server.post("/api/school", (req, res, next) => {
    console.log(req.body);
    db.createSchool(req.body)
      .then(response => res.status(200).send(response))
      .catch(next);
  });
};
