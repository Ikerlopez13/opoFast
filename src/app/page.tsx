"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide loader when page is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Loading screen component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Image
              src="/icon (7).png" 
              alt="OpoFast logo" 
              width={60} 
              height={60}
              className="object-contain"
            />
            <span className="text-3xl font-bold" style={{ color: '#5FBFF9' }}>opoFast</span>
          </div>
          
          {/* Loading animation */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#5FBFF9', animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#5FBFF9', animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#5FBFF9', animationDelay: '300ms' }}></div>
          </div>
          
          {/* Loading text */}
          <p className="text-gray-600 mt-4 text-lg">Carregant...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-sans" style={{ backgroundColor: '#F8F3F0' }}>
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Catalunya silhouette positioned behind hero text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-full h-full max-w-4xl">
            <Image
              src="/Vector 9.png"
              alt="Catalunya silhouette"
              fill
              className="object-contain opacity-15"
              style={{ objectPosition: 'center right' }}
            />
          </div>
        </div>

        {/* Hero section */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          {/* Catalunya silhouette positioned in the center above text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="relative w-full h-full max-w-xl">
              <Image
                src="/cat.png"
                alt="Catalunya silhouette"
                fill
                className="object-contain opacity-9"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-20">
            <h1 className="font-bold text-gray-900 mb-3 md:mb-2" style={{ 
              fontSize: 'clamp(28px, 7vw, 60px)', 
              fontWeight: 800, 
              lineHeight: '1.2', 
              letterSpacing: '0%',
              fontFamily: 'var(--font-inter)',
              textRendering: 'optimizeLegibility'
            }}>
              Tests online per a oposicions a Catalunya:
            </h1>
            <h2 className="mb-6 md:mb-8" style={{ 
              color: '#5FBFF9', 
              fontSize: 'clamp(32px, 8vw, 70px)', 
              fontWeight: 800, 
              lineHeight: '1.3', 
              letterSpacing: '0%',
              fontFamily: 'var(--font-inter)',
              textRendering: 'optimizeLegibility'
            }}>
              Mossos, Bombers, i més.
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              Prepara les proves amb preguntes actualitzades, simulacres i seguiment del teu progrés.
              <br />
              Tot en català i amb el millor preu.
            </p>
            
            <button className="text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg md:text-xl font-medium hover:opacity-90 transition-colors" style={{ backgroundColor: '#5FBFF9' }}>
              Uneix-te i comença
            </button>
          </div>
        </div>

        {/* Tests section - positioned exactly as in Figma */}
        <div className="mx-3 md:mx-6 rounded-3xl shadow-lg relative z-10 mb-12 md:mb-16" style={{ backgroundColor: '#F9F4F1' }}>
          {/* Simple testimonial bubble - only on desktop */}
          <div className="absolute -top-4 right-8 md:right-12 bg-white rounded-xl p-3 shadow-md max-w-xs z-20 hidden md:block">
            <div className="text-center mb-2">
              <span className="text-lg">👍</span>
              <div className="text-xs text-gray-600 font-medium">100% recomanable</div>
            </div>
            <p className="text-xs text-gray-700 italic">"Els tests són súper realistes!"</p>
          </div>

          <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-2 px-4 md:px-0" style={{ 
                fontSize: 'clamp(24px, 5vw, 32px)', 
                fontWeight: 'mixed', 
                lineHeight: '1.2', 
                letterSpacing: '0%',
                fontFamily: 'var(--font-inter)'
              }}>
                La selecció de tests per a oposicions de bomber
              </h3>
              <p className="text-gray-900 px-4 md:px-0" style={{ 
                fontSize: 'clamp(24px, 5vw, 32px)', 
                fontWeight: 'mixed', 
                lineHeight: '1.2', 
                letterSpacing: '0%',
                fontFamily: 'var(--font-inter)'
              }}>
                més completa del mercat. Prova alguns{" "}
                <span className="font-bold" style={{ color: '#5FBFF9' }}>tests gratuïts i comprova el teu nivell!</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-4 items-center justify-items-center max-w-4xl mx-auto">
              {/* Left side - decorative arrow and tests list */}
              <div className="relative w-full flex justify-center">
                {/* Decorative curved arrow using Group.png - properly positioned */}
                <div className="absolute -left-20 top-12 w-36 h-44 hidden md:block">
                  <Image
                    src="/Group.png"
                    alt="Decorative arrow"
                    width={144}
                    height={176}
                    className="object-contain"
                  />
                </div>
                
                {/* More compact and centered cards */}
                <div className="space-y-4 md:space-y-3 w-full max-w-md">
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Llei de Protecció Civil de Catalunya</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Gestió d'emergències i protocols d'actuació</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Materials per a la lluita contra incendis</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Organització territorial de Catalunya</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Estatut d'Autonomia de Catalunya</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Constitució Espanyola de 1978</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - firefighter helmet - bigger and centered */}
              <div className="flex justify-center items-center mt-8 md:mt-0">
                <div className="relative">
                  <Image
                    src="/ChatGPT Image 27 jul 2025, 19_47_19.png"
                    alt="Firefighter helmet"
                    width={280}
                    height={280}
                    className="object-contain md:w-[320px] md:h-[320px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Testimonials Section - Only visible on mobile */}
        <section className="mx-3 rounded-2xl shadow-sm relative z-10 mb-8 md:hidden" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="px-4 py-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Què diuen els nostres estudiants</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">👍</span>
                  <div className="text-sm text-gray-600 font-medium">100% recomanable</div>
                </div>
                <p className="text-sm text-gray-700 italic">"Els tests són súper realistes!"</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">❤️</span>
                  <div className="text-sm text-gray-600 font-medium">La millor plataforma</div>
                </div>
                <p className="text-sm text-gray-700 italic">"Finalment he aprovat!"</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">💪</span>
                  <div className="text-sm text-gray-600 font-medium">He aprovat!</div>
                </div>
                <p className="text-sm text-gray-700 italic">"Els tests de Mossos són perfectes!"</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">⭐</span>
                  <div className="text-sm text-gray-600 font-medium">5 estrelles</div>
                </div>
                <p className="text-sm text-gray-700 italic">"L'equip sempre m'ajuda"</p>
              </div>
            </div>
          </div>
        </section>

        {/* New dark section - La millor qualitat */}
        <section className="bg-gray-900 shadow-lg relative z-10 mb-12 md:mb-16">
          {/* Simple testimonial bubble - only on desktop */}
          <div className="absolute -top-6 left-8 md:left-16 bg-white rounded-xl p-3 shadow-md max-w-xs z-20 hidden md:block">
            <div className="text-center mb-2">
              <span className="text-lg">❤️</span>
              <div className="text-xs text-gray-600 font-medium">La millor plataforma</div>
            </div>
            <p className="text-xs text-gray-700 italic">"Finalment he aprovat!"</p>
          </div>

          {/* Catalunya silhouette behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 ml-10">
            <div className="relative w-96 h-96">
              <Image
                src="/Vector 9.png"
                alt="Catalunya silhouette"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Content */}
              <div className="relative z-20 ml-0 md:ml-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight px-4 md:px-0">
                  La millor qualitat en tests d'oposicions,
                  <br />
                  en un sol lloc.
                </h3>
                
                <div className="mb-8 relative px-4 md:px-0">
                  <a href="#" className="text-blue-400 text-lg md:text-xl font-semibold underline hover:text-blue-300 transition-colors">
                    Fes la prova i convènç-te'n!
                  </a>
                  
                  {/* Decorative arrow pointing from copy to button */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-16 rotate-90 hidden md:block">
                    <Image
                      src="/Group.png"
                      alt="Decorative arrow"
                      width={48}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="relative inline-block px-4 md:px-0">
                  <button className="text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium hover:opacity-90 transition-colors" style={{ backgroundColor: '#5FBFF9' }}>
                    Uneix-te i comença
                  </button>
                </div>
              </div>
              
              {/* Right side - Number 1 with stars - even bigger */}
              <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-0">
                <div className="relative">
                  <span className="text-white font-bold leading-none" style={{ fontSize: 'clamp(8rem, 15vw, 20rem)' }}>1</span>
                  <span className="text-white font-normal absolute" style={{ 
                    fontSize: 'clamp(2rem, 4vw, 6xl)', 
                    top: 'clamp(0.5rem, 2vw, 2.5rem)', 
                    left: 'clamp(-2rem, -4vw, -4rem)' 
                  }}>nº</span>
                </div>
                
                {/* 5 Stars */}
                <div className="flex space-x-2 md:space-x-3 mt-6 md:mt-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mossos d'Esquadra tests section */}
        <div className="mx-3 md:mx-6 rounded-3xl shadow-lg relative z-10 mb-12 md:mb-16" style={{ backgroundColor: '#F9F4F1' }}>
          {/* Simple testimonial bubble - only on desktop */}
          <div className="absolute -top-4 right-8 md:right-16 bg-white rounded-xl p-3 shadow-md max-w-xs z-20 hidden md:block">
            <div className="text-center mb-2">
              <span className="text-lg">💪</span>
              <div className="text-xs text-gray-600 font-medium">He aprovat!</div>
            </div>
            <p className="text-xs text-gray-700 italic">"Els tests de Mossos són perfectes!"</p>
          </div>

          <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-2 px-4 md:px-0" style={{ 
                fontSize: 'clamp(24px, 5vw, 32px)', 
                fontWeight: 'mixed', 
                lineHeight: '1.2', 
                letterSpacing: '0%',
                fontFamily: 'var(--font-inter)'
              }}>
                Prepara les oposicions a Mosso d'Esquadra amb els millors tests.
              </h3>
              <p className="text-gray-900 px-4 md:px-0" style={{ 
                fontSize: 'clamp(24px, 5vw, 32px)', 
                fontWeight: 'mixed', 
                lineHeight: '1.2', 
                letterSpacing: '0%',
                fontFamily: 'var(--font-inter)'
              }}>
                Accedeix a proves{" "}
                <span className="font-bold" style={{ color: '#5FBFF9' }}>gratuïtes i avalua el teu nivell ara mateix!</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-4 items-center justify-items-center max-w-4xl mx-auto">
              {/* Left side - decorative arrow and tests list */}
              <div className="relative w-full flex justify-center">
                {/* Decorative curved arrow using Group.png - properly positioned */}
                <div className="absolute -left-20 top-12 w-36 h-44 hidden md:block">
                  <Image
                    src="/Group.png"
                    alt="Decorative arrow"
                    width={144}
                    height={176}
                    className="object-contain"
                  />
                </div>
                
                {/* More compact and centered cards */}
                <div className="space-y-4 md:space-y-3 w-full max-w-md">
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Llei de Protecció Civil de Catalunya</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Gestió d'emergències i protocols d'actuació</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Materials per a la lluita contra incendis</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Organització territorial de Catalunya</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Estatut d'Autonomia de Catalunya</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-5 md:py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">Constitució Espanyola de 1978</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#5FBFF9' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Mossos image */}
              <div className="flex justify-center items-center mt-8 md:mt-0">
                <div className="relative">
                  <Image
                    src="/ChatGPT Image 27 jul 2025, 20_17_51.png"
                    alt="Mossos d'Esquadra"
                    width={280}
                    height={280}
                    className="object-contain md:w-[320px] md:h-[320px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <section className="mx-3 md:mx-6 rounded-3xl shadow-lg relative z-10 mb-12 md:mb-16" style={{ backgroundColor: '#F8F9FA' }}>
          {/* Simple testimonial bubble - only on desktop */}
          <div className="absolute -bottom-4 right-6 md:right-8 bg-white rounded-xl p-3 shadow-md max-w-xs z-20 hidden md:block">
            <div className="text-center mb-2">
              <span className="text-lg">⭐</span>
              <div className="text-xs text-gray-600 font-medium">5 estrelles</div>
            </div>
            <p className="text-xs text-gray-700 italic">"L'equip sempre m'ajuda"</p>
          </div>

          <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 md:px-0">
                Més de 10.000 estudiants ja confien en nosaltres
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
                Els millors resultats en oposicions de Catalunya. Descobreix per què som la plataforma líder.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Stat 1 */}
              <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#5FBFF9' }}>+2.500</div>
                <div className="text-base md:text-lg font-semibold text-gray-900 mb-2">Preguntes</div>
                <div className="text-sm md:text-base text-gray-600">actualitzades i verificades per experts</div>
              </div>

              {/* Stat 2 */}
              <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#5FBFF9' }}>24/7</div>
                <div className="text-base md:text-lg font-semibold text-gray-900 mb-2">Suport</div>
                <div className="text-sm md:text-base text-gray-600">sempre disponible per ajudar-te</div>
              </div>
            </div>

            <div className="text-center">
              <button className="text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg md:text-xl font-medium hover:opacity-90 transition-colors" style={{ backgroundColor: '#5FBFF9' }}>
                Comença ara gratis
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-6 rounded-3xl shadow-lg relative z-10 mb-16" style={{ backgroundColor: '#5FBFF9' }}>
          <div className="container mx-auto px-12 py-16 text-center relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6">
              Prepara't per al teu futur professional
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Uneix-te a milers d'estudiants que ja han aconseguit la seva plaça amb OpoFast
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors" style={{ color: '#5FBFF9' }}>
                Prova gratuïta
              </button>
              <button className="text-white px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-white hover:text-blue-500 transition-colors">
                Veure plans
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="mx-3 md:mx-6 rounded-3xl shadow-lg relative z-10 mb-12 md:mb-16" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 md:px-0">
              Preguntes freqüents
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq-1');
                  const arrow = document.getElementById('arrow-1');
                  if (content && arrow) {
                    if (content.classList.contains('hidden')) {
                      content.classList.remove('hidden');
                      arrow.style.transform = 'rotate(180deg)';
                    } else {
                      content.classList.add('hidden');
                      arrow.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  Els tests d'oposicions d'OpoFast són gratuïts?
                </span>
                <svg id="arrow-1" className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq-1" className="px-6 pb-5 hidden">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    A OpoFast pots realitzar tests de prova gratuïts de cada oposició per conèixer com funciona la plataforma. Nosaltres a aquest test li anomenem demo i pots completar-lo tantes vegades com vulguis. Per fer tests per temes, per matèries, simulacres d'examen, i molts altres, necessites subscriure't a alguna de les oposicions disponibles en qualsevol de les duracions que oferim.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq-2');
                  const arrow = document.getElementById('arrow-2');
                  if (content && arrow) {
                    if (content.classList.contains('hidden')) {
                      content.classList.remove('hidden');
                      arrow.style.transform = 'rotate(180deg)';
                    } else {
                      content.classList.add('hidden');
                      arrow.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  Com estudiar per a oposicions amb tests?
                </span>
                <svg id="arrow-2" className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq-2" className="px-6 pb-5 hidden">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    La millor manera de preparar una oposició amb tests és practicant constantment. A mesura que vas estudiant, realitza tests per validar els coneixements. Al finalitzar la jornada, practica amb un test de tot l'estudiat en el dia i en els dies previs, generant els teus propis simulacres d'examen. Repasar amb tests de preguntes fallades són només algunes de les tècniques que millors resultats ofereixen.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq-3');
                  const arrow = document.getElementById('arrow-3');
                  if (content && arrow) {
                    if (content.classList.contains('hidden')) {
                      content.classList.remove('hidden');
                      arrow.style.transform = 'rotate(180deg)';
                    } else {
                      content.classList.add('hidden');
                      arrow.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  Es poden realitzar tests de temes concrets, per matèries, etc?
                </span>
                <svg id="arrow-3" className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq-3" className="px-6 pb-5 hidden">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Sí, a OpoFast pots fer els tests al teu gust, és a dir, de temes concrets, mesclant varis temes, d'una matèria al complet, per apartats, de preguntes fallades, simulacres d'examen, exàmens de convocatòries anteriors, etc... i tot amb la garantia d'estar practicant amb el millor contingut del mercat i sempre actualitzat.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq-4');
                  const arrow = document.getElementById('arrow-4');
                  if (content && arrow) {
                    if (content.classList.contains('hidden')) {
                      content.classList.remove('hidden');
                      arrow.style.transform = 'rotate(180deg)';
                    } else {
                      content.classList.add('hidden');
                      arrow.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  Quant costa OpoFast?
                </span>
                <svg id="arrow-4" className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq-4" className="px-6 pb-5 hidden">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    El preu de les subscripcions d'OpoFast varia en funció del tipus de subscripció que triïs i la seva duració: curs (per a les especialitats disponibles) o preparació general. Per facilitar-te l'estudi, com més mesos es contracti més barat surt el mes.{" "}
                    <span className="font-semibold" style={{ color: '#5FBFF9' }}>Tria la teva oposició i coneix el seu preu!</span>
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq-5');
                  const arrow = document.getElementById('arrow-5');
                  if (content && arrow) {
                    if (content.classList.contains('hidden')) {
                      content.classList.remove('hidden');
                      arrow.style.transform = 'rotate(180deg)';
                    } else {
                      content.classList.add('hidden');
                      arrow.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  Quines oposicions estan disponibles a OpoFast?
                </span>
                <svg id="arrow-5" className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq-5" className="px-6 pb-5 hidden">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Actualment a OpoFast oferim preparació per a les oposicions de Mossos d'Esquadra i Bombers de Catalunya. Estem treballant constantment per ampliar la nostra oferta i afegir més oposicions. Mantén-te al dia de les novetats seguint-nos a les xarxes socials!
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 6 - SEO optimized */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const content = document.getElementById('faq-6');
                  const arrow = document.getElementById('arrow-6');
                  if (content && arrow) {
                    if (content.classList.contains('hidden')) {
                      content.classList.remove('hidden');
                      arrow.style.transform = 'rotate(180deg)';
                    } else {
                      content.classList.add('hidden');
                      arrow.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
                  Com preparar oposicions a Catalunya amb tests online?
                </span>
                <svg id="arrow-6" className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="faq-6" className="px-6 pb-5 hidden">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Preparar oposicions a Catalunya amb tests online és la manera més eficaç d'estudiar. OpoFast ofereix tests actualitzats per a oposicions de Mossos d'Esquadra, Bombers de Catalunya i altres cossos de seguretat. Els nostres tests inclouen preguntes sobre legislació catalana, protocols d'emergència i temari específic de cada oposició. Amb la nostra plataforma pots practicar des de casa, fer simulacres d'examen i seguir el teu progrés en temps real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
