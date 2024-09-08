'use client';
import React, { useState } from 'react';

import styles from './QuestionBox.module.css';
import { QuestionItem } from '@/features/question/ui';

const questions = Array.from({ length: 20 }, (_, i) => i + 1); // массив с номерами вопросов

export const QuestionBox = () => {
  const [checkedQuestions, setCheckedQuestions] = useState<number[]>([]);

  const handleCheck = (number: number) => {
    if (checkedQuestions.includes(number)) {
      setCheckedQuestions(checkedQuestions.filter((q) => q !== number));
    } else {
      setCheckedQuestions([...checkedQuestions, number]);
    }
  };
  return (
    <div className={styles.box}>
      {questions.map((questionNumber) => (
        <QuestionItem
          key={questionNumber}
          number={questionNumber}
          isChecked={checkedQuestions.includes(questionNumber)}
          onClick={handleCheck}
        />
      ))}
    </div>
  );
};
