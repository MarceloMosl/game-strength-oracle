
import React from 'react';
import { Database, FileText, Shuffle, Trash2 } from 'lucide-react';

const DataPreparation = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Database className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Data Preparation</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Trash2 className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-semibold text-white">Feature Selection</h3>
            </div>
            <p className="text-white/80 mb-3">
              <strong>Refined to 50 key features:</strong>
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Selected from predefined <code className="bg-black/30 px-1 rounded">used_cols</code> list</li>
              <li>• Features likely determined through prior analysis</li>
              <li>• Based on feature importance ranking</li>
              <li>• Focused on most predictive variables</li>
              <li>• Dropped ID and initial target-related columns</li>
              <li>• Optimized feature set for model performance</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Agent Parsing</h3>
            </div>
            <p className="text-white/80 mb-3">
              Split <code className="bg-black/30 px-1 rounded">agent1</code>/<code className="bg-black/30 px-1 rounded">agent2</code> strings into structured fields:
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• <strong>Selection:</strong> Algorithm variant type</li>
              <li>• <strong>ExpConst:</strong> Exploration constant</li>
              <li>• <strong>Playout:</strong> Simulation strategy</li>
              <li>• <strong>ScoreBounds:</strong> Value normalization</li>
              <li>• Created ~9 new agent-specific columns</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Shuffle className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Data Augmentation</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/80">
                <strong>Agent Role Inversion:</strong> Used <code className="bg-black/30 px-1 rounded">augment_inversion()</code>
              </p>
              <div className="bg-black/20 rounded p-3 font-mono text-sm">
                <div className="text-green-300">Original: Agent1 vs Agent2</div>
                <div className="text-white/60 my-1">• Swaps agent details</div>
                <div className="text-blue-300 mt-2">Augmented: Agent2 vs Agent1</div>
                <div className="text-white/60">• Recalculates AdvantageP2 = 1 - AdvantageP1</div>
                <div className="text-yellow-300 mt-2 text-xs">Note: utility_agent1 target not inverted</div>
              </div>
              <p className="text-white/70 text-sm">
                <strong>Result:</strong> Doubled dataset size through role swapping
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
            <h3 className="text-xl font-semibold text-white mb-4">Processing Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">50</div>
                <div className="text-sm text-white/70">Selected Features</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">~9</div>
                <div className="text-sm text-white/70">Agent Parameters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2x</div>
                <div className="text-sm text-white/70">Dataset Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">✓</div>
                <div className="text-sm text-white/70">Missing Values Handled</div>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-3 text-center">
              Missing values in features imputed; rows with missing target variable removed
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DataPreparation;
