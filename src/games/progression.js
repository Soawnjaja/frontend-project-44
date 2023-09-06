import { getRandomNumber, createProgression } from '../utils/mathOperators.js';

const gameData = 'What number is missing in the progression?';

const startProgressionGame = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(10, 20);

  const progression = createProgression(start, step, progressionLength);

  const randomIndex = getRandomNumber(1, progression.length - 1);
  const hiddenNumber = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = `${progression.join(' ')}`;

  return [question, hiddenNumber];
};

export { gameData, startProgressionGame };
