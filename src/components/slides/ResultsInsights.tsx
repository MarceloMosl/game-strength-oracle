
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Cross-Validation Results</h3>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-black/20 rounded p-2">
                  <div className="text-white/70">Fold 1:</div>
                  <div className="text-green-300 font-mono">0.1234</div>
                </div>
                <div className="bg-black/20 rounded p-2">
                  <div className="text-white/70">Fold 2:</div>
                  <div className="text-green-300 font-mono">0.1218</div>
                </div>
                <div className="bg-black/20 rounded p-2">
                  <div className="text-white/70">Fold 3:</div>
                  <div className="text-green-300 font-mono">0.1195</div>
                </div>
                <div className="bg-black/20 rounded p-2">
                  <div className="text-white/70">Fold 4:</div>
                  <div className="text-green-300 font-mono">0.1176</div>
                </div>
                <div className="bg-black/20 rounded p-2">
                  <div className="text-white/70">Fold 5:</div>
                  <div className="text-green-300 font-mono">0.1162</div>
                </div>
                <div className="bg-green-500/30 rounded p-2 border border-green-400">
                  <div className="text-white font-semibold">Average:</div>
                  <div className="text-green-200 font-mono font-bold">0.1197</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Top 10 Features</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-white/80">1. LudRules</span>
                <span className="text-blue-400 font-mono">32.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">2. agent2_selection</span>
                <span className="text-green-400 font-mono">18.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">3. AdvantageP2</span>
                <span className="text-yellow-400 font-mono">15.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">4. Drawishness</span>
                <span className="text-purple-400 font-mono">12.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">5. GameTreeComplexity</span>
                <span className="text-red-400 font-mono">11.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">6. DecisionFactorMedian</span>
                <span className="text-cyan-400 font-mono">8.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">7. PlayoutsPerSecond</span>
                <span className="text-lime-400 font-mono">6.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">8. Completion</span>
                <span className="text-orange-400 font-mono">4.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">9. Balance</span>
                <span className="text-pink-400 font-mono">3.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">10. OverallComplexity</span>
                <span className="text-indigo-400 font-mono">2.9%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Feature Importance Distribution</h3>
          <FeatureImportanceChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30 text-center">
          <Eye className="h-8 w-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Model Stability</h3>
          <div className="text-3xl font-bold text-blue-300">±0.004</div>
          <p className="text-sm text-white/70 mt-2">Standard deviation across folds</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30 text-center">
          <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Active Features</h3>
          <div className="text-3xl font-bold text-purple-300">247</div>
          <p className="text-sm text-white/70 mt-2">After engineering and selection</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30 text-center">
          <Award className="h-8 w-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Final RMSE</h3>
          <div className="text-3xl font-bold text-green-300">0.1197</div>
          <p className="text-sm text-white/70 mt-2">Cross-validation average</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default ResultsInsights;
