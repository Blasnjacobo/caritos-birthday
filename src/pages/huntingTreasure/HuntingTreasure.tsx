import React, { useState } from 'react';
import { FloatLabel, InputText, Button } from './../../components/Prime';
import test from "./../../assets/videos/test.mp4"
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
    title: "Primer regalito",
    description: "Pon acá la respuesta",
    password: "album",
    videoUrl: test,
    poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/huntingTreasure/imagenes/regalo1.jpg",
    hint: "Remember that special spring day...",
    unlockedMessage: "¡Muy bien amor! Here's your first gift clue..."
  },
  {
    id: 2,
    title: "Segundo regalitoooo, el primero un album para tus foooooootos, nada mal",
    description: "Escribe tu respuesta aqui bebe",
    password: "monedero",
    videoUrl: test,
    poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/huntingTreasure/imagenes/regalo2.jpg",
    hint: "Think cold and sweet...",
    unlockedMessage: "¡Excelente! You're getting closer to your gifts..."
  },
  {
    id: 3,
    title: "Regalo 3: uh la la, un monedero eeeeeeeeh, que será el siguiente?",
    description: "Te está gustando esto? respuesta aquí",
    password: "anillo",
    videoUrl: test,
    poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/huntingTreasure/imagenes/regalo3.jpg",
    hint: "Think cold and sweet...",
    unlockedMessage: "¡Excelente! You're getting closer to your gifts..."
  },
  {
    id: 4,
    title: "Último regalo mi amorcitooo, que consentida eh",
    description: "Pon tu última respuesta amooor",
    password: "tenis",
    videoUrl: test,
    poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/huntingTreasure/imagenes/regalo4.jpg",
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

  const getTitleColor = (levelIndex: number) => {
    return levelIndex % 2 === 0 ? 'text-yellow-500' : 'text-blue-500';
  };

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const currentChallenge = treasureHuntData[currentLevel];
    if (inputValue.toLowerCase() === currentChallenge.password.toLowerCase()) {
      setCurrentLevel(prev => prev + 1);
      setInputValue('');
      setError('');
      setShowHint(false);
    } else {
      setError('ooop, creo que mi niña se equivocó, intentalo de nuevo!');
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
        <div className="max-w-lg mx-auto text-center flex flex-column gap-4">
          <p className="mb-4">Acabas de terminar esta dinamica que tenia preparado para ti amor, espero la hayas pasado bomba como yo la estoy pasando al hacerlo!</p>
          <img 
            src="https://i.giphy.com/D6Bd9o4unoP1tW8rP1.webp" 
            alt="gif ganador"
            className="w-full h-20rem"
          />
          <img 
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2c3ODkzY3IwMnQ5dHpvNWlqYXRtb2FveHJhY3B5dDh0NWdnN3lseCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ItYBBtRi2DQJxwJYKQ/giphy.webp" 
            alt="gif bailador"
            className="w-full h-20rem"
          />
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
            <h3 className={`text-xl font-semibold mb-4 ${getTitleColor(currentLevel)}`}>
              {currentChallenge.title}
            </h3>
            <video 
              className="w-full h-20rem object-cover mb-4 rounded"
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