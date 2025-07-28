import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-sans">
      {/* Header with border radius */}
      <header className="mx-3 md:mx-6 mt-4 md:mt-6 px-4 md:px-6 py-5 md:py-4 relative z-20 rounded-2xl" style={{ backgroundColor: '#5FBFF9' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4">
            <button className="text-white md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-2 md:space-x-3">
              <Image 
                src="/icon (7).png" 
                alt="OpoFast logo" 
                width={45} 
                height={45}
                className="object-contain md:w-[55px] md:h-[55px]"
              />
              <span className="text-white font-bold text-lg md:text-2xl">opoFast</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-blue-100 text-lg">Calculadora</a>
            <a href="#" className="text-white hover:text-blue-100 text-lg">Notes de tall</a>
            <a href="#" className="text-white hover:text-blue-100 text-lg">Millors Vídeos</a>
          </nav>
          
          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="bg-white px-3 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm md:text-base" style={{ color: '#5FBFF9' }}>
              <span className="hidden sm:inline">Fes-te Premium</span>
              <span className="sm:hidden">Premium</span>
            </button>
            <button className="text-white px-3 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:opacity-90 transition-colors text-sm md:text-base" style={{ backgroundColor: '#4A9FE7' }}>
              <span className="hidden sm:inline">Iniciar Sessió</span>
              <span className="sm:hidden">Login</span>
            </button>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/icon (7).png" 
                  alt="OpoFast logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
                <span className="text-white font-bold text-2xl">opoFast</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                La plataforma líder per preparar oposicions a Catalunya. Tests actualitzats, simulacres realistes i seguiment personalitzat.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Oposicions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mossos d'Esquadra</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bombers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Suport</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centre d'ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacte</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacitat</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termes d'ús</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 OpoFast. Tots els drets reservats.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Fet amb ❤️ a Catalunya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
