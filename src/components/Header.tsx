import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center pt-16 pb-12 px-4 w-full group relative overflow-visible">
      <div className="relative w-64 h-28 mb-8 cursor-default">
        <Image
          src="/assets/logo_2.svg"
          alt="Amoraas Logo"
          fill
          className="object-contain transition-transform duration-1000 group-hover:scale-[1.05]"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-3 relative">
        <p className="text-amoraas-rose font-spectral text-[11px] tracking-[0.5em] uppercase opacity-90 animate-reveal stagger-1 drop-shadow-sm">
          Paixão e Delicadeza
        </p>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amoraas-rose/50 to-transparent shadow-[0_0_8px_rgba(245,188,193,0.3)]" />
        <p className="text-amoraas-creme/60 font-spectral text-sm tracking-[0.15em] opacity-80 italic animate-reveal stagger-2 font-medium">
          Moda Íntima Feminina
        </p>
      </div>
    </header>
  );
}
