"use client";

import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function TemarioBombersPage() {
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
              <span className="text-gray-500">10 min de lectura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Temario actualizado y consejos para aprobar las oposiciones de Bombers de Catalunya
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Desglose del <strong>temario bombers Catalunya</strong> oficial, puntos clave para memorizar y técnicas de estudio eficaces para las oposiciones de Bombers Catalunya. Tu guía completa para dominar todo el contenido.
            </p>
            
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 19_47_19.png"
                alt="Temario actualizado Bombers Catalunya"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Temario oficial completo de Bombers Catalunya 2025</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              El <strong>temario bombers Catalunya</strong> es extenso y técnico, abarcando desde conocimientos jurídicos básicos hasta técnicas especializadas de extinción y salvamento. Para <strong>aprobar bombers</strong> necesitas una estrategia de estudio específica y material actualizado.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bloque I: Marco jurídico y normativo (25% del examen)</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Constitución Española</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Título I</strong>: Derechos y deberes fundamentales (arts. 14-55)</li>
              <li><strong>Título II</strong>: La Corona (arts. 56-65)</li>
              <li><strong>Título III</strong>: Las Cortes Generales (arts. 66-96)</li>
              <li><strong>Título VIII</strong>: Organización territorial del Estado (arts. 137-158)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Estatuto de Autonomía de Catalunya</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Competencias de la Generalitat</strong>: Especialmente en protección civil</li>
              <li><strong>Organización institucional</strong>: Parlament, Govern, otras instituciones</li>
              <li><strong>Administración local</strong>: Comarcas, municipios, veguerías</li>
              <li><strong>Régimen jurídico</strong>: Procedimiento administrativo</li>
            </ul>

            {/* CTA Box 1 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#FFF3E0', borderColor: '#FF6B35' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">🔥 Domina el temario con OpoFast</h4>
              <p className="text-gray-700 mb-4">
                El <strong>temario bombers Catalunya</strong> es complejo y extenso. Con OpoFast tienes todo el contenido estructurado, actualizado y con tests específicos para cada tema.
              </p>
              <a 
                href="/bombers"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Bombers Catalunya →
              </a>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bloque II: Protección civil y emergencias (30% del examen)</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Ley de Protección Civil de Catalunya</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Principios generales</strong>: Autoprotección, coordinación, subsidiariedad</li>
              <li><strong>Competencias</strong>: Generalitat, administración local, ciudadanía</li>
              <li><strong>Planificación</strong>: Planes territoriales y especiales</li>
              <li><strong>Medios y recursos</strong>: Organización de los servicios</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Planes de emergencia en Catalunya</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>PLASEQCAT</strong>: Plan sísmico de Catalunya</li>
              <li><strong>INFOCAT</strong>: Plan de protección civil por incendios forestales</li>
              <li><strong>INUNCAT</strong>: Plan de protección civil por inundaciones</li>
              <li><strong>NEUCAT</strong>: Plan por nevadas</li>
              <li><strong>RADCAT</strong>: Plan por riesgo radiológico</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Gestión de emergencias</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>CECAT</strong>: Centro de Coordinación Operativa de Catalunya</li>
              <li><strong>Niveles de activación</strong>: Alerta, prealerta, emergencia</li>
              <li><strong>Coordinación</strong>: Bomberos, SEM, Mossos, Protección Civil</li>
              <li><strong>Comunicaciones</strong>: Sistemas RESCAT, TETRA</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bloque III: Conocimientos técnicos (35% del examen)</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Física y química del fuego</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Combustión</strong>: Triángulo y tetraedro del fuego</li>
              <li><strong>Transmisión del calor</strong>: Conducción, convección, radiación</li>
              <li><strong>Tipos de fuego</strong>: Clasificación A, B, C, D, F</li>
              <li><strong>Productos de combustión</strong>: Humos, gases tóxicos</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Agentes extintores</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Agua</strong>: Propiedades, aditivos, técnicas de aplicación</li>
              <li><strong>Espumas</strong>: AFFF, AR-AFFF, proteínicas</li>
              <li><strong>Gases inertes</strong>: CO2, gases limpios</li>
              <li><strong>Polvo químico</strong>: ABC, BC, específicos</li>
            </ul>

            {/* CTA Box 2 */}
            <div className="border-l-4 p-6 my-8 rounded-r-lg" style={{ backgroundColor: '#E8F5E8', borderColor: '#4CAF50' }}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">📚 Practica con tests específicos</h4>
              <p className="text-gray-700 mb-4">
                Los conocimientos técnicos requieren práctica constante. Con OpoFast tienes acceso a miles de preguntas específicas de cada tema del <strong>curso online oposiciones Bombers</strong>.
              </p>
              <a 
                href="/bombers"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#5FBFF9' }}
              >
                Ver planes Bombers Catalunya →
              </a>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Materiales de construcción</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Comportamiento al fuego</strong>: Resistencia, reacción</li>
              <li><strong>Estructuras</strong>: Hormigón, acero, madera, mixtas</li>
              <li><strong>Colapso estructural</strong>: Señales de aviso, procedimientos</li>
              <li><strong>Ventilación</strong>: Natural, forzada, táctica</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">4. Equipos y herramientas</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Vehículos</strong>: Autobombas, escaleras, especiales</li>
              <li><strong>Equipos de protección</strong>: ERA, trajes, cascos</li>
              <li><strong>Herramientas de corte</strong>: Radiales, sierras, cizallas</li>
              <li><strong>Material de salvamento</strong>: Cuerdas, poleas, camillas</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bloque IV: Primeros auxilios y rescate (10% del examen)</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Soporte vital básico</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>RCP</strong>: Técnicas de reanimación cardiopulmonar</li>
              <li><strong>Desfibrilación</strong>: Uso del DEA</li>
              <li><strong>Obstrucción vía aérea</strong>: Maniobra de Heimlich</li>
              <li><strong>Posición lateral de seguridad</strong>: Técnica correcta</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Traumatismos y lesiones</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Politraumatizado</strong>: Evaluación primaria y secundaria</li>
              <li><strong>Fracturas</strong>: Inmovilización, transporte</li>
              <li><strong>Quemaduras</strong>: Clasificación, tratamiento inicial</li>
              <li><strong>Intoxicaciones</strong>: Por humo, productos químicos</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Técnicas de estudio específicas para Bombers</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Planificación temporal</h4>
            <p className="text-gray-700 mb-4">
              Para <strong>aprobar bombers</strong> necesitas al menos 8-12 meses de preparación intensiva:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Meses 1-3</strong>: Marco jurídico y protección civil</li>
              <li><strong>Meses 4-7</strong>: Conocimientos técnicos (la parte más densa)</li>
              <li><strong>Meses 8-10</strong>: Primeros auxilios y repaso general</li>
              <li><strong>Meses 11-12</strong>: Simulacros intensivos y repaso final</li>
            </ol>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Técnicas de memorización para contenido técnico</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Mapas conceptuales</strong>: Para relacionar conceptos técnicos</li>
              <li><strong>Flashcards</strong>: Para fórmulas, clasificaciones, procedimientos</li>
              <li><strong>Casos prácticos</strong>: Simula situaciones reales de intervención</li>
              <li><strong>Diagramas de flujo</strong>: Para procedimientos de actuación</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Recursos de estudio recomendados</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Legislación actualizada</strong>: DOGC y BOE para últimas modificaciones</li>
              <li><strong>Manuales técnicos</strong>: NFPA, UNE, normas específicas</li>
              <li><strong>Plataformas online</strong>: Tests actualizados y simulacros</li>
              <li><strong>Cursos presenciales</strong>: Para práctica de primeros auxilios</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estrategias para el día del examen</h3>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Gestión del tiempo</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>100 preguntas en 100 minutos</strong>: 1 minuto por pregunta</li>
              <li><strong>Primera ronda</strong>: Responde las que dominas (60-70 preguntas)</li>
              <li><strong>Segunda ronda</strong>: Razona las dudosas (20-30 preguntas)</li>
              <li><strong>Tercera ronda</strong>: Revisa las marcadas (10 preguntas)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Tipos de preguntas más frecuentes</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Definiciones técnicas</strong>: Conceptos específicos de extinción</li>
              <li><strong>Procedimientos</strong>: Secuencias de actuación en emergencias</li>
              <li><strong>Normativa</strong>: Artículos específicos de leyes y reglamentos</li>
              <li><strong>Cálculos</strong>: Fórmulas de hidráulica, presiones, caudales</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Errores comunes que debes evitar</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Estudiar solo teoría</strong>: Sin práctica con tests</li>
              <li><strong>Memorizar sin entender</strong>: Los conceptos técnicos requieren comprensión</li>
              <li><strong>Descuidar la legislación</strong>: Es la base de todo el temario</li>
              <li><strong>No practicar primeros auxilios</strong>: Requiere práctica física</li>
              <li><strong>Estudiar con material obsoleto</strong>: La normativa cambia constantemente</li>
            </ul>

            {/* Final CTA */}
            <div className="p-8 rounded-2xl my-12 text-center" style={{ background: 'linear-gradient(135deg, #5FBFF9 0%, #4A9FE7 100%)' }}>
              <h4 className="text-2xl font-bold mb-4 text-white">¿Preparado para dominar todo el temario?</h4>
              <p className="text-lg mb-6 text-white opacity-95">
                El <strong>temario bombers Catalunya</strong> es extenso pero superable con la estrategia correcta. En OpoFast tienes todo el contenido actualizado, tests específicos y seguimiento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/bombers"
                  className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" 
                  style={{ color: '#5FBFF9' }}
                >
                  Comenzar preparación completa
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
                ✓ Temario completo actualizado • ✓ Tests por temas • ✓ Simulacros reales
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dominar el <strong>temario bombers Catalunya</strong> requiere dedicación, método y los recursos adecuados. No se trata solo de memorizar, sino de comprender los conceptos técnicos y su aplicación práctica en situaciones de emergencia.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              La clave del éxito está en la planificación, el uso de técnicas de estudio específicas para contenido técnico y la práctica constante con tests actualizados. Con OpoFast tienes todas las herramientas necesarias para convertirte en Bomber de Catalunya.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blog" 
              className="inline-flex items-centers hover:text-blue-800 font-medium"
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