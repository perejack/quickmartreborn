import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.jpeg';
import { Sparkles, TrendingUp, Users, Zap, Globe, Award, Star, ChevronRight, Rocket, Target, Shield, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Animated counter for statistics
  const [counters, setCounters] = useState({
    positions: 0,
    salary: 0,
    branches: 0
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        positions: prev.positions < 73 ? prev.positions + 1 : 73,
        salary: prev.salary < 34 ? prev.salary + 1 : 34,
        branches: prev.branches < 150 ? prev.branches + 3 : 150
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide testimonials
  const testimonials = [
    "Transform your career with endless opportunities",
    "Join Kenya's retail revolution today",
    "Your success story starts here"
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 sm:py-12 lg:py-0">
      {/* Hero Image Background with Light Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.7) contrast(1.1) saturate(1.1)'
          }}
        ></div>
        {/* Light gradient overlay for subtle enhancement */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.15),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating geometric shapes - Lighter for image visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-yellow-400/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Particle effect - Mobile Optimized */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>  {/* Additional particles for larger screens */}
      <div className="absolute inset-0 hidden sm:block">
        {[...Array(15)].map((_, i) => (
          <div
            key={`desktop-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10 + 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Animated Badge - Mobile Optimized */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/50 mb-4 sm:mb-6 backdrop-blur-sm mx-auto lg:mx-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Sparkles className={`h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 ${isHovered ? 'animate-spin' : ''}`} />
              <span className="text-yellow-300 text-xs sm:text-sm font-medium">Now Hiring Nationwide</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Headline with gradient text - Enhanced with image backdrop */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 drop-shadow-2xl">
                Your Future
              </span>
              <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 drop-shadow-2xl">
                Starts Today
              </span>
            </h1>

            {/* Animated text carousel - Mobile Optimized */}
            <div className="h-16 sm:h-20 mb-6 sm:mb-8 overflow-hidden px-2 sm:px-0">
              <div 
                className="transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${activeSlide * 64}px)` }}
              >
                {testimonials.map((text, index) => (
                  <p key={index} className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/90 mb-3 sm:mb-4 h-16 sm:h-20 flex items-center justify-center lg:justify-start">
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Interactive Stats Cards - Lighter glass effect for image visibility */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2 sm:px-0">
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-2 sm:p-3 md:p-4 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-300 mb-1 sm:mb-2 drop-shadow-md" />
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-md">{counters.positions}+</div>
                <div className="text-xs text-purple-200">Open Roles</div>
              </div>
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-2 sm:p-3 md:p-4 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-300 mb-1 sm:mb-2 drop-shadow-md" />
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-md">{counters.salary}K</div>
                <div className="text-xs text-green-200">Max Salary</div>
              </div>
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-2 sm:p-3 md:p-4 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-300 mb-1 sm:mb-2 drop-shadow-md" />
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-md">{counters.branches}+</div>
                <div className="text-xs text-blue-200">Locations</div>
              </div>
            </div>

            {/* CTA Buttons with hover effects - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 px-2 sm:px-0">
              <button 
                onClick={() => navigate('/apply')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl font-bold text-gray-900 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                  Start Your Journey
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  Meet Our Team
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - 3D Card - Lighter glass effect for image visibility */}
          <div className="relative lg:block hidden">
            <div 
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
              }}
            >
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                </div>

                {/* Benefits list */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Why Join Us?</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: Award, text: "Industry Leading Benefits", color: "text-yellow-300" },
                    { icon: Heart, text: "Work-Life Balance", color: "text-pink-300" },
                    { icon: Zap, text: "Fast Career Growth", color: "text-blue-300" },
                    { icon: Star, text: "Recognition Programs", color: "text-purple-300" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-2 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <item.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-white/90 group-hover:text-white transition-colors text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce-slow">
                  Hiring Now!
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-6 sm:top-8 left-6 sm:left-8 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom floating indicators - Mobile Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Mobile Layout - Lighter glass effect for image visibility */}
          <div className="flex flex-col sm:hidden gap-3 items-center">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse drop-shadow-md"></div>
              <span className="text-white/90 text-xs">Live Openings</span>
            </div>
            <div className="flex flex-col items-center animate-bounce-slow">
              <ChevronRight className="h-3 w-3 text-white/70 rotate-90 drop-shadow-md" />
              <span className="text-white/50 text-xs mt-1">Discover More</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <Shield className="h-3 w-3 text-green-400 drop-shadow-md" />
              <span className="text-white/90 text-xs">Verified Employer</span>
            </div>
          </div>

          {/* Desktop Layout - Lighter glass effect for image visibility */}
          <div className="hidden sm:flex justify-between items-center">
            {/* Live indicator */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse drop-shadow-md"></div>
              <span className="text-white/90 text-sm">Live Openings</span>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center animate-bounce-slow">
              <ChevronRight className="h-5 w-5 text-white/70 rotate-90 drop-shadow-md" />
              <span className="text-white/50 text-xs mt-1">Discover More</span>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <Shield className="h-4 w-4 text-green-400 drop-shadow-md" />
              <span className="text-white/90 text-sm">Verified Employer</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;