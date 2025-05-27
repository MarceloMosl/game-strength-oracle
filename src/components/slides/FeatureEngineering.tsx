
import React from 'react';
import { Zap, Calculator, Target, BarChart } from 'lucide-react';

const FeatureEngineering = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Zap className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Feature Engineering</h2>
      </div>
      
      <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-8">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">17 New Engineered Features</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-semibold text-blue-300 mb-3">Efficiency Metrics</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>Playouts/Moves:</strong> PlayoutsPerSecond / (MovesPerSecond + 1e-15)</li>
                <li>• <strong>EfficiencyPerPlayout:</strong> Computational efficiency ratio</li>
                <li>• <strong>ActionTimeEfficiency:</strong> Decision speed optimization</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
              <h4 className="font-semibold text-green-300 mb-3">Balance Interactions</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>AdvantageBalanceRatio:</strong> Fairness measurement</li>
                <li>• <strong>AdvantageTimeImpact:</strong> Time-advantage correlation</li>
                <li>• <strong>ComplexityBalanceInteraction:</strong> Balance × GameTreeComplexity</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-400/30">
              <h4 className="font-semibold text-purple-300 mb-3">Complexity Features</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>OverallComplexity:</strong> StateTreeComplexity + GameTreeComplexity</li>
                <li>• <strong>ComplexityRatio:</strong> GameTree vs StateTree comparison</li>
                <li>• <strong>DecisionComplexity:</strong> Branch factor analysis</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
              <h4 className="font-semibold text-orange-300 mb-3">Additional Ratios</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Strategic depth measurements</li>
                <li>• Performance normalization factors</li>
                <li>• Game-specific adaptation metrics</li>
              </ul>
            </div>
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
          
          <div className="text-blue-400 text-2xl">→</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-white font-medium">17 New Features</div>
            <div className="text-sm text-white/60">Enhanced prediction power</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-white/60 italic text-center">
        Speaker Note: These ratios and interactions capture efficiency and complexity dynamics between agents and games, providing the model with meaningful signals for prediction.
      </div>
    </div>
  );
};

export default FeatureEngineering;
