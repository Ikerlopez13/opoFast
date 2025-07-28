"use client";

import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function ConvocatoriaBombersPage() {
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
              <span className="text-gray-500">5 min de lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Convocatoria y requisitos para opositar a Bomber en Catalunya 2025
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Todo lo que necesitas saber sobre los <strong>requisitos bombero Catalunya</strong> y cómo interpretar la <strong>convocatoria bombers Catalunya</strong> oficial. Guía completa para no perderte ningún detalle importante.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 19_47_19.png"
                alt="Convocatoria requisitos Bomber Catalunya 2025"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Convocatoria Bombers Catalunya 2025: fechas clave</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              La <strong>convocatoria bombers Catalunya</strong> 2025 ya está en marcha. Es fundamental conocer todas las fechas y plazos para no perder la oportunidad de formar parte del cuerpo de Bombers de la Generalitat de Catalunya.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Calendario oficial de la oposición</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-800">
              <li><strong>Publicación de bases</strong>: Enero 2025 (DOGC)</li>
              <li><strong>Plazo de inscripción</strong>: 20 días hábiles desde la publicación</li>
              <li><strong>Examen teórico</strong>: Previsiblemente entre abril-mayo 2025</li>
              <li><strong>Pruebas físicas</strong>: Junio-julio 2025</li>
              <li><strong>Examen médico</strong>: Agosto-septiembre 2025</li>
              <li><strong>Entrevista personal</strong>: Octubre 2025</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Requisitos básicos para ser Bomber en Catalunya</h3>
            
            <p className="text-gray-700 mb-4">
              Los <strong>requisitos para ser Bomber en Catalunya</strong> son específicos y deben cumplirse en el momento de la solicitud:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Requisitos generales</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Nacionalidad</strong>: Española o de un Estado miembro de la UE</li>
              <li><strong>Edad</strong>: Entre 18 y 35 años (cumplidos antes del último día de solicitud)</li>
              <li><strong>Titulación</strong>: ESO, FP de grado medio o equivalente</li>
              <li><strong>Carnet de conducir</strong>: Tipo B en vigor</li>
              <li><strong>Idioma</strong>: Conocimiento del catalán (nivel B2)</li>
            </ul>

            {/* CTA Box 1 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#FFF3E0', borderColor: '#FF6B35' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🔥 Prepárate desde ya con OpoFast</h4>
              <p className="text-gray-700 mb-4">
                No esperes a que salga la convocatoria oficial. Empieza a prepararte ya con nuestro temario actualizado y tests específicos para <strong>oposiciones Bombers Catalunya 2025</strong>.
              </p>
              <a 
                href="/bombers"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Bombers Catalunya →
              </a>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Requisitos físicos específicos</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Estatura mínima</strong>: 1,65 metros</li>
              <li><strong>Índice de masa corporal</strong>: Entre 18 y 28</li>
              <li><strong>Agudeza visual</strong>: Sin corrección o corregida a 1,0</li>
              <li><strong>Capacidad auditiva</strong>: Sin deficiencias que impidan el servicio</li>
              <li><strong>Aptitud física general</strong>: Certificado médico oficial</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Requisitos psicológicos</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Estabilidad emocional</strong>: Capacidad para trabajar bajo presión</li>
              <li><strong>Trabajo en equipo</strong>: Habilidades de colaboración</li>
              <li><strong>Resistencia al estrés</strong>: Situaciones de emergencia</li>
              <li><strong>Responsabilidad</strong>: Compromiso con la seguridad ciudadana</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Documentación necesaria para la solicitud</h3>
            
            <p className="text-gray-700 mb-4">
              Para participar en las <strong>oposiciones Bombers Catalunya 2025</strong>, necesitarás presentar:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Instancia de solicitud</strong>: Cumplimentada según modelo oficial</li>
              <li><strong>DNI o NIE</strong>: Copia compulsada en vigor</li>
              <li><strong>Titulación académica</strong>: Certificado o título oficial</li>
              <li><strong>Carnet de conducir</strong>: Copia compulsada tipo B</li>
              <li><strong>Certificado de catalán</strong>: Nivel B2 o superior</li>
              <li><strong>Justificante de pago</strong>: Tasas de examen (aprox. 30€)</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proceso selectivo completo</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 1: Examen teórico</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>100 preguntas tipo test</strong> con 4 opciones de respuesta</li>
              <li><strong>Tiempo límite</strong>: 100 minutos</li>
              <li><strong>Nota mínima</strong>: 5 puntos sobre 10</li>
              <li><strong>Sin penalización</strong> por respuestas incorrectas</li>
            </ul>

            {/* CTA Box 2 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#E8F5E8', borderColor: '#4CAF50' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">📚 Domina el temario oficial</h4>
              <p className="text-gray-700 mb-4">
                El <strong>temario bombers Catalunya</strong> es extenso y específico. Con OpoFast estudias solo lo que entra en el examen, optimizando tu tiempo de preparación.
              </p>
              <a 
                href="/bombers"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Bombers Catalunya →
              </a>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 2: Pruebas físicas</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Carrera de resistencia</strong>: 1000 metros</li>
              <li><strong>Carrera de velocidad</strong>: 60 metros</li>
              <li><strong>Salto de longitud</strong>: Sin carrera</li>
              <li><strong>Flexiones de brazos</strong>: En 1 minuto</li>
              <li><strong>Trepa de cuerda</strong>: 4 metros</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fase 3: Reconocimiento médico</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Examen médico general</strong>: Sistemas cardiovascular, respiratorio, etc.</li>
              <li><strong>Pruebas específicas</strong>: Visión, audición, equilibrio</li>
              <li><strong>Analíticas</strong>: Sangre y orina</li>
              <li><strong>Radiografías</strong>: Tórax y columna vertebral</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Temario oficial para el examen teórico</h3>
            
            <p className="text-gray-700 mb-4">
              El <strong>temario bombers Catalunya</strong> incluye las siguientes materias:
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Bloque I: Marco normativo</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Constitución Española (Títulos I, II, III, VIII)</li>
              <li>Estatuto de Autonomía de Catalunya</li>
              <li>Ley de Protección Civil de Catalunya</li>
              <li>Normativa de prevención de riesgos laborales</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Bloque II: Conocimientos técnicos</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Física y química aplicada a la extinción</li>
              <li>Materiales de construcción y su comportamiento al fuego</li>
              <li>Técnicas de extinción y salvamento</li>
              <li>Equipos y herramientas de trabajo</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Bloque III: Emergencias y protección civil</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>Planes de emergencia en Catalunya</li>
              <li>Gestión de emergencias</li>
              <li>Primeros auxilios avanzados</li>
              <li>Comunicaciones de emergencia</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consejos para la inscripción</h3>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Revisa todos los requisitos</strong> antes de presentar la solicitud</li>
              <li><strong>Prepara la documentación</strong> con antelación</li>
              <li><strong>Comprueba las tasas</strong> y métodos de pago aceptados</li>
              <li><strong>Presenta la solicitud online</strong> en el portal oficial</li>
              <li><strong>Guarda el justificante</strong> de presentación</li>
            </ol>

            {/* Final CTA */}
            <div className="p-8 rounded-2xl my-12 text-center" style={{ background: 'linear-gradient(135deg, #5FBFF9 0%, #4A9FE7 100%)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">¿Preparado para ser Bomber de Catalunya?</h4>
              <p className="text-lg mb-6 text-white opacity-95">
                No dejes pasar esta oportunidad. La <strong>convocatoria bombers Catalunya</strong> 2025 será muy competitiva. Empieza tu preparación con OpoFast y asegura tu plaza.
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
                ✓ Temario actualizado • ✓ Tests oficiales • ✓ Seguimiento personalizado
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Cumplir con todos los <strong>requisitos bombero Catalunya</strong> es solo el primer paso. La preparación adecuada y constante es lo que marca la diferencia entre los aspirantes. Conocer bien la convocatoria te permite planificar tu estrategia de estudio y no perder tiempo en aspectos irrelevantes.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Recuerda que ser Bomber de Catalunya es una vocación de servicio público que requiere preparación física, mental y técnica. Utiliza todos los recursos disponibles, como OpoFast, para maximizar tus posibilidades de éxito en esta noble profesión.
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