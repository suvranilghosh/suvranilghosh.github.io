"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, ChevronDown, Camera, Bike, Gamepad2, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { allStack } from "@/lib/stack-data";
import { ContactDialog } from "@/components/shared/ContactDialog";

const hobbies = [
  {
    icon: Camera,
    title: "Photography & Film",
    description:
      "Filming live music, concerts, and portraits across NYC and Beyond.",
  },
  {
    icon: Bike,
    title: "Road Cycling",
    description:
      "Clocking miles through city parks and open roads. Cycling kit on, headphones in.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "IGL of the D1 Rutgers Rainbow Six Siege esports team. Tactical FPS is still home",
  },
  {
    icon: Cpu,
    title: "Hardware Nerd",
    description:
      "10+ custom PC builds. 3 hand-built mechanical keyboards. Some hobbies just compound and become a rabbit hole.",
  },
];

export function AboutSection() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 200, 1);
  const peekOpacity = 0.4 + 0.6 * scrollProgress;
  const arrowOpacity = 1 - scrollProgress;

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="hero-gradient">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      {/* Hidden SVG gradient definition for icons */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <linearGradient
            id="marquee-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(0, 0%, 45%)" />
            <stop offset="100%" stopColor="hsl(0, 0%, 45%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="relative w-40 h-40 mx-auto">
              <div
                className="w-full h-full rounded-full p-[3px]"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/headshot.png"
                    alt="Neil Ghosh"
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-gradient">Neil</span>,
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground">
                A Frontend <span className="text-foreground">Engineer.</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build production-grade web apps with React, Next.js, and
              TypeScript. Experienced across early-stage startups — from a
              pre-seed cloud networking subsidiary of one of the biggest
              electronic exchanges in the country to a Series A B2B SaaS —
              obsessing over every pixel and interaction — fast.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-16 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  4+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  2
                </div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  4.0
                </div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
            </div>

            <div className="flex flex-row gap-2 justify-center items-center pt-20">
              {[
                {
                  label: "Email",
                  icon: Mail,
                  color: "hsl(252,84%,65%)",
                  onClick: () => setContactOpen(true),
                  href: null,
                },
                {
                  label: "Github",
                  icon: FaGithub,
                  color: "#ffffff",
                  href: "https://github.com/suvranilghosh",
                },
                {
                  label: "LinkedIn",
                  icon: FaLinkedin,
                  color: "#0A66C2",
                  href: "https://www.linkedin.com/in/suvranilghosh/",
                },
              ].map(({ label, icon: Icon, color, href, onClick }) => {
                const inner = (
                  <div
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl cursor-pointer"
                    style={{
                      color: "hsl(240 5% 45%)",
                      transition: "color 300ms",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "hsl(240 5% 45%)")
                    }
                  >
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <Icon size={36} />
                    </div>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {inner}
                  </a>
                ) : (
                  <button key={label} onClick={onClick!} aria-label={label}>
                    {inner}
                  </button>
                );
              })}
            </div>

            {/* Tech stack marquee */}
            <div
              className="w-full overflow-hidden pt-40"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  width: "max-content",
                  animation: "marquee-scroll 30s linear infinite",
                  willChange: "transform",
                  transform: "translate3d(0, 0, 0)",
                }}
              >
                {[...allStack, ...allStack].map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        size={26}
                        style={{
                          fill: "url(#marquee-icon-gradient)",
                          stroke: "url(#marquee-icon-gradient)",
                          color: "url(#marquee-icon-gradient)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "11px",
                          color: "hsl(240 5% 45%)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator + section peek */}
        <div className="flex flex-col items-center mt-auto">
          <button
            onClick={scrollDown}
            aria-label="Scroll down"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              animation: "bounce-down 2s ease-in-out infinite",
              padding: "8px",
              opacity: arrowOpacity,
              transition: "opacity 0.1s linear",
            }}
          >
            <ChevronDown className="w-6 h-6 text-foreground/40" />
          </button>
          {/* Heading peeking up from the next section */}
          <div
            className="w-full text-center pt-4 pb-8"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 65%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 65%)",
              opacity: peekOpacity,
              transition: "opacity 0.1s linear",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-gradient">Beyond</span> the Code
            </h2>
          </div>
        </div>
      </section>

      {/* ── Beyond the Code ── */}
      <section className="pt-6 pb-20 px-6 hero-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-muted-foreground text-center">
              The things that keep me sharp when I&apos;m not at a keyboard.
            </p>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[500px] mb-12">
            <div className="relative rounded-2xl overflow-hidden row-span-2">
              <Image
                src="/assets/hobby3.JPG"
                alt="Summit at sunset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/assets/hobby1.JPG"
                alt="Filming at a concert with a gimbal"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 55%" }}
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/assets/hobby2.JPG"
                  alt="Road cycling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
            </div>
          </div>

          {/* Hobby cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="p-5 rounded-xl bg-card border border-border space-y-3 card-hover transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <hobby.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm leading-snug">
                  {hobby.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
