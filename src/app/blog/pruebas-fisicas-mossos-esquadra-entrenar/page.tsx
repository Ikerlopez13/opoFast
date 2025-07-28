"use client";

import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function PruebasFisicasMossosPage() {
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
              <span className="text-gray-500">6 min de lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Las pruebas físicas para Mossos d'Esquadra: cómo entrenar para superarlas
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre las rutinas recomendadas, consejos para evitar lesiones y cómo planificar el entrenamiento físico junto al estudio para superar las <strong>pruebas físicas Mossos d'Esquadra</strong>. Una guía completa para prepararte físicamente.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 20_17_51.png"
                alt="Pruebas físicas Mossos d'Esquadra entrenamiento"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿En qué consisten las pruebas físicas de Mossos d'Esquadra?</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Las <strong>pruebas físicas Mossos d'Esquadra</strong> son una parte fundamental del proceso selectivo que evalúa tu condición física y capacidad para desempeñar las funciones policiales. Para <strong>entrenar oposiciones Mossos</strong> exitosamente, necesitas un plan específico que combine preparación teórica y física.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pruebas físicas oficiales</h3>
            
            <p className="text-gray-700 mb-4">
              El examen físico consta de las siguientes pruebas obligatorias:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-800">
              <li><strong>Carrera de velocidad (60 metros)</strong>: Mide tu capacidad de aceleración y velocidad máxima</li>
              <li><strong>Carrera de resistencia (1000 metros)</strong>: Evalúa tu resistencia cardiovascular</li>
              <li><strong>Salto de longitud sin carrera</strong>: Prueba tu potencia explosiva de piernas</li>
              <li><strong>Flexiones de brazos</strong>: Mide la fuerza y resistencia del tren superior</li>
              <li><strong>Natación (50 metros estilo libre)</strong>: Evalúa tu técnica y resistencia acuática</li>
            </ul>

            {/* CTA Box 1 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#E3F2FD', borderColor: '#5FBFF9' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🏃‍♂️ Combina estudio y entrenamiento con OpoFast</h4>
              <p className="text-gray-700 mb-4">
                Mientras entrenas físicamente, no descuides la parte teórica. En OpoFast puedes estudiar desde el móvil entre series de entrenamiento y optimizar tu tiempo de preparación.
              </p>
              <a 
                href="/mossos"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Mossos d'Esquadra →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan de entrenamiento específico</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 1: Acondicionamiento base (4-6 semanas)</h4>
            <p className="text-gray-700 mb-4">
              Si llevas tiempo sin hacer ejercicio, esta fase es crucial para evitar lesiones:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Lunes y Miércoles</strong>: Carrera suave 20-30 minutos + flexiones básicas</li>
              <li><strong>Martes y Jueves</strong>: Natación técnica 20-30 minutos</li>
              <li><strong>Viernes</strong>: Ejercicios de fuerza funcional y estiramientos</li>
              <li><strong>Sábado</strong>: Carrera larga suave (45-60 minutos)</li>
              <li><strong>Domingo</strong>: Descanso activo (caminar, yoga)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 2: Desarrollo específico (6-8 semanas)</h4>
            <p className="text-gray-700 mb-4">
              Una vez establecida la base, intensifica el entrenamiento específico para cada prueba:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Velocidad</strong>: Series de 60m con descansos completos (3x60m, 2 veces por semana)</li>
              <li><strong>Resistencia</strong>: Intervalos de 400m y carrera continua progresiva</li>
              <li><strong>Fuerza</strong>: Flexiones progresivas, sentadillas y trabajo de core</li>
              <li><strong>Salto</strong>: Ejercicios pliométricos y técnica de salto</li>
              <li><strong>Natación</strong>: Técnica de crol y series de velocidad</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 3: Puesta a punto (2-3 semanas)</h4>
            <p className="text-gray-700 mb-6">
              Las últimas semanas antes del examen, reduce el volumen pero mantén la intensidad. Practica las pruebas en condiciones similares al examen oficial.
            </p>

            {/* CTA Box 2 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#E8F5E8', borderColor: '#4CAF50' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">📚 Optimiza tu tiempo de estudio</h4>
              <p className="text-gray-700 mb-4">
                El entrenamiento físico requiere tiempo, pero no puedes descuidar el estudio. Con OpoFast puedes hacer tests rápidos durante los descansos entre ejercicios y aprovechar cada minuto.
              </p>
              <a 
                href="/mossos"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Mossos d'Esquadra →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rutinas específicas por prueba</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Entrenamiento para 60 metros velocidad</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Calentamiento específico</strong>: 10 min trote + ejercicios dinámicos</li>
              <li><strong>Técnica de salida</strong>: Practica la posición de salida baja</li>
              <li><strong>Aceleración</strong>: Series de 20-30m con salida explosiva</li>
              <li><strong>Velocidad máxima</strong>: Series de 60m con descanso completo (4-5 min)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Entrenamiento para 1000 metros</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Carrera continua</strong>: 30-45 min a ritmo cómodo (base aeróbica)</li>
              <li><strong>Intervalos largos</strong>: 4x400m con 90" descanso</li>
              <li><strong>Tempo runs</strong>: 15-20 min a ritmo de competición</li>
              <li><strong>Fartlek</strong>: Juegos de velocidad en carrera continua</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Entrenamiento de flexiones</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Flexiones básicas</strong>: Series progresivas (empieza con las que puedas)</li>
              <li><strong>Flexiones inclinadas</strong>: Si no puedes hacer las normales</li>
              <li><strong>Flexiones diamante</strong>: Para mayor intensidad</li>
              <li><strong>Flexiones con palmada</strong>: Desarrolla potencia explosiva</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consejos para evitar lesiones</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Progresión gradual</strong>: Aumenta la intensidad máximo 10% semanal</li>
              <li><strong>Calentamiento obligatorio</strong>: Nunca entrenes sin calentar 10-15 minutos</li>
              <li><strong>Estiramientos post-ejercicio</strong>: Dedica 10 minutos después de cada sesión</li>
              <li><strong>Descanso adecuado</strong>: Respeta los días de descanso programados</li>
              <li><strong>Hidratación</strong>: Bebe agua antes, durante y después del ejercicio</li>
              <li><strong>Escucha tu cuerpo</strong>: Si sientes dolor, para y consulta un especialista</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrición para el rendimiento</h3>
            
            <p className="text-gray-700 mb-4">
              Una buena alimentación es clave para <strong>entrenar para oposiciones Mossos</strong>:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Desayuno pre-entrenamiento</strong>: Carbohidratos complejos + proteína</li>
              <li><strong>Hidratación constante</strong>: 2-3 litros de agua al día</li>
              <li><strong>Post-entrenamiento</strong>: Proteína + carbohidratos en 30-60 minutos</li>
              <li><strong>Cena ligera</strong>: Evita comidas pesadas si entrenas por la tarde</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Planificación semanal estudio + entrenamiento</h3>
            
            <p className="text-gray-700 mb-4">
              Combinar <strong>preparación física policia</strong> con estudio requiere organización:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>06:00-07:30</strong>: Entrenamiento físico (antes del calor)</li>
              <li><strong>08:00-09:00</strong>: Desayuno y ducha</li>
              <li><strong>09:00-13:00</strong>: Estudio intensivo (máxima concentración)</li>
              <li><strong>13:00-15:00</strong>: Comida y descanso</li>
              <li><strong>15:00-18:00</strong>: Repaso y tests con OpoFast</li>
              <li><strong>18:00-19:00</strong>: Tiempo libre/estiramientos</li>
              <li><strong>19:00-21:00</strong>: Cena y descanso</li>
            </ol>

            {/* Final CTA */}
            <div className="p-8 rounded-2xl my-12 text-center" style={{ background: 'linear-gradient(135deg, #5FBFF9 0%, #4A9FE7 100%)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">¿Preparado para entrenar como un profesional?</h4>
              <p className="text-lg mb-6 text-white opacity-95">
                El éxito en las <strong>pruebas físicas Mossos d'Esquadra</strong> requiere constancia y método. Mientras entrenas tu cuerpo, no descuides tu mente. OpoFast te permite estudiar desde cualquier lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/mossos"
                  className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" 
                  style={{ color: '#5FBFF9' }}
                >
                  Comienza tu preparación integral
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
                ✓ Plan físico + teórico • ✓ Acceso móvil • ✓ Seguimiento de progreso
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Superar las <strong>pruebas físicas Mossos d'Esquadra</strong> requiere un enfoque sistemático y constante. No es solo cuestión de estar en forma, sino de entrenar específicamente para cada prueba. La clave está en combinar un plan de entrenamiento progresivo con una preparación teórica sólida.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Recuerda que la preparación física debe ir de la mano con el estudio. Utiliza herramientas como OpoFast para optimizar tu tiempo y mantener el equilibrio entre ambas preparaciones. La constancia y la planificación te llevarán al éxito.
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