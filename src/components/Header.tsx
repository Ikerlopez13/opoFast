"use client";

import Image from 'next/image';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, profile, isPremium, signOut } = useAuth();
  const router = useRouter();

  const handleLoginClick = () => {
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/auth/login');
    }
  };

  const handlePremiumClick = () => {
    if (!user) {
      router.push('/auth/login');
    } else {
      // If user has any premium subscription, go to dashboard
      if (isPremium('bombers') || isPremium('mossos')) {
        router.push('/dashboard');
      } else {
        // Show premium options or redirect to pricing
        router.push('/bombers'); // Default to bombers pricing
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <header className="mx-3 md:mx-6 mt-4 md:mt-6 px-4 md:px-6 py-6 md:py-5 relative z-20 rounded-2xl" style={{ backgroundColor: '#5FBFF9' }}>
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
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-blue-100 text-lg font-semibold">Inici</a>
          <a href="/bombers" className="text-white hover:text-blue-100 text-lg">Bombers</a>
          <a href="/mossos" className="text-white hover:text-blue-100 text-lg">Mossos d'Esquadra</a>
          <a href="/blog" className="text-white hover:text-blue-100 text-lg">Blog</a>
        </nav>
        
        <div className="flex items-center space-x-3 md:space-x-4">
          {user ? (
            <>
              <span className="text-white text-sm md:text-base font-medium">
                Hola, {profile?.full_name || user.email}
              </span>
              <button 
                onClick={() => router.push('/dashboard')}
                className="bg-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm md:text-base" 
                style={{ color: '#5FBFF9' }}
              >
                <span className="hidden sm:inline">Dashboard</span>
                <span className="sm:hidden">Panel</span>
              </button>
              <button 
                onClick={handleSignOut}
                className="text-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-medium hover:opacity-90 transition-colors text-sm md:text-base border border-white/30"
              >
                <span className="hidden sm:inline">Tancar Sessió</span>
                <span className="sm:hidden">Sortir</span>
              </button>
            </>
          ) : (
            <>
              <button 
                className="bg-white px-3 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm md:text-base" 
                style={{ color: '#5FBFF9' }}
                onClick={handlePremiumClick}
              >
                <span className="hidden sm:inline">Fes-te Premium</span>
                <span className="sm:hidden">Premium</span>
              </button>
              <button 
                className="text-white px-3 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:opacity-90 transition-colors text-sm md:text-base" 
                style={{ backgroundColor: '#4A9FE7' }} 
                onClick={handleLoginClick}
              >
                <span className="hidden sm:inline">Iniciar Sessió</span>
                <span className="sm:hidden">Login</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
} 