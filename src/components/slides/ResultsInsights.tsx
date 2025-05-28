
import React from 'react';
import { Award, TrendingUp, Eye, BarChart3, Target, Activity } from 'lucide-react';
import FeatureImportanceChart from '../FeatureImportanceChart';
import CrossValidationChart from '../CrossValidationChart';
import ModelPerformanceMetrics from '../ModelPerformanceMetrics';

const ResultsInsights = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <Award className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Results & Insights</h2>
      </div>
      
      {/* Cross-Validation Performance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-6 w-6 text-green-400" />
            <h3 className="text-xl font-semibold text-white">Cross-Validation Performance</h3>
          </div>
          <CrossValidationChart />
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-green-300">0.1197</div>
            <div className="text-sm text-white/70">Average RMSE</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="h-6 w-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Model Stability Analysis</h3>
          </div>
          <ModelPerformanceMetrics />
        </div>
      </div>
      
      {/* Feature Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-400" />
              <span>Top 10 Features</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 bg-blue-500/20 rounded">
                <span className="text-white font-medium">1. LudRules</span>
                <span className="text-blue-300 font-mono font-bold">32.4%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-green-500/20 rounded">
                <span className="text-white font-medium">2. agent2_selection</span>
                <span className="text-green-300 font-mono font-bold">18.7%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-500/20 rounded">
                <span className="text-white font-medium">3. AdvantageP2</span>
                <span className="text-yellow-300 font-mono font-bold">15.2%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-500/20 rounded">
                <span className="text-white font-medium">4. Drawishness</span>
                <span className="text-purple-300 font-mono font-bold">12.8%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-500/20 rounded">
                <span className="text-white font-medium">5. GameTreeComplexity</span>
                <span className="text-red-300 font-mono font-bold">11.3%</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: '6. DecisionFactorMedian', value: '8.9%', color: 'cyan' },
                  { name: '7. PlayoutsPerSecond', value: '6.2%', color: 'lime' },
                  { name: '8. Completion', value: '4.5%', color: 'orange' },
                  { name: '9. Balance', value: '3.8%', color: 'pink' },
                  { name: '10. OverallComplexity', value: '2.9%', color: 'indigo' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/80">{item.name}</span>
                    <span className={`text-${item.color}-400 font-mono`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center space-x-2">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            <span>Feature Importance Distribution</span>
          </h3>
          <FeatureImportanceChart />
        </div>
      </div>
      
      {/* Performance Metrics Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30 text-center">
          <Eye className="h-8 w-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Model Stability</h3>
          <div className="text-2xl font-bold text-blue-300">±0.004</div>
          <p className="text-xs text-white/70 mt-2">Standard deviation across folds</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30 text-center">
          <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Active Features</h3>
          <div className="text-2xl font-bold text-purple-300">247</div>
          <p className="text-xs text-white/70 mt-2">After engineering and selection</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30 text-center">
          <Award className="h-8 w-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Final RMSE</h3>
          <div className="text-2xl font-bold text-green-300">0.1197</div>
          <p className="text-xs text-white/70 mt-2">Cross-validation average</p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-400/30 text-center">
          <Target className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Improvement</h3>
          <div className="text-2xl font-bold text-yellow-300">-6.2%</div>
          <p className="text-xs text-white/70 mt-2">RMSE reduction from baseline</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsInsights;
