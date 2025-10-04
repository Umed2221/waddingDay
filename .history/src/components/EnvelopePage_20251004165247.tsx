import React, { useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface EnvelopePageProps {
  onOpenEnvelope: () => void;
}

const EnvelopePage: React.FC<EnvelopePageProps> = ({ onOpenEnvelope }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpening(true);
    setShowFireworks(true);
    
    setTimeout(() => {
      setShowMessage(true);
    }, 800);
    
    setTimeout(() => {
      onOpenEnvelope();
    }, 4000);
  };

  // Fireworks component
  const Firework = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
    <div>
      className={`absolute animate-ping`}
      style={{ 
        left, 
        top, 
        animationDelay: `${delay}ms`,
        animationDuration: '1s'
      }}
    >
      <Star className="w-6 h-6 text-amber-400" />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-milk to-rose-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-20 text-burgundy-400 w-6 h-6 animate-pulse" />
        <Sparkles className="absolute top-32 right-32 text-amber-400 w-5 h-5 animate-bounce" />
        <Heart className="absolute bottom-32 left-32 text-burgundy-300 w-4 h-4 animate-pulse delay-1000" />
        <Sparkles className="absolute bottom-20 right-20 text-amber-400 w-6 h-6 animate-bounce delay-500" />
      </div>

      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none z-30">
          <Firework delay={0} left="20%" top="30%" />
          <Firework delay={200} left="80%" top="25%" />
          <Firework delay={400} left="15%" top="60%" />
          <Firework delay={600} left="85%" top="70%" />
          <Firework delay={800} left="50%" top="20%" />
          <Firework delay={1000} left="30%" top="80%" />
          <Firework delay={1200} left="70%" top="15%" />
          <Firework delay={1400} left="10%" top="45%" />
          <Firework delay={1600} left="90%" top="55%" />
          <Firework delay={1800} left="60%" top="85%" />
          
          {/* Additional sparkles */}
          <div className="absolute top-1/4 left-1/4 animate-bounce">
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce delay-300">
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-bounce delay-600">
            <Sparkles className="w-7 h-7 text-amber-500" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-900">
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
        </div>
      )}

      <div className="text-center z-10 w-full max-w-4xl px-4">
        {/* Full Congratulations Card - Above Everything */}
        {showMessage && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40 p-4">
            <div className="animate-fade-in-up bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-burgundy-300 max-w-2xl w-full mx-4 relative">
              <div className="text-center">
                {/* Decorative hearts around the card */}
                <Heart className="absolute -top-3 -left-3 w-8 h-8 text-burgundy-600 animate-pulse" />
                <Heart className="absolute -top-3 -right-3 w-8 h-8 text-burgundy-600 animate-pulse delay-500" />
                <Heart className="absolute -bottom-3 -left-3 w-8 h-8 text-burgundy-600 animate-pulse delay-1000" />
                <Heart className="absolute -bottom-3 -right-3 w-8 h-8 text-burgundy-600 animate-pulse delay-1500" />
                
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-burgundy-600 to-burgundy-700 p-4 rounded-full">
                    <Heart className="w-12 h-12 text-white animate-pulse" />
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-dancing text-burgundy-800 mb-6">
                  Поздравляем!
                </h2>
                
                <div className="space-y-4 mb-8">
                  <p className="text-xl md:text-2xl text-burgundy-700 font-cormorant font-medium">
                    Вы приглашены на нашу свадьбу
                  </p>
                  <p className="text-lg text-burgundy-600 font-cormorant leading-relaxed">
                    Мы с радостью приглашаем вас разделить с нами один из самых важных 
                    и счастливых дней в нашей жизни
                  </p>
                  <p className="text-lg text-burgundy-600 font-cormorant leading-relaxed">
                    Ваше присутствие сделает этот день еще более особенным и незабываемым
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <Sparkles className="w-8 h-8 text-amber-500 animate-bounce" />
                  <Heart className="w-8 h-8 text-burgundy-500 animate-pulse" />
                  <Sparkles className="w-8 h-8 text-amber-500 animate-bounce delay-300" />
                  <Heart className="w-8 h-8 text-burgundy-500 animate-pulse delay-600" />
                  <Sparkles className="w-8 h-8 text-amber-500 animate-bounce delay-900" />
                </div>
                
                <div className="bg-gradient-to-r from-burgundy-100 to-rose-100 p-6 rounded-2xl">
                  <p className="text-burgundy-800 font-cormorant font-medium text-lg italic">
                    "Любовь - это когда два сердца становятся одним"
                  </p>
                </div>
                
                <div className="mt-8">
                  <p className="text-burgundy-600 font-cormorant text-sm">
                    Нажмите в любом месте, чтобы продолжить...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Envelope Container */}
        <div className="relative mb-8">
          <div 
            className={`relative w-80 h-56 mx-auto cursor-pointer transition-all duration-1000 transform ${
              isOpening ? 'scale-110' : 'hover:scale-105'
            }`}
            onClick={handleEnvelopeClick}
          >
            {/* Envelope Back */}
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-800 to-burgundy-900 rounded-lg shadow-2xl border-2 border-burgundy-700"></div>
            
            {/* Envelope Flap */}
            <div 
              className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-burgundy-700 to-burgundy-800 transform-gpu transition-all duration-1000 origin-top ${
                isOpening ? 'rotate-x-180 scale-110' : ''
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Wax Seal */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-600 rounded-full border-4 border-amber-700 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-amber-100" />
              </div>
            </div>

            {/* Envelope Inner Content */}
            <div className={`absolute inset-4 bg-cream rounded transition-all duration-500 ${
              isOpening ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-burgundy-800">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-burgundy-600 animate-pulse" />
                  <p className="text-sm font-cormorant font-medium">Свадебное приглашение</p>
                  <p className="text-xs font-cormorant text-burgundy-600 mt-1">Умед & Шахло</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        {!isOpening && (
          <div className="animate-fade-in">
            <p className="text-xl font-dancing text-burgundy-800 mb-2">Нажмите на конверт</p>
            <p className="text-lg text-burgundy-600 font-cormorant">чтобы открыть приглашение</p>
            <div className="flex justify-center space-x-2 mt-4">
              <Sparkles className="w-5 h-5 text-amber-500 animate-bounce" />
              <Heart className="w-5 h-5 text-burgundy-500 animate-pulse" />
              <Sparkles className="w-5 h-5 text-amber-500 animate-bounce delay-200" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvelopePage;