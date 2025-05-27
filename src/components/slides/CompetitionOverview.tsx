
import React from 'react';
import { Calendar, Trophy, Target } from 'lucide-react';

const CompetitionOverview = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Trophy className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Competition Overview</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Competition Goal</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Create a model to predict how well one Monte-Carlo Tree Search (MCTS) variant 
              will do against another in a given board game, based on game features. The goal 
              is to identify which MCTS variants work best for different types of games.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Timeline</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>Start:</strong> September 5, 2024</li>
              <li>• <strong>Team/Entry Deadline:</strong> November 25, 2024</li>
              <li>• <strong>Final Submission:</strong> December 2, 2024</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Trophy className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">Evaluation & Prizes</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-black/20 rounded p-3">
                <p className="text-white/80 mb-2"><strong>Metric:</strong></p>
                <p className="text-blue-300">RMSE between predicted and actual utility scores</p>
              </div>
              
              <div className="bg-black/20 rounded p-3">
                <p className="text-white/80 mb-3"><strong>Prize Pool:</strong></p>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-yellow-300">1st Place:</span>
                    <span className="text-white font-bold">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">2nd Place:</span>
                    <span className="text-white font-bold">$12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-300">3rd Place:</span>
                    <span className="text-white font-bold">$7,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-300">4th Place:</span>
                    <span className="text-white font-bold">$6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-300">5th Place:</span>
                    <span className="text-white font-bold">$5,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Competition Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">$50K</div>
            <div className="text-sm text-white/70">Total Prize Pool</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-sm text-white/70">Board Games</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">RMSE</div>
            <div className="text-sm text-white/70">Evaluation Metric</div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default CompetitionOverview;
