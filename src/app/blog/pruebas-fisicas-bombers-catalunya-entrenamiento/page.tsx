"use client";

import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function PruebasFisicasBombersPage() {
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
                style={{ backgroundColor: '#FF6B35' }}
              >
                Bombers Catalunya
              </span>
              <span className="text-gray-500">9 min de lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cómo preparar las pruebas físicas de Bombers en Catalunya: guía y entrenamiento
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ejercicios específicos, calendario de entrenamiento y consejos para combinar la preparación física con el estudio para las <strong>pruebas físicas bombers Catalunya</strong>. Todo lo que necesitas para superar esta fase crucial.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 19_47_19.png"
                alt="Pruebas físicas Bombers Catalunya entrenamiento"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Las pruebas físicas específicas para Bombers Catalunya</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Las <strong>pruebas físicas bombers Catalunya</strong> están diseñadas para evaluar la capacidad física necesaria para el trabajo de extinción y salvamento. Para <strong>entrenar para bombero</strong> exitosamente, necesitas un plan específico que simule las demandas reales del trabajo.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pruebas físicas oficiales</h3>
            
            <p className="text-gray-700 mb-4">
              El examen físico para Bombers incluye pruebas más exigentes que otras oposiciones:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-800">
              <li><strong>Carrera de resistencia (1000 metros)</strong>: Tiempo límite más exigente que Mossos</li>
              <li><strong>Carrera de velocidad (60 metros)</strong>: Evaluación de capacidad de respuesta rápida</li>
              <li><strong>Salto de longitud sin carrera</strong>: Potencia explosiva de piernas</li>
              <li><strong>Flexiones de brazos</strong>: Resistencia del tren superior (mínimo exigente)</li>
              <li><strong>Trepa de cuerda (4 metros)</strong>: Prueba específica de Bombers</li>
              <li><strong>Transporte de peso</strong>: Simulación de rescate con material</li>
            </ul>

            {/* CTA Box 1 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#FFF3E0', borderColor: '#FF6B35' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🔥 Entrena como un Bomber profesional</h4>
              <p className="text-gray-700 mb-4">
                La <strong>preparación física bombers</strong> requiere un enfoque específico. En OpoFast combinamos la preparación teórica con consejos de entrenamiento físico adaptados a las pruebas oficiales.
              </p>
              <a 
                href="/bombers"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Bombers Catalunya →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan de entrenamiento específico para Bombers</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 1: Acondicionamiento base (6-8 semanas)</h4>
            <p className="text-gray-700 mb-4">
              La preparación física para Bombers requiere más tiempo de base debido a la exigencia:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Lunes</strong>: Carrera continua 30-40 min + flexiones progresivas</li>
              <li><strong>Martes</strong>: Entrenamiento de fuerza funcional + trepa asistida</li>
              <li><strong>Miércoles</strong>: Carrera intervalos suaves + core</li>
              <li><strong>Jueves</strong>: Fuerza del tren superior + transporte de peso ligero</li>
              <li><strong>Viernes</strong>: Carrera larga suave (45-60 min)</li>
              <li><strong>Sábado</strong>: Entrenamiento funcional completo</li>
              <li><strong>Domingo</strong>: Descanso activo</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 2: Desarrollo específico (8-10 semanas)</h4>
            <p className="text-gray-700 mb-4">
              Intensifica el entrenamiento específico para cada prueba de Bombers:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Resistencia</strong>: Intervalos de 400m y 800m, tempo runs</li>
              <li><strong>Velocidad</strong>: Series de 60m con salida explosiva</li>
              <li><strong>Fuerza</strong>: Flexiones, dominadas, trabajo con peso</li>
              <li><strong>Trepa de cuerda</strong>: Técnica específica y progresión</li>
              <li><strong>Transporte de peso</strong>: Simulacros con material real</li>
              <li><strong>Salto</strong>: Pliometría y técnica específica</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 3: Especialización (4-6 semanas)</h4>
            <p className="text-gray-700 mb-6">
              Las últimas semanas, simula las condiciones exactas del examen. Practica todas las pruebas en secuencia con los tiempos oficiales.
            </p>

            {/* CTA Box 2 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#E8F5E8', borderColor: '#4CAF50' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">📚 No descuides la teoría mientras entrenas</h4>
              <p className="text-gray-700 mb-4">
                El entrenamiento físico intenso no debe hacerte olvidar el estudio. Con OpoFast puedes repasar el temario durante los descansos y optimizar cada minuto de preparación.
              </p>
              <a 
                href="/bombers"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Bombers Catalunya →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrenamiento específico por prueba</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Trepa de cuerda: la prueba más técnica</h4>
            <p className="text-gray-700 mb-4">
              La trepa de cuerda es específica de Bombers y requiere técnica especial:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Técnica básica</strong>: Agarre con manos y sujeción con piernas</li>
              <li><strong>Progresión</strong>: Empieza con cuerda inclinada, luego vertical</li>
              <li><strong>Fuerza de agarre</strong>: Ejercicios específicos para antebrazos</li>
              <li><strong>Coordinación</strong>: Sincronización de movimientos mano-pie</li>
              <li><strong>Resistencia</strong>: Múltiples repeticiones para ganar confianza</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Transporte de peso: simulación real</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Peso específico</strong>: Entrena con el peso exacto del examen</li>
              <li><strong>Distancia oficial</strong>: Practica la distancia exacta</li>
              <li><strong>Técnica de carga</strong>: Posición correcta para evitar lesiones</li>
              <li><strong>Respiración</strong>: Control respiratorio durante el esfuerzo</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Carrera de resistencia: base aeróbica sólida</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Base aeróbica</strong>: 4-5 carreras semanales de 30-60 min</li>
              <li><strong>Intervalos específicos</strong>: 4x400m, 3x800m, 2x1000m</li>
              <li><strong>Tempo runs</strong>: 15-20 min al ritmo objetivo</li>
              <li><strong>Recuperación activa</strong>: Trote suave entre sesiones intensas</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrición específica para Bombers</h3>
            
            <p className="text-gray-700 mb-4">
              La intensidad del entrenamiento para <strong>entrenar para bombero</strong> requiere una nutrición específica:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Proteína aumentada</strong>: 1.6-2g por kg de peso corporal</li>
              <li><strong>Carbohidratos complejos</strong>: Energía sostenida para entrenamientos largos</li>
              <li><strong>Hidratación extra</strong>: 3-4 litros diarios por la intensidad</li>
              <li><strong>Recuperación post-entrenamiento</strong>: Batido proteico + carbohidratos</li>
              <li><strong>Suplementación</strong>: Creatina para fuerza, BCAA para recuperación</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prevención de lesiones en entrenamiento intenso</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Calentamiento obligatorio</strong>: 15-20 minutos antes de cada sesión</li>
              <li><strong>Estiramientos dinámicos</strong>: Antes del entrenamiento</li>
              <li><strong>Estiramientos estáticos</strong>: Después del entrenamiento (15 min)</li>
              <li><strong>Masajes de descarga</strong>: 1-2 veces por semana</li>
              <li><strong>Descanso programado</strong>: 1 día completo de descanso semanal</li>
              <li><strong>Escucha tu cuerpo</strong>: Dolor vs. molestia normal</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Planificación semanal: estudio + entrenamiento intenso</h3>
            
            <p className="text-gray-700 mb-4">
              Combinar <strong>preparación física bombers</strong> con estudio requiere planificación milimétrica:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>05:30-07:00</strong>: Entrenamiento físico intenso</li>
              <li><strong>07:00-08:00</strong>: Ducha, desayuno y recuperación</li>
              <li><strong>08:00-12:00</strong>: Estudio intensivo (máxima concentración)</li>
              <li><strong>12:00-14:00</strong>: Comida y siesta de recuperación</li>
              <li><strong>14:00-17:00</strong>: Repaso y tests con OpoFast</li>
              <li><strong>17:00-18:00</strong>: Merienda y estiramientos</li>
              <li><strong>18:00-20:00</strong>: Tiempo libre/familia</li>
              <li><strong>20:00-22:00</strong>: Cena y descanso</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Errores comunes en la preparación física</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Entrenar solo fuerza</strong>: Descuidar la resistencia cardiovascular</li>
              <li><strong>No practicar trepa</strong>: Es la prueba que más suspende</li>
              <li><strong>Sobreentrenamiento</strong>: Más no siempre es mejor</li>
              <li><strong>Mala técnica</strong>: Preferir cantidad sobre calidad</li>
              <li><strong>No simular el examen</strong>: Practicar pruebas aisladas</li>
              <li><strong>Descuidar el estudio</strong>: El físico no es suficiente</li>
            </ul>

            {/* Final CTA */}
            <div className="p-8 rounded-2xl my-12 text-center" style={{ background: 'linear-gradient(135deg, #5FBFF9 0%, #4A9FE7 100%)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">¿Listo para entrenar como un Bomber profesional?</h4>
              <p className="text-lg mb-6 text-white opacity-95">
                Las <strong>pruebas físicas bombers Catalunya</strong> son exigentes, pero con el plan correcto y constancia puedes superarlas. No descuides ningún aspecto de tu preparación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/bombers"
                  className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" 
                  style={{ color: '#5FBFF9' }}
                >
                  Comenzar preparación integral
                </a>
                <a 
                  href="/bombers"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:opacity-90 transition-colors" 
                  style={{ borderColor: 'white', backgroundColor: 'transparent' }}
                >
                  Ver planes Bombers Catalunya
                </a>
              </div>
              <p className="text-sm mt-4 text-white opacity-80">
                ✓ Preparación física + teórica • ✓ Plan personalizado • ✓ Seguimiento completo
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Superar las <strong>pruebas físicas bombers Catalunya</strong> requiere un enfoque integral y profesional. No es suficiente con estar en forma general; necesitas entrenar específicamente para cada prueba, especialmente la trepa de cuerda y el transporte de peso.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Recuerda que ser Bomber requiere tanto preparación física como teórica. Utiliza herramientas como OpoFast para mantener el equilibrio perfecto entre ambas preparaciones. La constancia, la técnica correcta y la planificación inteligente son las claves del éxito.
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