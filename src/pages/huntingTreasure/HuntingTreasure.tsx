import React, { useState } from 'react';
import { FloatLabel, InputText, Button } from './../../components/Prime';
import test from "./../../assets/videos/test.mp4"
import blas from "./../../assets/images/blas-hoy.jpg"
import HuntingTreasureImage from './../../assets/images/hunting-treasure.jpg';

interface TreasureLevel {
  id: number;
  title: string;
  description: string;
  password: string;
  videoUrl: string;
  poster: string;
  hint: string;
  unlockedMessage: string;
}

interface Attempts {
  [key: number]: number;
}

const treasureHuntData: TreasureLevel[] = [
  {
    id: 1,
    title: "First Clue",
    description: "What was the date of ",
    password: "1503",
    videoUrl: test,
    poster: blas,
    hint: "Remember that special spring day...",
    unlockedMessage: "¡Muy bien amor! Here's your first gift clue..."
  },
  {
    id: 2,
    title: "Second Challenge",
    description: "What's my favorite ice cream flavor?",
    password: "chocolate",
    videoUrl: test,
    poster: blas,
    hint: "Think cold and sweet...",
    unlockedMessage: "¡Excelente! You're getting closer to your gifts..."
  },
  {
    id: 3,
    title: "Final Mystery",
    description: "Where was our first kiss?",
    password: "park",
    videoUrl: test,
    poster: blas,
    hint: "Under the stars...",
    unlockedMessage: "¡Felicitaciones! You've unlocked all your birthday gifts!"
  }
];

const HuntingTreasure = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [attempts, setAttempts] = useState<Attempts>({});
  const [showHint, setShowHint] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const currentChallenge = treasureHuntData[currentLevel];
    if (inputValue.toLowerCase() === currentChallenge.password.toLowerCase()) {
      setCurrentLevel(prev => prev + 1);
      setInputValue('');
      setError('');
      setShowHint(false);
    } else {
      setError('Incorrect password, try again!');
      setAttempts(prev => ({
        ...prev,
        [currentLevel]: (prev[currentLevel] || 0) + 1
      }));
      
      if (attempts[currentLevel] >= 2) {
        setShowHint(true);
      }
    }
  };

  if (!gameStarted) {
    return (
      <main className="h-full flex flex-column align-items-center justify-content-between my-5 w-11 m-auto">
        <section>
          <div className="text-center">
            <img 
              src={HuntingTreasureImage} 
              alt="Welcome to Treasure Hunt" 
              className="w-full max-w-lg mb-4 rounded-lg shadow-lg"
            />
            <h1 className="text-3xl font-bold mb-4">¡Bienvenida a tu Búsqueda del Tesoro!</h1>
            <p className="mb-6">Prepárate para una aventura llena de sorpresas y regalos, claro que yes...</p>
          </div>
        </section>
        <Button 
          label="¡Comenzar la Aventura, y vamooos por esos regalos!" 
          className="p-button-lg mb-5"
          onClick={() => setGameStarted(true)}
        />
      </main>
    );
  }

  if (currentLevel >= treasureHuntData.length) {
    return (
      <main className="p-4">
        <h2 className="text-2xl font-bold text-center mb-4">¡Feliz Cumpleaños!</h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="mb-4">You've completed all the challenges!</p>
        </div>
      </main>
    );
  }

  const currentChallenge = treasureHuntData[currentLevel];

  return (
    <main className="p-4 h-full flex flex-column justify-content-between">
      <section className='h-full'>
        <h2 className="text-2xl font-bold text-center mb-4">Hunting Treasure</h2>
        <section className="max-w-lg mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{currentChallenge.title}</h3>
            <video 
              className="w-full h-48 object-cover mb-4 rounded"
              src={currentChallenge.videoUrl}
              controls
              poster={currentChallenge.poster}
            />
            <form onSubmit={handlePasswordSubmit} className="flex flex-column gap-3">
              <FloatLabel>
                <InputText
                  id="password-input"
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                  className="w-full h-fit"
                />
                <label htmlFor="password-input">{currentChallenge.description}</label>
              </FloatLabel>
              
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
              
              {showHint && (
                <p className="text-blue-500 text-sm mt-2">
                  Hint: {currentChallenge.hint}
                </p>
              )}
              
              <Button
                type="submit"
                className="w-full mb-4"
                label="Respuesta..."
              />
            </form>
          </div>
      </section>
      </section>
      <section>
        <p className="text-sm text-gray-600 text-center">
          Level {currentLevel + 1} of {treasureHuntData.length}
        </p>
      </section>
    </main>
  );
};

export default HuntingTreasure;