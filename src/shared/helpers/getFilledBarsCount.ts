export const getFilledBarsCount = (
  totalQuestions: number,
  answeredQuestions: number
): number => {
  const questionsPerBar = totalQuestions / 7; // Сколько вопросов соответствует одной полоске
  const filledBars = answeredQuestions / questionsPerBar; // Количество полосок, которые должны быть заполнены

  if (filledBars < 6) {
    return Math.ceil(filledBars); // Округляем до ближайшего целого значения, если меньше 6 полосок
  } else if (filledBars >= 7) {
    return 7; // Возвращаем максимум 7 полосок
  } else {
    return 6; // Возвращаем 6, если заполнено более 6 полосок, но меньше 7
  }
};
