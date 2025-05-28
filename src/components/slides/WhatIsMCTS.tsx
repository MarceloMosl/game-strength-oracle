
import React from 'react';
import { TreePine, Zap, Target, ArrowRight } from 'lucide-react';

const WhatIsMCTS = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <TreePine className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">What is Monte Carlo Tree Search?</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <TreePine className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Core Concept</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              MCTS is a decision-making algorithm that builds a search tree by repeatedly 
              sampling random game outcomes. It balances exploration of new moves with 
              exploitation of promising paths.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">Why It's Powerful</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Unlike traditional game engines that rely on hand-crafted evaluation functions, 
              MCTS learns from simulation results, making it highly effective for complex games.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-blue-300">The 4-Step Process:</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-white/5 rounded-lg p-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <div className="text-white font-semibold">Selection</div>
                <div className="text-white/70 text-sm">Navigate tree using exploration policy</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 rounded-lg p-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <div className="text-white font-semibold">Expansion</div>
                <div className="text-white/70 text-sm">Add new child nodes to the tree</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 rounded-lg p-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <div className="text-white font-semibold">Simulation</div>
                <div className="text-white/70 text-sm">Play out random games to completion</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 rounded-lg p-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <div className="text-white font-semibold">Backpropagation</div>
                <div className="text-white/70 text-sm">Update node statistics with results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-400/20">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="h-6 w-6 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Real-World Success</h3>
        </div>
        <p className="text-white/80">
          MCTS powers breakthrough AI systems like AlphaGo, which defeated world champions in Go, 
          and is widely used in game AI, robotics, and decision-making under uncertainty.
        </p>
      </div>
    </div>
  );
};

export default WhatIsMCTS;
