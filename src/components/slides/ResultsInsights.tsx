
import React from 'react';
import { Award, TrendingUp, Eye, BarChart3 } from 'lucide-react';
import FeatureImportanceChart from '../FeatureImportanceChart';

const ResultsInsights = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Award className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Results & Insights</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30 text-center">
          <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Validation RMSE</h3>
          <div className="text-3xl font-bold text-green-300">0.847</div>
          <p className="text-sm text-white/70 mt-2">Cross-validation average</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30 text-center">
          <Eye className="h-8 w-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Model Stability</h3>
          <div className="text-3xl font-bold text-blue-300">±0.032</div>
          <p className="text-sm text-white/70 mt-2">Standard deviation across folds</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30 text-center">
          <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Feature Count</h3>
          <div className="text-3xl font-bold text-purple-300">247</div>
          <p className="text-sm text-white/70 mt-2">Engineered features used</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Top Predictive Features</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between">
                <span>• Exploration Constant Difference</span>
                <span className="text-blue-400 font-mono">23.4%</span>
              </li>
              <li className="flex justify-between">
                <span>• Game Tree Complexity Ratio</span>
                <span className="text-green-400 font-mono">18.7%</span>
              </li>
              <li className="flex justify-between">
                <span>• Outcome Uniformity Index</span>
                <span className="text-yellow-400 font-mono">15.2%</span>
              </li>
              <li className="flex justify-between">
                <span>• Playout Budget Ratio</span>
                <span className="text-purple-400 font-mono">12.8%</span>
              </li>
              <li className="flex justify-between">
                <span>• Action Time Efficiency</span>
                <span className="text-orange-400 font-mono">11.3%</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Key Insights</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Exploration parameters dominate performance differences</li>
              <li>• Game complexity strongly influences optimal algorithm choice</li>
              <li>• Computational efficiency matters more in complex games</li>
              <li>• Balanced games favor different strategies than biased ones</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Feature Importance Distribution</h3>
          <FeatureImportanceChart />
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20">
        <h3 className="text-lg font-semibold text-white mb-4">Performance Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">Strong Predictions</h4>
            <p className="text-white/80 text-sm">
              Model excels at predicting outcomes when agents have clear parameter differences 
              and game complexity is well-defined.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-300 mb-2">Challenging Cases</h4>
            <p className="text-white/80 text-sm">
              Highest errors occur in games with extreme complexity or when agents 
              have very similar configurations.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-white/60 italic text-center">
        Speaker Note: Emphasize that exploration constant differences being the top feature validates MCTS theory about the importance of exploration-exploitation balance.
      </div>
    </div>
  );
};

export default ResultsInsights;
