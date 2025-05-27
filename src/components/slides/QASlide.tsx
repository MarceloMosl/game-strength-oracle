
import React from 'react';
import { HelpCircle, MessageCircle, Mail, Github } from 'lucide-react';

const QASlide = () => {
  return (
    <div className="space-y-8 animate-fade-in text-center">
      <div className="flex items-center justify-center space-x-4 mb-8">
        <HelpCircle className="h-12 w-12 text-blue-400" />
        <h2 className="text-5xl font-bold text-white">Questions & Discussion</h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-3xl text-blue-300 font-semibold">
          Thank you for your attention!
        </p>
        
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          I'm excited to discuss this project and explore how machine learning can optimize 
          algorithm selection in game AI and beyond.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Technical Questions</h3>
          <p className="text-white/70 text-sm">
            Model architecture, feature engineering, validation strategies
          </p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Applications</h3>
          <p className="text-white/70 text-sm">
            Real-world use cases, industry applications, scaling considerations
          </p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
          <Github className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
          <p className="text-white/70 text-sm">
            Code details, reproducibility, extensions, collaboration
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 border border-blue-400/30 mt-12">
        <h3 className="text-2xl font-semibold text-white mb-4">Potential Discussion Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <ul className="space-y-2 text-white/80">
            <li>• How does this approach compare to human expert selection?</li>
            <li>• What about games with incomplete information?</li>
            <li>• Could this work for real-time decision making?</li>
          </ul>
          <ul className="space-y-2 text-white/80">
            <li>• How sensitive is the model to feature engineering?</li>
            <li>• What about adversarial or evolving opponents?</li>
            <li>• Extension to multi-agent environments?</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12">
        <p className="text-lg text-white/60">
          Contact: <span className="text-blue-400">marcelo.mosl@example.com</span>
        </p>
        <p className="text-sm text-white/50 mt-2">
          Competition: UM – Game-Playing Strength of MCTS Variants | Kaggle
        </p>
      </div>
    </div>
  );
};

export default QASlide;
