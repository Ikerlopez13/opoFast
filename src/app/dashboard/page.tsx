"use client";

import { useAuth } from '../../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DashboardPage() {
  const { user, loading, isPremium } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F8F3F0' }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#5FBFF9' }}></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F3F0' }}>
      <Header />

      {/* Main Content */}
      <main className="relative pt-10 md:pt-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Benvingut al teu Dashboard
            </h1>
            <p className="text-xl text-gray-700">
              Gestiona les teves subscripcions i accedeix als teus tests
            </p>
          </div>

          {/* Subscription Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Bombers Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Bombers de Catalunya</h3>
                {isPremium('bombers') ? (
                  <div className="text-green-600 font-semibold text-lg">✅ Subscripció Activa</div>
                ) : (
                  <div className="text-gray-500 text-lg">❌ No subscrit</div>
                )}
              </div>
              
              {isPremium('bombers') ? (
                <button 
                  className="w-full py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#5FBFF9' }}
                >
                  Accedir als Tests
                </button>
              ) : (
                <button 
                  onClick={() => router.push('/bombers')}
                  className="w-full py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#5FBFF9' }}
                >
                  Subscriure's
                </button>
              )}
            </div>

            {/* Mossos Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Mossos d'Esquadra</h3>
                {isPremium('mossos') ? (
                  <div className="text-green-600 font-semibold text-lg">✅ Subscripció Activa</div>
                ) : (
                  <div className="text-gray-500 text-lg">❌ No subscrit</div>
                )}
              </div>
              
              {isPremium('mossos') ? (
                <button 
                  className="w-full py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#5FBFF9' }}
                >
                  Accedir als Tests
                </button>
              ) : (
                <button 
                  onClick={() => router.push('/mossos')}
                  className="w-full py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#5FBFF9' }}
                >
                  Subscriure's
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Estadístiques Ràpides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#5FBFF9' }}>0</div>
                <div className="text-gray-600">Tests Completats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#5FBFF9' }}>0%</div>
                <div className="text-gray-600">Puntuació Mitjana</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#5FBFF9' }}>0</div>
                <div className="text-gray-600">Hores d'Estudi</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
} 