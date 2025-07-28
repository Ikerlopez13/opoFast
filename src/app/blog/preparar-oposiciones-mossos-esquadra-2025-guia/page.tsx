"use client";

import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function MossosGuiaPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#F8F9FA', paddingTop: '1rem' }}>
        <header className="mx-3 md:mx-6 px-4 md:px-6 py-5 md:py-4 relative z-20 rounded-2xl" style={{ backgroundColor: '#5FBFF9' }}>
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
              <a href="/" className="text-white hover:text-blue-100 text-lg">Inici</a>
              <a href="/bombers" className="text-white hover:text-blue-100 text-lg">Bombers</a>
              <a href="/mossos" className="text-white hover:text-blue-100 text-lg">Mossos d'Esquadra</a>
              <a href="/blog" className="text-white hover:text-blue-100 text-lg font-semibold">Blog</a>
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
      </div>

      {/* Article Content */}
      <main className="relative pt-8 md:pt-12">
        <article className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center mb-6">
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold text-white mr-4"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Mossos d'Esquadra
              </span>
              <span className="text-gray-500">8 min de lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cómo preparar las oposiciones de Mossos d'Esquadra en 2025: Guía paso a paso
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre el proceso completo para preparar las <strong>oposiciones de Mossos d'Esquadra 2025</strong>, desde requisitos hasta consejos prácticos para el día del examen. Esta guía te ayudará a planificar tu preparación de manera efectiva.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 20_17_51.png"
                alt="Preparar oposiciones Mossos d'Esquadra 2025"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué necesitas saber sobre las oposiciones de Mossos d'Esquadra 2025?</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Las <strong>oposiciones de Mossos d'Esquadra 2025</strong> representan una excelente oportunidad para formar parte del cuerpo de policía autonómica de Catalunya. Para <strong>preparar oposiciones Mossos d'Esquadra</strong> de manera efectiva, es fundamental conocer todos los aspectos del proceso selectivo.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Requisitos básicos para opositar a Mossos d'Esquadra</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Tener nacionalidad española o de algún Estado miembro de la Unión Europea</li>
              <li>Edad mínima de 18 años y no superar los 35 años</li>
              <li>Título de Bachillerato, FP de grado superior o equivalente</li>
              <li>Estatura mínima de 1,65 metros</li>
              <li>Carnet de conducir tipo B</li>
              <li>No haber sido condenado por delito doloso</li>
            </ul>

            {/* CTA Box 1 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">💡 Acelera tu preparación con OpoFast</h4>
              <p className="text-gray-700 mb-4">
                ¿Quieres prepararte con los mejores recursos actualizados? En OpoFast tenemos el <strong>temario Mossos 2025</strong> completamente actualizado y más de 2.500 preguntas para practicar.
              </p>
              <a 
                href="/mossos"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Mossos d'Esquadra →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fases del proceso selectivo</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Pruebas de conocimientos</h4>
            <p className="text-gray-700 mb-4">
              El <strong>examen teórico Mossos d'Esquadra</strong> consta de 100 preguntas tipo test con 4 opciones de respuesta. El temario incluye:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Constitución Española</strong> y Estatuto de Autonomía de Catalunya</li>
              <li><strong>Legislación de seguridad pública</strong> y protección civil</li>
              <li><strong>Derecho penal</strong> y procesal penal</li>
              <li><strong>Normativa de tráfico</strong> y seguridad vial</li>
              <li><strong>Organización policial</strong> y procedimientos operativos</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Pruebas físicas</h4>
            <p className="text-gray-700 mb-4">
              Las <strong>pruebas físicas Mossos d'Esquadra</strong> evalúan tu condición física mediante:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Carrera de velocidad (60 metros)</li>
              <li>Carrera de resistencia (1000 metros)</li>
              <li>Salto de longitud sin carrera</li>
              <li>Flexiones de brazos</li>
              <li>Natación (50 metros estilo libre)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Pruebas psicotécnicas y entrevista</h4>
            <p className="text-gray-700 mb-6">
              Evaluación de aptitudes intelectuales, personalidad y motivación para el puesto. Es fundamental mostrar estabilidad emocional y vocación de servicio público.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estrategias para aprobar las oposiciones</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Planificación del estudio</h4>
            <p className="text-gray-700 mb-4">
              Para <strong>preparar oposiciones Mossos d'Esquadra Catalunya</strong> de manera eficaz, necesitas un plan estructurado:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Establece un horario fijo</strong> de estudio (mínimo 4-6 horas diarias)</li>
              <li><strong>Divide el temario</strong> en bloques semanales</li>
              <li><strong>Practica con tests</strong> desde el primer día</li>
              <li><strong>Haz simulacros</strong> de examen semanalmente</li>
              <li><strong>Revisa constantemente</strong> los temas ya estudiados</li>
            </ol>

            {/* CTA Box 2 */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🎯 Practica con tests reales</h4>
              <p className="text-gray-700 mb-4">
                En OpoFast tenemos <strong>simulacres d'examen Mossos d'Esquadra</strong> que replican exactamente las condiciones del examen oficial. Practica con preguntas de convocatorias anteriores y mejora tu puntuación.
              </p>
              <a 
                href="/mossos"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Mossos d'Esquadra →
              </a>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Técnicas de memorización</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Mapas mentales</strong> para organizar la información</li>
              <li><strong>Reglas mnemotécnicas</strong> para recordar datos específicos</li>
              <li><strong>Repaso espaciado</strong> para consolidar la memoria a largo plazo</li>
              <li><strong>Explicar en voz alta</strong> lo que has estudiado</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recursos recomendados para la preparación</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Material de estudio actualizado</h4>
            <p className="text-gray-700 mb-4">
              Es crucial contar con el <strong>temario Mossos d'Esquadra actualizado</strong> que incluya las últimas modificaciones legislativas. El material debe estar adaptado específicamente a la normativa catalana.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Plataformas online especializadas</h4>
            <p className="text-gray-700 mb-6">
              Las plataformas digitales como OpoFast ofrecen ventajas únicas para la preparación:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Tests actualizados con las últimas convocatorias</li>
              <li>Simulacros cronometrados</li>
              <li>Estadísticas de progreso personalizadas</li>
              <li>Acceso 24/7 desde cualquier dispositivo</li>
              <li>Corrección automática y explicaciones detalladas</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Errores comunes que debes evitar</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Estudiar sin hacer tests</strong>: La práctica es fundamental</li>
              <li><strong>Dejar la preparación física para el final</strong>: Debe ser constante</li>
              <li><strong>No repasar los temas estudiados</strong>: La curva del olvido es real</li>
              <li><strong>Estudiar con material desactualizado</strong>: Las leyes cambian</li>
              <li><strong>No simular las condiciones del examen</strong>: Practica bajo presión</li>
            </ul>

            {/* Final CTA */}
            <div className="p-8 rounded-2xl my-12 text-center" style={{ background: 'linear-gradient(135deg, #5FBFF9 0%, #4A9FE7 100%)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">¿Listo para comenzar tu preparación?</h4>
              <p className="text-lg mb-6 text-white opacity-95">
                No pierdas más tiempo. En OpoFast tenemos todo lo que necesitas para aprobar las <strong>oposiciones Mossos d'Esquadra 2025</strong>: temario actualizado, tests ilimitados y simulacros reales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/mossos"
                  className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" 
                  style={{ color: '#5FBFF9' }}
                >
                  Prueba gratis ahora
                </a>
                <a 
                  href="/mossos"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:opacity-90 transition-colors" 
                  style={{ borderColor: 'white', backgroundColor: 'transparent' }}
                >
                  Ver planes Premium
                </a>
              </div>
              <p className="text-sm mt-4 text-white opacity-80">
                ✓ Sin permanencia • ✓ Acceso inmediato • ✓ Garantía de satisfacción
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>Preparar oposiciones Mossos d'Esquadra</strong> requiere dedicación, método y los recursos adecuados. Con una planificación correcta, material actualizado y práctica constante con tests, tendrás todas las herramientas necesarias para conseguir tu plaza en la <strong>convocatoria Mossos d'Esquadra 2025</strong>.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Recuerda que el éxito en las oposiciones no depende solo del tiempo dedicado, sino de la calidad de tu preparación. Utiliza recursos especializados, practica regularmente y mantén una actitud positiva durante todo el proceso.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Volver al blog
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
} 