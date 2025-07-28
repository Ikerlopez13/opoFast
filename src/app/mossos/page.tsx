"use client";

import Image from 'next/image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useAuth } from '../../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function MossosPage() {
  const { user, isPremium } = useAuth();
  const router = useRouter();

  const handlePremiumClick = () => {
    if (!user) {
      router.push('/auth/login');
    } else if (isPremium('mossos')) {
      router.push('/dashboard');
    } else {
      // TODO: Redirect to payment/checkout
      console.log('Redirect to payment for Mossos subscription');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F3F0' }}>
      <Header />

      {/* Main Content */}
      <main className="relative pt-8 md:pt-12">
        {/* Hero section */}
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Image
                src="/ChatGPT Image 27 jul 2025, 20_17_51.png"
                alt="Mossos d'Esquadra"
                width={100}
                height={100}
                className="object-contain mr-6"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                Mossos d'Esquadra
              </h1>
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
              Desbloqueja tot el potencial dels tests de Mossos
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Accedeix a totes les preguntes i recursos per triomfar a les oposicions
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Plan Mensual */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Premium Mensual</h3>
                <p className="text-gray-600 text-lg">Flexibilitat màxima</p>
              </div>
              
              <div className="mb-10">
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-gray-900">5,99€</span>
                  <span className="text-xl text-gray-600 ml-2">/mes</span>
                </div>
                <p className="text-gray-500 text-base">Cancel·la quan vulguis</p>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">+2.500 preguntes actualitzades</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Simulacres d'examen realistes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Tests per temes específics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Seguiment detallat del progrés</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Accés il·limitat a totes les preguntes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Suport 24/7</span>
                </li>
              </ul>

              <button className="w-full text-white py-4 px-6 rounded-xl text-lg font-semibold hover:opacity-90 transition-colors duration-200" style={{ backgroundColor: '#5FBFF9' }}>
                Escollir Premium Mensual
              </button>
            </div>

            {/* Plan Anual - Premium */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 relative overflow-visible" style={{ borderColor: '#5FBFF9' }}>
              {/* Popular badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="px-8 py-3 rounded-full text-white text-sm font-bold tracking-wider shadow-xl border-2 border-white" style={{ backgroundColor: '#5FBFF9' }}>
                  RECOMANAT
                </div>
              </div>

              <div className="mb-8 mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Premium Anual</h3>
                <p className="text-gray-600 text-lg">Estalvia un 58% pagant anualment</p>
              </div>
              
              <div className="mb-10">
                <div className="flex items-baseline mb-2">
                  <span className="text-xl text-gray-400 line-through mr-3">71,88€</span>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl md:text-7xl font-bold" style={{ color: '#5FBFF9' }}>29,99€</span>
                </div>
                <p className="text-gray-500 text-base">Pagament únic</p>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Accés permanent, sense subscripció</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Més que una classe particular</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Menys d'1€ al dia durant el període de preparació</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">Accés complet a tot el contingut premium</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg font-semibold">Accés il·limitat a totes les preguntes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg font-semibold">Filtra i practica per subtemes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg font-semibold">Sense anuncis, experiència neta</span>
                </li>
              </ul>

              <button className="w-full text-white py-5 px-6 rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-200 shadow-lg flex items-center justify-center" style={{ backgroundColor: '#5FBFF9' }}>
                Fes-te Premium ara 29,99€ →
              </button>
            </div>
          </div>
        </div>

        {/* Why Premium Section */}
        <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Per què fer-te Premium?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5FBFF9' }}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contingut complet</h3>
                <p className="text-gray-600">Accés a totes les preguntes i recursos disponibles</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5FBFF9' }}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultats garantits</h3>
                <p className="text-gray-600">Mètodes provats per aprovar l'oposició</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Millor preu</h3>
                <p className="text-gray-600">Menys d'1€ al dia, més barat que un cafè</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white shadow-lg">
                <svg className="w-10 h-10" style={{ color: '#5FBFF9' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntes Freqüents
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Què inclou el pla Premium per a Mossos?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  El pla Premium per a Mossos d'Esquadra inclou accés il·limitat a totes les preguntes específiques 
                  de l'oposició, simulacres d'examen realistes, mode pràctica per temes, estadístiques detallades 
                  i suport prioritari.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Durant quant temps tinc accés?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Un sol pagament de només <span className="font-semibold" style={{ color: '#5FBFF9' }}>29,99€</span> i és teu per sempre! 
                  No és una subscripció - pagues una vegada i tens accés il·limitat a tots els continguts premium 
                  sense càrrecs addicionals ni renovacions.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Els tests estan actualitzats amb la normativa actual?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sí, tots els tests de Mossos d'Esquadra s'actualitzen constantment amb la normativa vigent, 
                  incloent-hi legislació catalana, protocols policials i temari específic de l'oposició.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Preparat per començar?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Uneix-te a milers d'estudiants que ja confien en OpoFast Premium.
            </p>
            <p className="text-base text-gray-500 mb-12">
              Un sol pagament. Accés permanent. Sense sorpreses.
            </p>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-2xl text-gray-400 line-through mr-3">71,88€</span>
                </div>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold" style={{ color: '#5FBFF9' }}>29,99€</span>
                </div>
                <p className="text-gray-600 text-lg">
                  Només <span className="font-semibold" style={{ color: '#5FBFF9' }}>0,82€ al dia</span> durant un any
                </p>
              </div>
              
              <button className="w-full text-white py-5 px-8 rounded-xl text-xl font-bold hover:opacity-90 transition-all duration-200 shadow-lg" style={{ backgroundColor: '#5FBFF9' }}>
                Fes-te Premium ara 29,99€ →
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                ✓ Pagament segur amb Stripe • ✓ Accés immediat • ✓ Sense subscripcions
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 