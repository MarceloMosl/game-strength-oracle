
import React from 'react';
import { Brain, Settings, Shield, TrendingUp } from 'lucide-react';

const ModelingApproach = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Brain className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Modeling Approach</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Algorithm Choice</h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-blue-300">CatBoost Regressor</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Native categorical feature handling</li>
                <li>• Robust to overfitting</li>
                <li>• Excellent gradient boosting performance</li>
                <li>• Built-in regularization</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Hyperparameter Tuning</h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-green-300">Optuna Optimization</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>Learning Rate:</strong> 0.01 - 0.3</li>
                <li>• <strong>Tree Depth:</strong> 4 - 10</li>
                <li>• <strong>L2 Regularization:</strong> 1 - 10</li>
                <li>• <strong>Iterations:</strong> 500 - 2000</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-lg p-6 border border-orange-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Validation Strategy</h3>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-orange-300">Group-Aware Cross-Validation</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Grouped by <code className="bg-black/30 px-1 rounded">GameRulesetName</code></li>
                <li>• Prevents data leakage</li>
                <li>• Ensures game-level generalization</li>
                <li>• 5-fold stratified splits</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Model Training</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Early stopping to prevent overfitting</li>
              <li>• Feature importance tracking</li>
              <li>• Validation curve monitoring</li>
              <li>• Ensemble of best trials</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-8 border border-white/20">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Training Pipeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🔍</span>
            </div>
            <h4 className="font-semibold text-white">Search Space</h4>
            <p className="text-sm text-white/70">Define hyperparameter ranges for Optuna optimization</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-white">Optimization</h4>
            <p className="text-sm text-white/70">Run 100+ trials with Bayesian optimization</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">✅</span>
            </div>
            <h4 className="font-semibold text-white">Validation</h4>
            <p className="text-sm text-white/70">Group K-fold CV on game rulesets</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-white">Selection</h4>
            <p className="text-sm text-white/70">Choose best model based on RMSE</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-white/60 italic text-center">
        Speaker Note: Emphasize the importance of group-aware validation to ensure the model generalizes to unseen games, not just unseen game instances.
      </div>
    </div>
  );
};

export default ModelingApproach;
