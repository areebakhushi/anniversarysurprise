import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroBg from "@/assets/hero-night.jpg";
import closingBg from "@/assets/closing-bg.jpg";

// Personal photos (assets)
import photo1 from "@/assets/photos/D4EF151E-0A8A-49DD-89D9-EB9F0BF4B307.asset.json";
import photo2 from "@/assets/photos/F0929F7C-5F3C-4DD2-A14E-75F118C163D4.asset.json";
import photo3 from "@/assets/photos/5873FAE5-43AC-42EE-866D-6F970426B0BF.asset.json";
import photo4 from "@/assets/photos/B473401C-9875-4415-8B5E-50CBC379317A.asset.json";
import photo5 from "@/assets/photos/9AFA16BB-E58B-4A8B-98FF-C60F740E1628.asset.json";
import photo6 from "@/assets/photos/8DFEAA92-2AE9-4893-A4C9-1BE7A6A984A0.asset.json";
import photo7 from "@/assets/photos/1C2CAADD-AFC2-448B-A8CC-4C568A4C2A52.asset.json";
import photo8 from "@/assets/photos/C6592D49-EECD-4EA1-B850-048CC688A9A9.asset.json";
import photo9 from "@/assets/photos/A1BEC170-1B6C-4E09-BD4C-863CEBAF803B.asset.json";
import photo10 from "@/assets/photos/9482DF21-E87A-44E3-80F8-874C2B7CEE8C.asset.json";
import photo11 from "@/assets/photos/E6B920D4-0050-47E4-AE17-964ECCA44D75.asset.json";
import photo12 from "@/assets/photos/CEBBBF31-EDBC-4BA3-BF6A-1EC3BEEC667A.asset.json";
// New timeline images (viaje, abrazo, cita)
import newViaje from "@/assets/photos/new-viaje.asset.json";
import newAbrazo from "@/assets/photos/new-abrazo.asset.json";
import newCita from "@/assets/photos/new-cita.asset.json";

export const Route = createFileRoute("/")({
  component: AnniversaryPage,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--eec468bb-c735-49ac-9237-b94814d703f0.lovable.app/og-preview.jpg" },
    ],
  }),
});

// ---------- Particle backdrop ----------
function StarsAndHearts() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const stars = Array.from({ length: 90 });
  const hearts = Array.from({ length: 22 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((_, i) => {
        const size = Math.random() * 2.5 + 0.6;
        return (
          <span
            key={`s${i}`}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: "0 0 6px rgba(255,255,255,0.9)",
            }}
          />
        );
      })}
      {hearts.map((_, i) => {
        const size = 10 + Math.random() * 18;
        const duration = 14 + Math.random() * 18;
        return (
          <span
            key={`h${i}`}
            className="absolute animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 30}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${Math.random() * duration}s`,
              filter: "drop-shadow(0 0 8px rgba(255, 90, 170, 0.85))",
            }}
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-7-4.5-9.5-9.2C.9 8.5 2.6 5 6 5c2 0 3.4 1.1 4 2.4C10.6 6.1 12 5 14 5c3.4 0 5.1 3.5 3.5 6.8C19 16.5 12 21 12 21z"
                fill="url(#hg)"
              />
              <defs>
                <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ff86c8" />
                  <stop offset="100%" stopColor="#e0347f" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        );
      })}
    </div>
  );
}

// ---------- Music toggle ----------
function MusicToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/10/18/audio_31c2582a5f.mp3?filename=romantic-piano-love-116857.mp3",
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => { audioRef.current?.pause(); };
  }, []);
  const toggle = () => {
    const a = audioRef.current; if (!a) return;
    if (on) { a.pause(); setOn(false); }
    else { a.play().catch(() => {}); setOn(true); }
  };
  return (
    <button
      onClick={toggle}
      aria-label={on ? "Silenciar música" : "Reproducir música"}
      className="fixed right-4 top-4 z-50 flex h-14 w-14 flex-col items-center justify-center rounded-full glass-card text-[10px] font-medium tracking-wide text-white/90 transition-transform hover:scale-105"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mb-0.5">
        <path d="M9 18V5l12-2v13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" stroke="white" strokeWidth="1.8" />
        <circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.8" />
      </svg>
      <span>{on ? "Música" : "Música"}</span>
      <span className="text-[9px] opacity-80">{on ? "encendida" : "silenciada"}</span>
    </button>
  );
}

// ---------- Count-up ----------
function useCountUp(target: number, durationMs = 2400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

function StatBox({ target, label }: { target: number; label: string }) {
  const v = useCountUp(target);
  return (
    <div className="glass-card min-w-[68px] rounded-xl px-3 py-3 text-center sm:min-w-[92px] sm:px-5 sm:py-4">
      <div className="font-serif-r text-xl font-semibold text-white sm:text-3xl" style={{ textShadow: "0 0 12px rgba(255,140,200,0.6)" }}>
        {v.toLocaleString("es")}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-pink-100/80 sm:text-xs">{label}</div>
    </div>
  );
}

// ---------- Reveal on scroll ----------
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full flex-col items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0821]/50 via-transparent to-[#160b2e]" />

      <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2 font-script text-lg text-white/95 sm:text-xl" style={{ textShadow: "0 0 10px rgba(255,120,190,0.6)" }}>
        Nuestro 1er Aniversario <span className="text-pink-400">❤</span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-28 text-center">
        <h1 className="animate-fade-up font-script text-white text-glow leading-[1.05] text-[3rem] sm:text-[5rem] md:text-[6rem]">
          Mi Nohelia,
        </h1>
        <h2 className="mt-2 animate-fade-up font-script text-white text-glow leading-[1.1] text-[2.1rem] sm:text-[3.5rem] md:text-[4.2rem]" style={{ animationDelay: "300ms" }}>
          Mi Luna y Mi Sol,
        </h2>
        <h2 className="mt-2 animate-fade-up font-script text-white text-glow leading-[1.1] text-[2.1rem] sm:text-[3.5rem] md:text-[4.2rem]" style={{ animationDelay: "600ms" }}>
          Mi Mundo Entero. <span className="align-middle">❤️</span>
        </h2>

        <div className="mt-8 flex w-full items-center justify-center gap-3 opacity-90">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-300/70 sm:w-40" />
          <span className="text-pink-300">♥</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-300/70 sm:w-40" />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <StatBox target={365} label="días" />
          <StatBox target={8760} label="horas" />
          <StatBox target={525600} label="minutos" />
          <StatBox target={31536000} label="segundos" />
        </div>

        <p className="mt-6 font-script text-2xl text-white/95 text-glow sm:text-3xl">— Juntos. <span>❤️</span></p>

        {/* Heartbeat / EKG line */}
        <svg viewBox="0 0 600 100" className="mt-6 h-16 w-full max-w-xl" aria-hidden>
          <path
            className="ekg-path"
            d="M0 50 L120 50 L140 50 L155 20 L170 80 L185 30 L200 70 L215 50 L260 50
               Q290 50 305 30 T335 30 Q350 30 355 50 Q360 70 375 70 Q390 70 400 50 L600 50"
            fill="none"
            stroke="#ff5cae"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <a href="#historia" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-scroll-bounce" aria-label="Desplazarse hacia abajo">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-200/50 bg-black/40 backdrop-blur">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#ffb6d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>
    </section>
  );
}

// ---------- Polaroid ----------
function Polaroid({ src, alt, tilt, tape = "left" }: { src: string; alt: string; tilt: number; tape?: "left" | "right" }) {
  return (
    <div
      className="relative animate-idle-float bg-[#f6f2e8] p-2 pb-8 sm:p-3 sm:pb-10"
      style={{
        // @ts-expect-error css var
        "--tilt": `${tilt}deg`,
        transform: `rotate(${tilt}deg)`,
        boxShadow: "var(--shadow-photo)",
        width: "100%",
      }}
    >
      <span
        className={`absolute -top-3 ${tape === "left" ? "left-4" : "right-4"} h-6 w-14 rotate-[-6deg] bg-pink-100/60 backdrop-blur-sm`}
        style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.25)" }}
        aria-hidden
      />
      <div className="flex aspect-square w-full items-center justify-center bg-black/10">
        <img src={src} alt={alt} className="block max-h-full max-w-full object-contain" loading="lazy" />
      </div>
    </div>
  );
}
function CircleFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative aspect-square w-full animate-idle-float overflow-hidden rounded-full p-[3px]"
      style={{
        background: "linear-gradient(135deg, #ff8dc7, #7a3fd6)",
        boxShadow: "0 0 25px rgba(255,120,200,0.55), 0 0 60px rgba(140,60,220,0.45)",
      }}
    >
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#1a0d38]">
        <img src={src} alt={alt} className="max-h-full max-w-full object-contain" loading="lazy" />
      </div>
    </div>
  );
}
function HeartFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative aspect-square w-full animate-idle-float"
      style={{ filter: "drop-shadow(0 0 18px rgba(255,120,200,0.7)) drop-shadow(0 0 40px rgba(200,60,180,0.5))" }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <clipPath id="heart-clip">
            <path d="M50 88 C 15 65, 5 40, 20 22 C 32 8, 45 15, 50 28 C 55 15, 68 8, 80 22 C 95 40, 85 65, 50 88 Z" />
          </clipPath>
        </defs>
        <image href={src} width="100" height="100" preserveAspectRatio="xMidYMid meet" clipPath="url(#heart-clip)" />
        <path
          d="M50 88 C 15 65, 5 40, 20 22 C 32 8, 45 15, 50 28 C 55 15, 68 8, 80 22 C 95 40, 85 65, 50 88 Z"
          fill="none"
          stroke="#ff8dc7"
          strokeWidth="1.8"
        />
      </svg>
    </div>
  );
}

// ---------- Historia ----------
function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-gradient-to-b from-[#160b2e] via-[#1c0f3d] to-[#1a0d38] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr_1fr] md:gap-4">
          {/* Left column: polaroid + circle */}
          <div className="hidden flex-col justify-around gap-6 md:flex">
            <Reveal delay={100}>
              <Polaroid src={photo5.url} alt="Recuerdo" tilt={-6} tape="right" />
            </Reveal>
            <Reveal delay={400}>
              <CircleFrame src={photo6.url} alt="Recuerdo" />
            </Reveal>
          </div>

          {/* Center card */}
          <Reveal>
            <article className="glass-card mx-auto max-w-2xl rounded-2xl p-6 sm:p-10">
              <h2 className="mb-6 text-center font-script text-4xl text-white text-glow sm:text-5xl">
                <span className="mr-2 text-pink-300/80">✧</span>
                Nuestra Historia, Nuestro Amor
                <span className="ml-2 text-pink-300/80">✧</span>
              </h2>
              <div className="space-y-4 font-serif-r text-[15px] leading-relaxed text-pink-50/95 sm:text-[17px]">
                <p>Hemos visto nuestras peores versiones. Hemos visto nuestros momentos de menor autoestima, nuestras pérdidas, nuestro dolor y nuestros secretos más profundos… esos que nunca le habíamos contado a nadie y que guardábamos solo para nosotros. Hasta que nos encontramos.</p>
                <p>Todo comenzó de la manera más sencilla… dos personas saludándose, bromeando y riéndose juntos.</p>
                <p>Y jamás imaginamos que ese simple “hola” terminaría convirtiéndose en el mejor equipo… y en la relación más hermosa que los dos podríamos haber soñado. <span>❤️</span></p>
                <p>Te Amo <span>❤️</span> cada vez que lo digo simplemente no puedo evitarlo <span>🥹</span>. Eres la única persona por la que daría mi vida.</p>
                <p>Tómalo como lo sientas, pero quiero que sepas que te amo y amo cada parte de ti que te hace ser quien eres. Eres tan fuerte, inteligente y me dejas sin palabras de todas las maneras posibles. Eres mi bebé <span>🥹</span>.</p>
                <p>Gracias por ser tú. Por estar conmigo. No cambiaría ni una sola cosa.</p>
                <p className="font-script text-2xl text-pink-200 text-glow-pink">Te Amo <span>❤️</span></p>
              </div>
            </article>
          </Reveal>

          {/* Right column: polaroid + heart */}
          <div className="hidden flex-col justify-around gap-6 md:flex">
            <Reveal delay={200}>
              <Polaroid src={photo7.url} alt="Recuerdo" tilt={5} tape="left" />
            </Reveal>
            <Reveal delay={500}>
              <HeartFrame src={photo8.url} alt="Recuerdo" />
            </Reveal>
          </div>

          {/* Mobile: below card, scrapbook row */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <Reveal><Polaroid src={photo5.url} alt="Recuerdo" tilt={-5} tape="right" /></Reveal>
            <Reveal delay={150}><Polaroid src={photo7.url} alt="Recuerdo" tilt={4} tape="left" /></Reveal>
            <Reveal delay={300}><CircleFrame src={photo6.url} alt="Recuerdo" /></Reveal>
            <Reveal delay={450}><HeartFrame src={photo8.url} alt="Recuerdo" /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Timeline ----------
type Item = { icon: string; title: string; text: string; img: string };
const items: Item[] = [
  {
    icon: "✈️",
    title: "Nuestro primer viaje",
    text: "Explorar nuevos lugares, crear recuerdos inolvidables y vivir mil aventuras tomados de la mano.",
    img: newViaje.url,
  },
  {
    icon: "🤗",
    title: "Nuestro primer abrazo",
    text: "Ese abrazo que lo cambia todo, que te hace sentir en casa… en sus brazos.",
    img: newAbrazo.url,
  },
  {
    icon: "💕",
    title: "Nuestra primera cita",
    text: "Esa cita llena de risas, nervios y miradas que dicen más de mil palabras.",
    img: newCita.url,
  },
  {
    icon: "✨",
    title: "Y todos los sueños que aún nos faltan por cumplir juntos",
    text: "Planes, metas, sueños… todo es mejor si es contigo. Nuestro mejor capítulo aún está por escribirse.",
    img: photo4.url,
  },
];

function TimelineCard({ item, i }: { item: Item; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal relative pl-16 sm:pl-24" style={{ transitionDelay: `${i * 180}ms` }}>
      {/* Badge */}
      <div
        className="absolute left-0 top-4 flex h-12 w-12 items-center justify-center rounded-full text-xl animate-badge-pulse sm:h-16 sm:w-16 sm:text-2xl"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ff8dc7, #a13ac9 70%, #4a1273)",
          border: "1.5px solid rgba(255,190,220,0.9)",
        }}
      >
        <span>{item.icon}</span>
      </div>

      <article className="glass-card overflow-hidden rounded-2xl">
        <div className="flex flex-col gap-0">
          <div className="p-4 sm:p-6">
            <h3 className="font-script text-2xl text-pink-100 text-glow-pink sm:text-3xl">
              <span className="mr-2">{item.icon}</span>{item.title}
            </h3>
            <p className="mt-3 font-serif-r text-[14px] leading-relaxed text-pink-50/90 sm:text-[16px]">{item.text}</p>
          </div>
          <div className="flex w-full items-center justify-center bg-black/40 p-3 sm:p-4">
            <img
              src={item.img}
              alt=""
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

function Timeline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0d38] via-[#22114a] to-[#1e0f42] py-20">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <h2 className="text-center font-script text-4xl text-white text-glow sm:text-5xl">
            <span className="mr-2 text-pink-300/80">✧</span> Lo Que Nos Espera <span className="ml-2 text-pink-300/80">✧</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif-r text-base text-pink-50/90 sm:text-lg">
            Todavía nos queda muchísimo por vivir juntos, mi amor. <span>🥰</span><br />
            Todavía nos esperan tantos momentos y tantas aventuras por compartir. <span>❤️</span>
          </p>
        </Reveal>

        <div className="relative mt-12">
          {/* vertical connecting line */}
          <div
            className="absolute bottom-0 left-6 top-0 w-[2px] sm:left-8"
            style={{
              background: "linear-gradient(180deg, transparent, #ff5cae 15%, #c73aa7 85%, transparent)",
              boxShadow: "0 0 16px rgba(255,90,180,0.65)",
            }}
          />
          <div className="space-y-10">
            {items.map((it, i) => <TimelineCard key={it.title} item={it} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Closing ----------
function Closing() {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={closingBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e0f42]/70 via-[#4a1273]/50 to-[#7a1e5f]/60" />
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
        {/* Little photo strip */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-5">
          {[photo9, photo10, photo11, photo12].map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="animate-idle-float" style={{ ["--tilt" as string]: `${(i - 1.5) * 4}deg`, transform: `rotate(${(i - 1.5) * 4}deg)` }}>
                <div className="flex h-28 w-24 items-center justify-center bg-[#f6f2e8] p-1 pb-3 sm:h-40 sm:w-32 sm:p-2 sm:pb-5" style={{ boxShadow: "var(--shadow-photo)" }}>
                  <img src={p.url} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-script text-[4.5rem] leading-none text-white animate-pulse-glow sm:text-[8rem]">
            Te Amo <span className="inline-block text-pink-300">❤</span>
          </h2>
        </Reveal>
        <div className="mt-6 flex items-center justify-center gap-3 opacity-90">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300/70 sm:w-24" />
          <span className="text-pink-300">♥</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300/70 sm:w-24" />
        </div>
        <Reveal delay={200}>
          <p className="mt-6 font-serif-r text-lg text-pink-50/95 sm:text-xl">
            Hoy, mañana y siempre…<br />
            Contigo, mi amor. <span>❤️</span>
          </p>
        </Reveal>
        <div className="mt-12 text-2xl text-pink-300" style={{ filter: "drop-shadow(0 0 12px rgba(255,120,200,0.8))" }}>❤</div>
      </div>
    </section>
  );
}

function AnniversaryPage() {
  return (
    <main className="relative min-h-screen w-full">
      <StarsAndHearts />
      <div className="relative z-10">
        <Hero />
        <Historia />
        <Timeline />
        <Closing />
      </div>
    </main>
  );
}
