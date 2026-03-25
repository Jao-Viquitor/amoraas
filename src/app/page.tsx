"use client";

import Header from "@/components/Header";
import Catalog from "@/components/Catalog";
import Links from "@/components/Links";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-x-hidden bg-amoraas-midnight">
      {/* Premium Background Layer */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/bg_premium.png"
          alt="Amoraas Background"
          fill
          className="object-cover opacity-40 transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amoraas-midnight/60 via-transparent to-amoraas-midnight/90" />
      </div>

      {/* Decorative Aura Elements - More subtle and high-end */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-1">
        <div className="absolute bottom-[5%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amoraas-mauve/10 blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-lg lg:max-w-5xl mx-auto px-4 pb-20">
        <div className="w-full animate-reveal stagger-1">
          <Header />
        </div>
        
        <div className="w-full flex flex-col items-center mt-6 gap-8">
          <div className="w-full animate-reveal stagger-2">
            <Catalog />
          </div>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amoraas-rose/40 to-transparent animate-reveal stagger-3" />
          
          <div className="w-full animate-reveal stagger-4">
            <Links />
          </div>
        </div>

        <div className="w-full mt-12 animate-reveal stagger-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
