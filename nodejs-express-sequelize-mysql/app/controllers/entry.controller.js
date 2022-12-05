const db = require("../models");
const Entry = db.entries;
const Op = db.Sequelize.Op;
// Create and Save a new Entry
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create an Entry
  const entry = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  // Save entry in the database
  Entry.create(entry)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the entry."
      });
    });
};
// Retrieve all entries from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Entry.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entries."
      });
    });
};
// Find a single Entry with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Entry.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find entry with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving entry with id=" + id
      });
    });
};
// Update an Entry by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Entry.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entry was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Entry with id=${id}. Maybe Entry was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Entry with id=" + id
      });
    });
};
// Delete an Entry with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Entry.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entry was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Entry with id=${id}. Maybe Entry was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entry with id=" + id
      });
    });
};
// Delete all Entries from the database.
exports.deleteAll = (req, res) => {
  Entry.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} entries were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all entries."
      });
    });
};
// Find all published Entries
exports.findAllPublished = (req, res) => {
  Entry.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entries."
      });
    });
};
