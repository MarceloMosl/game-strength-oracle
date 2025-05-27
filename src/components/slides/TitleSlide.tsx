
import React from 'react';
import { Trophy, Target, BarChart3 } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4 text-blue-400">
          <Trophy className="h-12 w-12" />
          <Target className="h-12 w-12" />
          <BarChart3 className="h-12 w-12" />
        </div>
      </div>
      
      <h1 className="text-5xl font-bold text-white leading-tight">
        Predicting Game-Playing Strength of
        <span className="text-blue-400 block mt-2">MCTS Variants</span>
      </h1>
      
      <div className="space-y-4">
        <p className="text-2xl text-blue-200 font-medium">
          Marcelo Mosl | Kaggle Competition
        </p>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          A machine learning approach to predict Monte Carlo Tree Search variant performance across diverse board games
        </p>
      </div>
      
      <div className="mt-12 text-sm text-white/50">
        <p>Use arrow keys or navigation controls to advance slides</p>
      </div>
    </div>
  );
};

export default TitleSlide;
