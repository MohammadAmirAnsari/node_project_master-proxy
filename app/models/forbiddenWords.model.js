module.exports = (sequelize, Sequelize) => {
  const ForbiddenWords = sequelize.define("forbidden_words", {
    word: {
      type: Sequelize.STRING,
    },
  });

  return ForbiddenWords;
};
//
