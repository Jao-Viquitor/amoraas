import Image from "next/image";

const products = [
  { id: 1, src: "/assets/product_1.jpg", alt: "Lingerie Amoraas 1" },
  { id: 2, src: "/assets/product_2.jpg", alt: "Lingerie Amoraas 2" },
  { id: 3, src: "/assets/product_3.jpg", alt: "Lingerie Amoraas 3" },
  { id: 4, src: "/assets/product_4.jpg", alt: "Lingerie Amoraas 4" },
];

export default function Catalog() {
  return (
    <section className="w-full px-4 py-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="font-spectral text-amoraas-rose text-2xl tracking-wider text-center lowercase">
          peças que <span className="italic font-light opacity-80">encantam</span>
        </h2>
        <div className="w-12 h-[1px] bg-amoraas-rose/30 mt-2" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-amoraas-rose/20 animate-reveal`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <Image
              src={product.src}
              alt={product.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Glass Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-amoraas-midnight/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Elegant Border on Hover */}
            <div className="absolute inset-2 border border-white/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
