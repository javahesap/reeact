import React, { useEffect } from "react";
import { create } from "zustand";
import "tailwindcss/tailwind.css";

const GRID_SIZE = 4;

// Zustand store for game state
const useGameStore = create((set) => ({
  grid: Array(GRID_SIZE * GRID_SIZE).fill(0),
  score: 0,
  setGrid: (newGrid) => set({ grid: newGrid }),
  setScore: (newScore) => set((state) => ({ score: state.score + newScore })),
}));

const addRandomTile = (grid) => {
  const emptyTiles = grid.map((tile, i) => (tile === 0 ? i : null)).filter((i) => i !== null);
  if (emptyTiles.length === 0) return grid;
  const newGrid = [...grid];
  const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  newGrid[randomIndex] = Math.random() > 0.9 ? 4 : 2;
  return newGrid;
};

const moveLeft = (grid) => {
  const newGrid = grid.slice();
  let score = 0;
  for (let row = 0; row < GRID_SIZE; row++) {
    let tiles = newGrid.slice(row * GRID_SIZE, (row + 1) * GRID_SIZE).filter((v) => v);
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] === tiles[i + 1]) {
        tiles[i] *= 2;
        score += tiles[i];
        tiles.splice(i + 1, 1);
      }
    }
    while (tiles.length < GRID_SIZE) tiles.push(0);
    newGrid.splice(row * GRID_SIZE, GRID_SIZE, ...tiles);
  }
  return { newGrid, score };
};

const Game2048 = () => {
  const { grid, score, setGrid, setScore } = useGameStore();
  
  useEffect(() => {
    setGrid(addRandomTile(addRandomTile(grid)));
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") handleMove("left");
    if (event.key === "ArrowRight") handleMove("right");
    if (event.key === "ArrowUp") handleMove("up");
    if (event.key === "ArrowDown") handleMove("down");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMove = (direction) => {
    let newGrid = grid.slice();
    let newScore = 0;
    if (direction === "left") {
      ({ newGrid, score: newScore } = moveLeft(grid));
    }
    if (JSON.stringify(newGrid) !== JSON.stringify(grid)) {
      newGrid = addRandomTile(newGrid);
    }
    setGrid(newGrid);
    setScore(newScore);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">2048 Game</h1>
      <p className="text-lg">Score: {score}</p>
      <div className="grid grid-cols-4 gap-2 p-4 bg-gray-300 rounded-lg">
        {grid.map((num, i) => (
          <div
            key={i}
            className={`w-20 h-20 flex items-center justify-center text-xl font-bold ${
              num !== 0 ? "bg-yellow-500" : "bg-gray-400"
            } rounded-md`}
          >
            {num !== 0 && num}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded"
          onClick={() => handleMove("left")}
        >
          Move Left
        </button>
      </div>
    </div>
  );
};

export default Game2048;
