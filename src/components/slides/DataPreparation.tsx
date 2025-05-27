
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
              <FileText className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Data Sources</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>train.csv:</strong> Training dataset with game features and outcomes</li>
              <li>• <strong>test.csv:</strong> Test dataset for competition submission</li>
              <li>• Multiple board games with diverse rulesets</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Trash2 className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-semibold text-white">Data Cleaning</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• Dropped irrelevant columns</li>
              <li>• Removed zero-variance features</li>
              <li>• Handled missing values</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Shuffle className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Agent String Parsing</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/80">Converted agent configuration strings into structured features:</p>
              <div className="bg-black/20 rounded p-3 font-mono text-sm text-green-300">
                <div>"MCTS(exploration=1.4, playouts=1000)"</div>
                <div className="text-white/60">↓</div>
                <div>exploration_constant: 1.4</div>
                <div>playouts_per_move: 1000</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Data Augmentation</h3>
            <p className="text-white/80 mb-3">
              <strong>Agent Role Inversion:</strong> Created symmetric training examples
            </p>
            <div className="text-sm text-white/70">
              Original: Agent1 vs Agent2 → Utility = +0.6<br/>
              Augmented: Agent2 vs Agent1 → Utility = -0.6
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Key Data Transformations</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">~50%</div>
            <div className="text-sm text-white/70">Data size increase from augmentation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">15+</div>
            <div className="text-sm text-white/70">Parsed agent parameters</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">200+</div>
            <div className="text-sm text-white/70">Game features retained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">0</div>
            <div className="text-sm text-white/70">Missing values after cleaning</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-white/60 italic text-center">
        Speaker Note: Emphasize the importance of data augmentation in creating a balanced, symmetric dataset for better model generalization.
      </div>
    </div>
  );
};

export default DataPreparation;
