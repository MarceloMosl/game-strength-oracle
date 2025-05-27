
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleSlide from './slides/TitleSlide';
import ProblemStatement from './slides/ProblemStatement';
import CompetitionObjective from './slides/CompetitionObjective';
import DataPreparation from './slides/DataPreparation';
import FeatureEngineering from './slides/FeatureEngineering';
import ModelingApproach from './slides/ModelingApproach';
import ResultsInsights from './slides/ResultsInsights';
import Conclusion from './slides/Conclusion';
import QASlide from './slides/QASlide';

const slides = [
  { component: TitleSlide, title: 'Title' },
  { component: ProblemStatement, title: 'Problem Statement' },
  { component: CompetitionObjective, title: 'Competition Objective' },
  { component: DataPreparation, title: 'Data Preparation' },
  { component: FeatureEngineering, title: 'Feature Engineering' },
  { component: ModelingApproach, title: 'Modeling Approach' },
  { component: ResultsInsights, title: 'Results & Insights' },
  { component: Conclusion, title: 'Conclusion' },
  { component: QASlide, title: 'Q&A' },
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      } else if (e.key === 'Escape') {
        setIsPresenting(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${isPresenting ? 'cursor-none' : ''}`}>
      {/* Navigation Bar */}
      {!isPresenting && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-white font-semibold">MCTS Variants Presentation</h1>
              <span className="text-white/70 text-sm">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="text-white hover:bg-white/20"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPresenting(!isPresenting)}
                className="text-white hover:bg-white/20"
              >
                {isPresenting ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Slide Navigator */}
      {!isPresenting && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
          <div className="flex flex-col space-y-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Slide Content */}
      <div className={`${isPresenting ? 'pt-0' : 'pt-16'} min-h-screen flex items-center justify-center p-8`}>
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-12 min-h-[600px] flex items-center justify-center animate-fade-in">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Presentation Controls */}
      {isPresenting && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-md rounded-full px-6 py-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-white text-sm px-4">
              {currentSlide + 1} / {slides.length}
            </span>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-white hover:bg-white/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
