const correct = new Audio("/sounds/correct_anwer.mp3");
const wrong = new Audio("/sounds/wrong_answer.mp3");
const victory = new Audio("/sounds/victory.mp3");
const gameover = new Audio("/sounds/gameover.mp3");

export const sounds = {
  correct,
  wrong,
  victory,
  gameover,
};

export function playSound(sound: HTMLAudioElement) {
  sound.currentTime = 0;
  sound.play();
}
