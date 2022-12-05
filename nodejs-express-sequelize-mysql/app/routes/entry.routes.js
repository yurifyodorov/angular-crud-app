module.exports = app => {
  const entries = require("../controllers/entry.controller.js");
  var router = require("express").Router();
  // Create a new Entry
  router.post("/", entries.create);
  // Retrieve all Entries
  router.get("/", entries.findAll);
  // Retrieve all published Entries
  router.get("/published", entries.findAllPublished);
  // Retrieve a single Entry with id
  router.get("/:id", entries.findOne);
  // Update an Entry with id
  router.put("/:id", entries.update);
  // Delete an Entry with id
  router.delete("/:id", entries.delete);
  // Delete all Entries
  router.delete("/", entries.deleteAll);
  app.use('/api/entries', router);
};
