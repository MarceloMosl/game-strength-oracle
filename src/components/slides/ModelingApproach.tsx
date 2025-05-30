
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
              <h3 className="text-xl font-semibold text-white">Hyperparameters (Optuna)</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-black/20 rounded p-3 font-mono text-sm">
                <div className="text-green-300">learning_rate = 0.06855</div>
                <div className="text-blue-300">depth = 5</div>
                <div className="text-yellow-300">l2_leaf_reg = 1.2173</div>
                <div className="text-purple-300">iterations = 686</div>
              </div>
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
              <h4 className="text-lg font-semibold text-orange-300">Train-Test Split Validation</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 80/20 train/validation split for Optuna</li>
                <li>• Early stopping (100 rounds)</li>
                <li>• Single model training on full processed dataset</li>
                <li>• Hyperparameter optimization via Optuna objective</li>
              </ul>
              <p className="text-xs text-white/60 mt-3">
                Note: GroupKFold used in prior analysis stage for parameter determination
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Training Details</h3>
            </div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• <strong>Metric:</strong> RMSE on validation split</li>
              <li>• Early stopping to prevent overfitting</li>
              <li>• Feature importance tracking</li>
              <li>• Single final model on full training set</li>
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
            <h4 className="font-semibold text-white">Optuna Search</h4>
            <p className="text-sm text-white/70">Hyperparameter optimization with 80/20 validation</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-white">CatBoost Training</h4>
            <p className="text-sm text-white/70">Native categorical handling with gradient boosting</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">✅</span>
            </div>
            <h4 className="font-semibold text-white">Train-Test Split</h4>
            <p className="text-sm text-white/70">80/20 split for Optuna validation</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-white">Final Model</h4>
            <p className="text-sm text-white/70">Single model trained on full processed dataset</p>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default ModelingApproach;
