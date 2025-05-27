
import React from 'react';
import { Brain, GamepadIcon, HelpCircle } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Brain className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Problem Statement</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <GamepadIcon className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">What is MCTS?</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Monte Carlo Tree Search is a decision-making algorithm that uses random sampling 
              to find optimal moves in complex games and decision problems.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <HelpCircle className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-semibold text-white">The Challenge</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Dozens of MCTS variants exist, but choosing the optimal one for a specific 
              game remains unclear and requires extensive experimentation.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-blue-300">Key Challenges:</h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Multiple MCTS variants with different strengths</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Game-specific performance variations</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Lack of general predictive framework</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Expensive computational cost of testing all variants</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-white/60 italic text-center">
        Speaker Note: Emphasize the practical importance of algorithm selection in game AI and the gap this project fills.
      </div>
    </div>
  );
};

export default ProblemStatement;
