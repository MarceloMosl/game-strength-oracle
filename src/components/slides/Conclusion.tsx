
import React from 'react';
import { CheckCircle, Lightbulb, ArrowRight, Rocket } from 'lucide-react';

const Conclusion = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <CheckCircle className="h-10 w-10 text-blue-400" />
        <h2 className="text-4xl font-bold text-white">Conclusion</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Built robust pipeline predicting head-to-head MCTS variant strength</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Achieved consistent performance (RMSE: 0.48792)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Demonstrated generalizable approach across hundreds of board games</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Identified critical features for algorithm selection</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Key Drivers</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Agent exploration constants</strong> dominate performance differences</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Game complexity metrics</strong> strongly influence optimal choices</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Game rules and structure</strong> provide crucial context</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Business Impact</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Eliminates expensive trial-and-error algorithm selection</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Provides data-driven algorithm recommendations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Enables rapid deployment of optimal AI systems</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 border border-orange-400/30">
            <div className="flex items-center space-x-3 mb-4">
              <ArrowRight className="h-6 w-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Future Work</h3>
            </div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Extend to real-time strategy and continuous domains</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Incorporate neural network-guided MCTS variants</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Develop online learning for dynamic adaptation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-8 border border-white/20 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Project Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-green-400">0.48792</div>
            <div className="text-sm text-white/70">Final RMSE Score</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">50</div>
            <div className="text-sm text-white/70">Selected Features Used</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">100+</div>
            <div className="text-sm text-white/70">Board Games Analyzed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">80/20</div>
            <div className="text-sm text-white/70">Train-Test Split</div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xl text-blue-300 font-medium">
          "From algorithm guessing to data-driven AI optimization"
        </p>
      </div>
      
     
    </div>
  );
};

export default Conclusion;
