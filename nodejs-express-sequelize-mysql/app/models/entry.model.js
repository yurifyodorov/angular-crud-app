module.exports = (sequelize, Sequelize) => {
  const Entry = sequelize.define("entry", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Entry;
};
