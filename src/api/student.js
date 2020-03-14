const db = require("../db");
const axios = require("axios");

module.exports = function(server) {
  server.get("/api/student", (req, res, next) => {
    db.getStudent()
      .then(response => res.status(200).send(response))
      .catch(next);
  });

  server.post("/api/student", (req, res, next) => {
    db.createStudent(req.body)
      .then(response => res.status(200).send(response))
      .catch(next);
  });
};
