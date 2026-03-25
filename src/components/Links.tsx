// Icons from lucide-react are replaced with custom SVGs to ensure premium control and compatibility.

const links = [
  {
    title: "Nosso Instagram",
    url: "https://www.instagram.com/amoraas_co",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    description: "@amoraas_co",
  },
  {
    title: "Grupo de Promoções",
    url: "https://chat.whatsapp.com/J9R14z6HruH4i8lqnE9O0J?mode=gi_t",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
    description: "Ofertas exclusivas no WhatsApp",
  },
  {
    title: "Veja nosso catalogo completo",
    url: "https://wa.me/55984530898",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.5 8.5 0 0 1 7.6 10.6 Z" />
        <path d="M15 16L11 12L15 8" />
      </svg>
    ),
    description: "faça seu pedido",
  },
];

export default function Links() {
  return (
    <section className="w-full flex flex-col gap-5 px-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-5 glass-button rounded-full overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amoraas-rose/10"
        >
          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-amoraas-rose/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="p-3.5 rounded-full bg-amoraas-rose/10 text-amoraas-rose group-hover:bg-amoraas-rose group-hover:text-amoraas-midnight transition-all duration-500 shadow-inner">
              {link.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-spectral font-medium text-[17px] tracking-wide text-amoraas-creme group-hover:text-white transition-colors">
                {link.title}
              </span>
              <span className="text-[11px] text-amoraas-rose/60 font-raleway group-hover:text-amoraas-rose/90 transition-colors uppercase tracking-widest">
                {link.description}
              </span>
            </div>
          </div>
          
          <div className="relative z-10 transition-transform duration-700 group-hover:translate-x-1">
            <svg
              className="w-5 h-5 text-amoraas-rose/40 group-hover:text-amoraas-rose transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 7l5 5-5 5M6 7l5 5-5 5"
              />
            </svg>
          </div>
        </a>
      ))}
    </section>
  );
}
