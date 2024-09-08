import { create } from 'zustand';

interface Question {
  id: number;
  passed: boolean;
}

interface LearningState {
  questions: Question[];
  toggleQuestion: (id: number) => void;
  getProgress: () => [number, number];
}

export const useLearningStore = create<LearningState>((set, get) => ({
  questions: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    passed: false,
  })),

  toggleQuestion: (id: number) => {
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === id
          ? { ...question, passed: !question.passed }
          : question
      ),
    }));
  },

  getProgress: () => {
    const { questions } = get();
    const progress = questions.filter((question) => question.passed).length;
    return [progress, questions.length];
  },
}));
