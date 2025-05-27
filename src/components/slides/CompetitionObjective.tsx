
import React from 'react';
import { Target, ArrowRight, Award } from 'lucide-react';

const CompetitionObjective = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Target className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Competition Objective</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-6 border border-green-400/30">
          <h3 className="text-xl font-semibold text-green-300 mb-4">Input</h3>
          <ul className="space-y-2 text-white/80">
            <li>• Game feature set</li>
            <li>• Two MCTS agent configurations</li>
            <li>• Game ruleset parameters</li>
          </ul>
        </div>
        
        <div className="flex items-center justify-center">
          <ArrowRight className="h-12 w-12 text-blue-400" />
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-6 border border-blue-400/30">
          <h3 className="text-xl font-semibold text-blue-300 mb-4">Output</h3>
          <ul className="space-y-2 text-white/80">
            <li>• Predicted utility score</li>
            <li>• Agent1 vs Agent2 performance</li>
            <li>• Win/draw/loss distribution</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-8 border border-white/20">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Award className="h-8 w-8 text-yellow-400" />
          <h3 className="text-2xl font-semibold text-white">Evaluation Metric</h3>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-4">RMSE</div>
          <p className="text-white/80 text-lg">
            Root Mean Square Error between predicted and true utility scores
          </p>
          <p className="text-white/60 text-sm mt-4">
            Lower RMSE indicates better prediction accuracy
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-3">Success Criteria</h4>
          <p className="text-white/80">
            Build a generalizable model that accurately predicts MCTS variant performance 
            across diverse board games without game-specific tuning.
          </p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-3">Business Impact</h4>
          <p className="text-white/80">
            Enable efficient algorithm selection, reducing computational costs and 
            improving AI performance in game-playing applications.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default CompetitionObjective;
