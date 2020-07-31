const questions = require('../../data/questions.json');
const alternatives = require('../../data/alternatives.json');

module.exports = () => {
  const find = async (filter = {}) => {
    const [question] = questions.filter((item) => item.position === Number(filter.position));
    const alternativesList = alternatives.filter(
      (item) => item.question_id === Number(question.id),
    );

    alternativesList.forEach(
      (item) => delete item.id && delete item.question_id,
    );

    const alternativesQuestion = {
      question: question.question,
      alternatives: { ...alternativesList },
    };

    return alternativesQuestion;
  };

  return { find };
};
