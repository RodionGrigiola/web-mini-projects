const HIGH_SCORE_KEY = "quiz_high_score";

export function getHighScore(): number {
  const value = localStorage.getItem(HIGH_SCORE_KEY);
  return value ? JSON.parse(value) : 0;
}

export function setHighScore(score: number) {
  localStorage.setItem(HIGH_SCORE_KEY, JSON.stringify(score));
}
