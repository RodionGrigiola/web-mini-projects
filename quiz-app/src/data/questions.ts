import type { Question } from "../types/question";

export const questions: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answers: [
      { id: 1, text: "Hyper Text Markup Language" },
      { id: 2, text: "Home Tool Markup Language" },
      { id: 3, text: "Hyperlinks Text Main Language" },
      { id: 4, text: "Hyper Transfer Markup Language" },
    ],
    correctAnswerId: 1,
    points: 10,
  },
];
