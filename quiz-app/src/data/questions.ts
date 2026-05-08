import type { Question } from "../types/question";

export const questions: Question[] = [
  {
    id: 1,
    question: "What does React primarily use to manage UI updates?",
    answers: [
      { id: 1, text: "Virtual DOM" },
      { id: 2, text: "Real DOM" },
      { id: 3, text: "Shadow DOM" },
      { id: 4, text: "Canvas API" },
    ],
    correctAnswerId: 1,
    points: 10,
  },

  {
    id: 2,
    question: "Which hook is used for state in functional components?",
    answers: [
      { id: 1, text: "useEffect" },
      { id: 2, text: "useState" },
      { id: 3, text: "useRef" },
      { id: 4, text: "useMemo" },
    ],
    correctAnswerId: 2,
    points: 10,
  },

  {
    id: 3,
    question: "What does TypeScript add to JavaScript?",
    answers: [
      { id: 1, text: "Styling system" },
      { id: 2, text: "Database layer" },
      { id: 3, text: "Static typing" },
      { id: 4, text: "Routing system" },
    ],
    correctAnswerId: 3,
    points: 10,
  },

  {
    id: 4,
    question: "What is useReducer mainly used for?",
    answers: [
      { id: 1, text: "Fetching data" },
      { id: 2, text: "Complex state logic" },
      { id: 3, text: "Styling components" },
      { id: 4, text: "Routing pages" },
    ],
    correctAnswerId: 2,
    points: 10,
  },

  {
    id: 5,
    question: "What is the correct way to pass props?",
    answers: [
      { id: 1, text: "<Component props=value />" },
      { id: 2, text: "<Component {value} />" },
      { id: 3, text: "<Component:value />" },
      { id: 4, text: "<Component value={value} />" },
    ],
    correctAnswerId: 4,
    points: 10,
  },
];
