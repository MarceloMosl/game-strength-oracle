
import React from 'react';
import { Zap, Calculator, Target, BarChart } from 'lucide-react';

const FeatureEngineering = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Zap className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Feature Engineering</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Calculator className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Efficiency Metrics</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>Playouts per Move:</strong> Search intensity measure</li>
              <li>• <strong>Action Time Efficiency:</strong> Speed vs. thinking time ratio</li>
              <li>• <strong>Search Depth Ratio:</strong> Exploration vs. exploitation balance</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart className="h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Complexity Ratios</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>GameTree/StateTree Complexity:</strong> Game difficulty indicator</li>
              <li>• <strong>Branching Factor Ratios:</strong> Decision space analysis</li>
              <li>• <strong>Move Complexity Index:</strong> Strategic depth measure</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-6 w-6 text-pink-400" />
              <h3 className="text-xl font-semibold text-white">Advantage Features</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>Exploration Constant Difference:</strong> UCB1 parameter gaps</li>
              <li>• <strong>Playout Budget Ratio:</strong> Computational resource allocation</li>
              <li>• <strong>Policy Strength Comparison:</strong> Heuristic quality difference</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 border border-orange-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Interaction Features</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>Game × Agent Interactions:</strong> Context-specific performance</li>
              <li>• <strong>Balance Metrics:</strong> Symmetric vs. asymmetric games</li>
              <li>• <strong>Outcome Uniformity:</strong> Predictability measures</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-8 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Feature Engineering Pipeline</h3>
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-white font-medium">Raw Features</div>
            <div className="text-sm text-white/60">Game + Agent params</div>
          </div>
          
          <div className="text-blue-400 text-2xl">→</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="text-white font-medium">Derived Metrics</div>
            <div className="text-sm text-white/60">Ratios + Differences</div>
          </div>
          
          <div className="text-blue-400 text-2xl">→</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-white font-medium">Interaction Terms</div>
            <div className="text-sm text-white/60">Context-aware features</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-white/60 italic text-center">
        Speaker Note: Highlight how these engineered features capture the essence of MCTS performance rather than relying solely on raw parameters.
      </div>
    </div>
  );
};

export default FeatureEngineering;
