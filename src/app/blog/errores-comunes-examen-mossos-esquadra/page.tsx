"use client";

import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function ErroresComunesMossosPage() {
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
              <span className="text-gray-500">7 min de lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Errores comunes en el examen teórico de Mossos d'Esquadra y cómo evitarlos
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Analiza las preguntas típicas que fallan los opositores y estrategias efectivas para abordarlas mejor en el <strong>examen teórico Mossos d'Esquadra</strong>. Aprende de los errores más frecuentes y mejora tu puntuación.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 20_17_51.png"
                alt="Errores comunes examen Mossos d'Esquadra"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Los 10 errores más frecuentes en el examen de Mossos</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Después de analizar miles de respuestas de opositores, hemos identificado los patrones de error más comunes en el <strong>examen teórico Mossos d'Esquadra</strong>. Conocer estos errores te ayudará a <strong>cómo aprobar Mossos</strong> con mejor puntuación.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Confundir competencias autonómicas y estatales</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>Error típico</strong>: No distinguir claramente entre las competencias de los Mossos d'Esquadra y otros cuerpos policiales.
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Mossos d'Esquadra</strong>: Seguridad ciudadana, tráfico, investigación criminal en Catalunya</li>
              <li><strong>Guardia Civil</strong>: Puertos, aeropuertos, fronteras, medio rural</li>
              <li><strong>Policía Nacional</strong>: Terrorismo, extranjería, grandes investigaciones</li>
            </ul>

            {/* CTA Box 1 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#FFF3E0', borderColor: '#FF9800' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">⚠️ Evita estos errores con OpoFast</h4>
              <p className="text-gray-700 mb-4">
                Nuestros tests incluyen explicaciones detalladas de cada respuesta incorrecta. Aprende no solo la respuesta correcta, sino por qué las otras opciones son erróneas.
              </p>
              <a 
                href="/mossos"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Mossos d'Esquadra →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Malinterpretar preguntas sobre derechos fundamentales</h3>
            
            <p className="text-gray-700 mb-4">
              Las preguntas sobre la Constitución y derechos fundamentales suelen tener matices que confunden:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Leer toda la pregunta</strong>: Muchas veces la clave está en el final</li>
              <li><strong>Identificar excepciones</strong>: "Todos excepto...", "Salvo en casos de..."</li>
              <li><strong>Distinguir entre derechos y libertades</strong>: No son lo mismo</li>
              <li><strong>Conocer las limitaciones</strong>: Cuándo y cómo se pueden restringir</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Errores en cálculo de plazos procesales</h3>
            
            <p className="text-gray-700 mb-4">
              Los plazos en derecho procesal penal son una fuente constante de errores:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Detención preventiva</strong>: Máximo 72 horas (no 48)</li>
              <li><strong>Prisión provisional</strong>: Diferentes plazos según el delito</li>
              <li><strong>Recursos</strong>: Distinguir entre apelación y casación</li>
              <li><strong>Prescripción</strong>: Varía según la gravedad del delito</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Confusiones en normativa de tráfico</h3>
            
            <p className="text-gray-700 mb-4">
              Las preguntas de tráfico son aparentemente fáciles, pero tienen trampas:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Velocidades específicas</strong>: Autopistas, autovías, carreteras convencionales</li>
              <li><strong>Señalización</strong>: Diferencias entre prohibición y obligación</li>
              <li><strong>Sanciones</strong>: Importes exactos y puntos del carnet</li>
              <li><strong>Alcohol y drogas</strong>: Tasas permitidas según el tipo de conductor</li>
            </ul>

            {/* CTA Box 2 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#E8F5E8', borderColor: '#4CAF50' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">📊 Analiza tus errores con estadísticas</h4>
              <p className="text-gray-700 mb-4">
                OpoFast te muestra exactamente en qué temas fallas más y te recomienda qué estudiar. No pierdas tiempo repasando lo que ya sabes.
              </p>
              <a 
                href="/mossos"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Mossos d'Esquadra →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Errores en organización territorial de Catalunya</h3>
            
            <p className="text-gray-700 mb-4">
              La organización administrativa catalana es específica y diferente al resto de España:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Comarcas</strong>: Número exacto y principales características</li>
              <li><strong>Veguerías</strong>: División territorial administrativa</li>
              <li><strong>Diputaciones</strong>: Solo 4 en Catalunya (Barcelona, Girona, Lleida, Tarragona)</li>
              <li><strong>Generalitat</strong>: Estructura y competencias específicas</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estrategias para evitar errores típicos</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Técnica de lectura comprensiva</h4>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Lee la pregunta completa</strong> antes de mirar las opciones</li>
              <li><strong>Identifica palabras clave</strong>: "siempre", "nunca", "excepto", "salvo"</li>
              <li><strong>Descarta opciones absurdas</strong> primero</li>
              <li><strong>Si dudas entre dos</strong>, vuelve a leer la pregunta</li>
            </ol>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Gestión del tiempo en el examen</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>100 preguntas en 100 minutos</strong>: 1 minuto por pregunta</li>
              <li><strong>Primera pasada rápida</strong>: Responde las que sepas seguro</li>
              <li><strong>Segunda pasada</strong>: Reflexiona sobre las dudosas</li>
              <li><strong>Últimos 10 minutos</strong>: Revisa respuestas marcadas</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Errores de estrategia de examen</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">¿Responder todas las preguntas?</h4>
            <p className="text-gray-700 mb-4">
              En el <strong>examen teórico Mossos d'Esquadra</strong> no hay penalización por respuesta incorrecta, por tanto:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Responde TODAS las preguntas</strong>: No dejes ninguna en blanco</li>
              <li><strong>Si no sabes, intuye</strong>: Tienes 25% de probabilidades</li>
              <li><strong>Elimina opciones absurdas</strong>: Mejora tus probabilidades</li>
              <li><strong>Confía en tu primera impresión</strong>: Suele ser correcta</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Preparación específica por materias</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Derecho Constitucional</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Memoriza los artículos clave (14, 15, 17, 18, 19, 20, 21)</li>
              <li>Practica con casos prácticos de derechos fundamentales</li>
              <li>Conoce las excepciones y limitaciones</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Derecho Penal</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Distingue entre delito y falta (ya no existen las faltas)</li>
              <li>Memoriza las penas principales de delitos comunes</li>
              <li>Practica con casos de legítima defensa</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Legislación Catalana</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Estatuto de Autonomía: artículos sobre competencias</li>
              <li>Ley de Policía de Catalunya: estructura y funciones</li>
              <li>Normativa específica de seguridad ciudadana</li>
            </ul>

            {/* Final CTA */}
            <div className="p-8 rounded-2xl my-12 text-center" style={{ background: 'linear-gradient(135deg, #5FBFF9 0%, #4A9FE7 100%)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">¿Preparado para evitar todos estos errores?</h4>
              <p className="text-lg mb-6 text-white opacity-95">
                No cometas los mismos errores que miles de opositores. Con OpoFast practicas con preguntas reales y aprendes de cada error para <strong>aprobar Mossos d'Esquadra</strong> a la primera.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/mossos"
                  className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" 
                  style={{ color: '#5FBFF9' }}
                >
                  Empieza a practicar sin errores
                </a>
                <a 
                  href="/mossos"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:opacity-90 transition-colors" 
                  style={{ borderColor: 'white', backgroundColor: 'transparent' }}
                >
                  Ver planes Mossos d'Esquadra
                </a>
              </div>
              <p className="text-sm mt-4 text-white opacity-80">
                ✓ Explicaciones detalladas • ✓ Análisis de errores • ✓ Mejora continua
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Conocer los <strong>errores examen policia</strong> más comunes te da una ventaja significativa. No se trata solo de estudiar más, sino de estudiar mejor y de manera más inteligente. La clave está en practicar con tests reales y aprender de cada error.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Recuerda que cada error es una oportunidad de aprendizaje. Utiliza plataformas como OpoFast que te permiten analizar tus fallos y convertirlos en fortalezas. La preparación inteligente es la que marca la diferencia entre aprobar y destacar.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blog" 
              className="inline-flex items-center hover:text-blue-800 font-medium"
              style={{ color: '#5FBFF9' }}
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