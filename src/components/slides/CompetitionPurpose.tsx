
import React from 'react';
import { Puzzle, Users, Lightbulb, TrendingUp } from 'lucide-react';

const CompetitionPurpose = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Puzzle className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Why This Competition Matters</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Puzzle className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-semibold text-white">The Core Challenge</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Dozens of MCTS variants exist (UCT, RAVE, AMAF, Progressive Bias, etc.), 
              each with different strengths. Choosing the optimal variant for a specific 
              game currently requires expensive trial-and-error testing.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Real-World Impact</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Game developers, AI researchers, and educational platforms need efficient 
              ways to select the best algorithm without extensive computational experiments 
              for each new game or scenario.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">Competition Goals</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Predict MCTS variant performance without expensive testing</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Identify which game features influence algorithm effectiveness</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Build a generalizable model across diverse board games</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Enable intelligent algorithm selection for practitioners</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
          <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Efficiency</h4>
          <p className="text-white/70 text-sm">
            Reduce computational costs by predicting optimal algorithms upfront
          </p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
          <Lightbulb className="h-8 w-8 text-blue-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
          <p className="text-white/70 text-sm">
            Unlock insights into what makes certain algorithms effective
          </p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
          <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Accessibility</h4>
          <p className="text-white/70 text-sm">
            Make advanced AI techniques more accessible to broader community
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-400/20">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Expected Outcome</h3>
          <p className="text-white/80 text-lg">
            A machine learning model that can predict MCTS variant performance based on game characteristics, 
            revolutionizing how we approach algorithm selection in game AI and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPurpose;
