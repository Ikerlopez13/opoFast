"use client";

import Image from 'next/image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: "preparar-oposiciones-mossos-esquadra-2025-guia",
      title: "Cómo preparar las oposiciones de Mossos d'Esquadra en 2025: Guía paso a paso",
      excerpt: "Descubre el proceso completo para preparar las oposiciones de Mossos d'Esquadra 2025, desde requisitos hasta consejos prácticos para el día del examen.",
      category: "Mossos d'Esquadra",
      readTime: "8 min",
      image: "/ChatGPT Image 27 jul 2025, 20_17_51.png",
      keywords: ["preparar oposiciones Mossos d'Esquadra", "temario Mossos 2025", "convocatoria Mossos d'Esquadra 2025"]
    },
    {
      id: 2,
      slug: "pruebas-fisicas-mossos-esquadra-entrenar",
      title: "Las pruebas físicas para Mossos d'Esquadra: cómo entrenar para superarlas",
      excerpt: "Rutinas recomendadas, consejos para evitar lesiones y cómo planificar el entrenamiento físico junto al estudio para las oposiciones de Mossos.",
      category: "Mossos d'Esquadra",
      readTime: "6 min",
      image: "/ChatGPT Image 27 jul 2025, 20_17_51.png",
      keywords: ["pruebas físicas Mossos d'Esquadra", "entrenar oposiciones Mossos", "preparación física policia"]
    },
    {
      id: 3,
      slug: "errores-comunes-examen-mossos-esquadra",
      title: "Errores comunes en el examen teórico de Mossos d'Esquadra y cómo evitarlos",
      excerpt: "Analiza las preguntas típicas que fallan los opositores y estrategias efectivas para abordarlas mejor en el examen de Mossos d'Esquadra.",
      category: "Mossos d'Esquadra",
      readTime: "7 min",
      image: "/ChatGPT Image 27 jul 2025, 20_17_51.png",
      keywords: ["examen teórico Mossos d'Esquadra", "cómo aprobar Mossos", "errores examen policia"]
    },
    {
      id: 4,
      slug: "convocatoria-requisitos-bomber-catalunya-2025",
      title: "Convocatoria y requisitos para opositar a Bomber en Catalunya 2025",
      excerpt: "Todo lo que necesitas saber sobre los requisitos básicos y cómo interpretar la convocatoria oficial de Bombers de Catalunya 2025.",
      category: "Bombers Catalunya",
      readTime: "5 min",
      image: "/ChatGPT Image 27 jul 2025, 19_47_19.png",
      keywords: ["convocatoria bombers Catalunya", "requisitos bombero Catalunya", "oposiciones Bombers Catalunya 2025"]
    },
    {
      id: 5,
      slug: "pruebas-fisicas-bombers-catalunya-entrenamiento",
      title: "Cómo preparar las pruebas físicas de Bombers en Catalunya: guía y entrenamiento",
      excerpt: "Ejercicios específicos, calendario de entrenamiento y consejos para combinar la preparación física con el estudio para Bombers.",
      category: "Bombers Catalunya",
      readTime: "9 min",
      image: "/ChatGPT Image 27 jul 2025, 19_47_19.png",
      keywords: ["pruebas físicas bombers Catalunya", "entrenar para bombero", "preparación física bombers"]
    },
    {
      id: 6,
      slug: "temario-actualizado-aprobar-bombers-catalunya",
      title: "Temario actualizado y consejos para aprobar las oposiciones de Bombers de Catalunya",
      excerpt: "Desglose del temario oficial, puntos clave para memorizar y técnicas de estudio eficaces para las oposiciones de Bombers Catalunya.",
      category: "Bombers Catalunya",
      readTime: "10 min",
      image: "/ChatGPT Image 27 jul 2025, 19_47_19.png",
      keywords: ["temario bombers Catalunya", "aprobar bombers", "curso online oposiciones Bombers"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F3F0' }}>
      <Header />

      {/* Hero Section */}
      <main className="relative pt-8 md:pt-12">
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog d'Oposicions a Catalunya
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Guies, consells i estratègies per aprovar les teves oposicions de Mossos d'Esquadra i Bombers de Catalunya
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: '#5FBFF9' }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime} de lectura
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <a href={`/blog/${post.slug}`} className="line-clamp-2">
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-semibold hover:opacity-80 transition-colors"
                    style={{ color: '#5FBFF9' }}
                  >
                    Llegir més
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="mx-6 rounded-3xl shadow-lg relative z-10 mb-16" style={{ backgroundColor: '#5FBFF9' }}>
          <div className="container mx-auto px-12 py-16 text-center relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6">
              Prepara't amb els millors recursos
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              No et conformis només amb llegir. Practica amb els nostres tests i simulacres per aprovar les teves oposicions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors" style={{ color: '#5FBFF9' }}>
                Prova OpoFast gratis
              </button>
              <button className="text-white px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-white hover:opacity-90 transition-colors" style={{ backgroundColor: 'transparent', '--hover-color': '#5FBFF9' } as React.CSSProperties}>
                Veure plans Premium
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 