import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Image from 'next/image';

// ─── Constantes ───────────────────────────────────────────────────────────────
const WA_NUMBER = '595982777833';
const WA_RESERVE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero reservar un auto en Ciudad del Este')}`;
const WA_GENERAL = `https://wa.me/${WA_NUMBER}`;

// ─── Datos ────────────────────────────────────────────────────────────────────
const BENEFICIOS = [
  { icon: '⚡', title: 'Entrega en minutos', desc: 'Tu auto listo al llegar al aeropuerto u hotel, sin esperas.' },
  { icon: '🛡️', title: 'Garantía más baja', desc: 'Solo $200 de garantía. La competencia cobra entre $500 y $800.' },
  { icon: '📲', title: 'Reserva por WhatsApp', desc: 'Sin formularios, sin burocracia. Un mensaje y listo.' },
  { icon: '🚗', title: 'Vehículos modernos', desc: 'Flota actualizada, limpia y en perfectas condiciones.' },
  { icon: '🇧🇷', title: 'Atención bilingüe', desc: 'Hablamos português para turistas brasileños.' },
  { icon: '🕐', title: 'Disponible 24/7', desc: 'Estamos disponibles todos los días, a cualquier hora.' },
];

const PASOS = [
  { num: '01', icon: '📲', title: 'Escribís por WhatsApp', desc: 'Enviás un mensaje con tu fecha de llegada y tipo de vehículo.' },
  { num: '02', icon: '✅', title: 'Confirmamos disponibilidad', desc: 'En minutos te confirmamos el vehículo y el precio.' },
  { num: '03', icon: '✈️', title: 'Recibís el auto', desc: 'Te lo entregamos en el aeropuerto, hotel o donde necesites.' },
  { num: '04', icon: '🚗', title: 'Manejás sin complicaciones', desc: 'Conducís tranquilo con cobertura total de garantía.' },
];

const VEHICULOS = [
  { nombre: 'Sedán Compacto', desc: 'Ideal para la ciudad. Económico y fácil de estacionar.', precio: 'Desde $35/día', img: null },
  { nombre: 'SUV Familiar', desc: 'Espacio para toda la familia. Perfecto para viajes largos.', precio: 'Desde $55/día', img: null },
  { nombre: 'Pickup 4x4', desc: 'Para terrenos difíciles y carga extra. Potencia garantizada.', precio: 'Desde $65/día', img: null },
];

const TESTIMONIOS = [
  { texto: 'Servicio rápido y confiable. Llegué al aeropuerto y el auto ya estaba esperando.', autor: 'Carlos M.', pais: '🇵🇾', stars: 5 },
  { texto: 'Muito prático e sem burocracia. Melhor opção em CDE para turistas brasileiros.', autor: 'Rafael S.', pais: '🇧🇷', stars: 5 },
  { texto: 'La garantía más baja que encontré. Además el auto estaba en perfectas condiciones.', autor: 'María G.', pais: '🇵🇾', stars: 5 },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      <main>
        {/* ══════════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          className="
            relative min-h-screen flex flex-col justify-center
            bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a0505]
            overflow-hidden noise-overlay
          "
          aria-label="Hero – Alquiler de autos Ciudad del Este"
        >
          {/* Background decorative elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CC1C1C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#CC1C1C]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#CC1C1C]/20 border border-[#CC1C1C]/40 rounded-full px-4 py-1.5 mb-8 text-sm text-red-300">
              <span className="w-2 h-2 bg-[#CC1C1C] rounded-full animate-pulse" />
              Disponibilidad limitada hoy
            </div>

            {/* H1 – SEO principal */}
            <h1 className="
              text-5xl md:text-7xl font-black leading-tight mb-6
              font-['Barlow_Condensed',sans-serif] uppercase tracking-tight
            ">
              <span className="gradient-text">Rent a Car</span>
              <br />
              <span className="text-white">Ciudad del Este</span>
              <br />
              <span className="gradient-text-red">en minutos</span> 🚗
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entrega inmediata en aeropuerto y hoteles.
              Alquiler de autos en Paraguay con la{' '}
              <strong className="text-white">garantía más baja del mercado</strong>.
              Atención para Paraguay y Brasil 🇧🇷🇵🇾
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WA_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  wa-button text-white
                  px-8 py-4 rounded-xl text-lg font-bold
                  w-full sm:w-auto justify-center
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Reservar ahora por WhatsApp
              </a>

              <a
                href="#garantia"
                className="
                  inline-flex items-center gap-2
                  border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400
                  px-8 py-4 rounded-xl text-lg font-semibold
                  transition-all duration-200
                  w-full sm:w-auto justify-center
                "
              >
                Ver garantía 🛡️
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              ⚠️ Alta demanda – cupos limitados por día
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { val: '$200', label: 'Garantía mínima' },
                { val: '24/7', label: 'Disponibilidad' },
                { val: '5min', label: 'Tiempo de respuesta' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black gradient-text-red">{stat.val}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            BENEFICIOS
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          id="beneficios"
          className="py-24 px-6 bg-[#0f0f0f]"
          aria-label="Beneficios de alquilar con TuMovil77"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                La forma más rápida de{' '}
                <span className="gradient-text-red">moverte</span>
                <br />en Ciudad del Este
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFICIOS.map((b) => (
                <article
                  key={b.title}
                  className="
                    card-hover
                    bg-white/5 border border-white/10
                    rounded-2xl p-6
                    hover:border-[#CC1C1C]/40
                  "
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            GARANTÍA
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          id="garantia"
          className="py-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-black"
          aria-label="Garantía más baja del mercado en Ciudad del Este"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-[#CC1C1C]/20 border border-[#CC1C1C]/40 rounded-full px-4 py-1 text-sm text-red-300 mb-6">
              🔥 Ventaja competitiva
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Garantía de solo{' '}
              <span className="gradient-text-red">$200</span>
              <br />
              <span className="text-gray-300">la más baja en CDE</span>
            </h2>

            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
              Mientras otros rent a car en Ciudad del Este cobran entre $500 y $800 de garantía,
              en TuMovil77 pagas mucho menos y conducís tranquilo.
            </p>

            {/* Comparación */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              {/* Competencia */}
              <div className="
                bg-red-950/30 border border-red-900/40
                rounded-2xl p-8 w-full sm:w-64
                text-center
              ">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Competencia</p>
                <p className="text-4xl font-black text-red-400">$500–$800</p>
                <p className="text-gray-500 text-xs mt-2">Garantía exigida</p>
              </div>

              {/* VS Badge */}
              <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center font-black text-gray-400 flex-shrink-0">
                VS
              </div>

              {/* TuMovil77 */}
              <div className="
                bg-green-950/30 border border-green-700/40
                rounded-2xl p-8 w-full sm:w-64
                text-center
                red-glow
              ">
                <p className="text-green-400 text-sm uppercase tracking-widest mb-2 font-bold">TuMovil77</p>
                <p className="text-4xl font-black text-green-400">$200</p>
                <p className="text-green-600 text-xs mt-2">✓ Garantía mínima</p>
              </div>
            </div>

            {/* Cobertura */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
              {[
                'Daños menores y rayones cubiertos',
                'Llantas pinchadas incluidas',
                'Sin sorpresas al devolver el auto',
                'Conducís tranquilo en toda la región',
                'Garantía reembolsada al finalizar',
                'Cobertura para Brasil también 🇧🇷',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✔</span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href={WA_RESERVE}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                wa-button text-white
                px-10 py-4 rounded-xl text-lg font-bold
              "
            >
              Reserva y asegurá tu garantía de $200
            </a>

            <p className="mt-4 text-sm text-gray-500">
              🇧🇷 Garantia baixa para turistas brasileiros em CDE
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            CÓMO FUNCIONA
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          id="como-funciona"
          className="py-24 px-6 bg-[#080808]"
          aria-label="Cómo funciona el alquiler de autos en TuMovil77"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Reservar es{' '}
                <span className="gradient-text-red">muy fácil</span>
              </h2>
              <p className="text-gray-400">4 pasos simples para tener tu auto en Ciudad del Este</p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PASOS.map((paso, i) => (
                <article
                  key={paso.num}
                  className="relative text-center card-hover"
                >
                  {/* Connector line (desktop) */}
                  {i < PASOS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#CC1C1C]/50 to-transparent" />
                  )}
                  <div className="
                    w-16 h-16 rounded-2xl
                    bg-gradient-to-br from-[#CC1C1C]/20 to-[#CC1C1C]/5
                    border border-[#CC1C1C]/30
                    flex items-center justify-center
                    mx-auto mb-4 text-3xl relative z-10
                  ">
                    {paso.icon}
                  </div>
                  <div className="text-xs text-[#CC1C1C] font-bold tracking-widest mb-2">{paso.num}</div>
                  <h3 className="font-bold text-white mb-2">{paso.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{paso.desc}</p>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={WA_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-[#CC1C1C] hover:bg-[#aa1515]
                  text-white px-8 py-4 rounded-xl text-lg font-bold
                  transition-all duration-200 hover:scale-105
                "
              >
                📲 Empezar mi reserva
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            FLOTA
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          id="flota"
          className="py-24 px-6 bg-[#0f0f0f]"
          aria-label="Flota de vehículos disponibles en TuMovil77 CDE"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Vehículos{' '}
                <span className="gradient-text-red">disponibles</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Autos modernos, cómodos y listos para tu viaje en Ciudad del Este y alrededores.
              </p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VEHICULOS.map((v) => (
                <article
                  key={v.nombre}
                  className="
                    card-hover
                    bg-white/5 border border-white/10
                    rounded-2xl overflow-hidden
                    hover:border-[#CC1C1C]/40
                  "
                >
                  {/* Placeholder imagen – reemplazá con Image de Next.js cuando tengas fotos */}
                  <div className="
                    bg-gradient-to-br from-gray-900 to-[#1a0505]
                    h-48 flex items-center justify-center
                    text-6xl border-b border-white/10
                  ">
                    🚗
                    {/* PARA AGREGAR IMAGEN REAL:
                    <Image
                      src={v.img}
                      alt={`${v.nombre} – Rent a Car Ciudad del Este`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    */}
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-white text-lg mb-2">{v.nombre}</h3>
                    <p className="text-gray-400 text-sm mb-4">{v.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold">{v.precio}</span>
                      <a
                        href={WA_RESERVE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-xs bg-[#CC1C1C]/20 border border-[#CC1C1C]/40
                          text-red-300 px-3 py-1.5 rounded-lg
                          hover:bg-[#CC1C1C]/30 transition-colors
                        "
                      >
                        Consultar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="text-center text-sm text-gray-600 mt-8">
              ⚠️ Disponibilidad limitada según demanda diaria · Consultá stock en tiempo real por WhatsApp
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            TESTIMONIOS
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          id="testimonios"
          className="py-24 px-6 bg-black"
          aria-label="Testimonios de clientes de TuMovil77"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Clientes que ya{' '}
                <span className="gradient-text-red">confiaron</span>
                <br />en TuMovil77
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TESTIMONIOS.map((t) => (
                <article
                  key={t.autor}
                  className="
                    card-hover
                    bg-white/5 border border-white/10
                    rounded-2xl p-6
                    hover:border-[#CC1C1C]/30
                  "
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    "{t.texto}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CC1C1C]/40 to-[#CC1C1C]/10 border border-[#CC1C1C]/30 flex items-center justify-center text-sm">
                      {t.pais}
                    </div>
                    <span className="text-gray-400 text-sm font-semibold">{t.autor}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════════════════════════════════ */}
        <section
          className="
            relative py-28 px-6
            bg-gradient-to-br from-[#1a0000] via-black to-black
            overflow-hidden noise-overlay
          "
          aria-label="Reserva tu auto ahora en Ciudad del Este"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-[#CC1C1C]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Reservá tu auto en
              <br />
              <span className="gradient-text-red">Ciudad del Este</span>
              <br />
              ahora mismo
            </h2>

            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              No pierdas tiempo buscando transporte. Tu vehículo puede estar listo al llegar.
              El mejor alquiler de autos en Paraguay, con la garantía más baja.
            </p>

            <a
              href={WA_RESERVE}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                wa-button text-white
                px-10 py-5 rounded-xl text-xl font-black
                mb-4
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              🚗 Reservar por WhatsApp ahora
            </a>

            <p className="text-sm text-gray-500">
              ⚠️ Cupos limitados por día · Respondemos en menos de 5 minutos
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════════════════ */}
        <footer className="bg-[#050505] border-t border-white/10 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-black text-2xl tracking-tight mb-1">
                  <span className="text-[#CC1C1C]">TU</span>
                  <span className="text-white">MOVIL</span>
                  <span className="text-[#C8C8C8]">77</span>
                  <span className="text-gray-500 text-sm ml-2 font-normal">Rent a Car</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Rent a Car Ciudad del Este · Paraguay
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  📞 +595 982 777 833
                </a>
                <span className="hidden sm:inline text-gray-700">·</span>
                <span>Ciudad del Este, Paraguay</span>
                <span className="hidden sm:inline text-gray-700">·</span>
                <span>🇧🇷 Atendemos em português</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
              © {new Date().getFullYear()} TuMovil77 Rent a Car. Todos los derechos reservados.
              · Alquiler de autos en Ciudad del Este, Paraguay.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
