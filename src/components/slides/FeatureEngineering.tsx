
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
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Agent String Parsing & Feature Creation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-400/30">
              <h4 className="font-semibold text-blue-300 mb-3">Agent Detail Extraction</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>agent1_selection:</strong> Algorithm variant for agent 1</li>
                <li>• <strong>agent1_expconst:</strong> Exploration constant for agent 1</li>
                <li>• <strong>agent1_playout:</strong> Playout strategy for agent 1</li>
                <li>• <strong>agent1_scorebounds:</strong> Score bounds for agent 1</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
              <h4 className="font-semibold text-green-300 mb-3">Agent 2 Features</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>agent2_selection:</strong> Algorithm variant for agent 2</li>
                <li>• <strong>agent2_expconst:</strong> Exploration constant for agent 2</li>
                <li>• <strong>agent2_playout:</strong> Playout strategy for agent 2</li>
                <li>• <strong>agent2_scorebounds:</strong> Score bounds for agent 2</li>
                <li>• <strong>adv_diff_adj:</strong> Additional advantage difference feature</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-400/30">
              <h4 className="font-semibold text-purple-300 mb-3">Feature Selection Process</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Parsed agent strings into structured components</li>
                <li>• Created ~9 new agent-specific columns</li>
                <li>• Selected 50 most important features via <code className="bg-black/30 px-1 rounded">used_cols</code></li>
                <li>• Combined game metadata with agent parameters</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
              <h4 className="font-semibold text-orange-300 mb-3">Final Feature Set</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Game complexity metrics (LudRules, Drawishness)</li>
                <li>• Agent configuration parameters</li>
                <li>• Game balance indicators (AdvantageP1, AdvantageP2)</li>
                <li>• Performance metrics integration</li>
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
            <div className="text-white font-medium">Raw Data</div>
            <div className="text-sm text-white/60">Game + Agent strings</div>
          </div>
          
          <div className="text-blue-400 text-2xl">→</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="text-white font-medium">Agent Parsing</div>
            <div className="text-sm text-white/60">~9 new columns</div>
          </div>
          
          <div className="text-blue-400 text-2xl">→</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-white font-medium">Feature Selection</div>
            <div className="text-sm text-white/60">used_cols list</div>
          </div>
          
          <div className="text-blue-400 text-2xl">→</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-white font-medium">50 Features</div>
            <div className="text-sm text-white/60">Final model input</div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default FeatureEngineering;
