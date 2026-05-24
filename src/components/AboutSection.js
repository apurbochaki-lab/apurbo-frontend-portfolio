"use client";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-container-max w-full px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-16 items-start py-20 relative">
      
      {/* Left Content: Bio & Heading */}
      <div className="md:col-span-4 flex flex-col space-y-10 animate-fade-in asymmetric-up">
        <div className="space-y-6">
          <h2 className="font-display text-headline-lg-mobile md:text-display text-primary leading-none tracking-tight">
            About<br />Me
          </h2>
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-brand-neon neon-glow"></span>
            <p className="font-label-mono text-label-mono uppercase tracking-technical text-brand-neon">
              Let's Connect And Create Together
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            I'm Fin Harper, a UI/UX designer with over 15 years of experience turning ideas into engaging digital experiences. I’ve partnered with agencies, startups, and visionary individuals to design solutions where creativity meets usability.
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed opacity-80">
            My focus goes beyond visuals—I craft intuitive, purposeful interfaces that connect with users and drive results. Every project is an opportunity to create something meaningful, and I thrive on bringing clarity and impact to every digital interaction.
          </p>
        </div>
        <div className="pt-6">
          <a
            className="inline-flex items-center space-x-4 font-label-mono text-label-mono text-primary group border-b border-white/10 pb-2 hover:border-brand-neon transition-colors"
            href="#experience"
          >
            <span className="tracking-technical">VIEW EXPERIENCE</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 text-brand-neon">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* Center Content: Portrait */}
      <div className="md:col-span-5 relative group flex justify-center">
        {/* Abstract Glow Element */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-neon/5 blur-[120px] rounded-full opacity-30 neon-glow-bg transition-transform duration-300 ease-out"></div>
        
        <div className="glass-card rounded-2xl overflow-hidden p-2 relative w-full aspect-[2/3] max-w-[440px]">
          {/* Outer Decorative Stroke */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20"></div>
          <div className="relative h-full w-full rounded-xl overflow-hidden bg-surface-container-highest">
            <img
              alt="Professional portrait of Fin Harper"
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrFh8mxH_bh2R1wJ6zCAGp6-JmRVRXo5cG-bz1RYeaCp5pO_kq0OI4HC63KnI44IYbOF_0UAFNE39kpqrW9ZOU-KD9G2JnpqEMrzSbI7Qz3BMjatHbd0tvzhQedmq6Rd9CNgGVPxm2H6JOJ1r9Y9Z_hpRNKxjnVO-pbJqP1EXbzM1Yb3YAl-_xSWCmjgk1C-UYhzNredgmPGeGDNkjaSlPiyJ33wJsiHeuCsPa4l8TrqSYhCKRh0H0idbdZY-xraBZLezsrutEIl6"
            />
            {/* Gradient Overlay for tech-noir feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
          </div>
          {/* Floating Tech Badge */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full border border-white/10 flex items-center space-x-3 z-30">
            <span
              className="material-symbols-outlined text-brand-neon text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
            <span className="font-label-mono text-[11px] text-primary tracking-technical uppercase">
              System.Status: ONLINE
            </span>
          </div>
        </div>
      </div>

      {/* Right Content: Achievement Stats */}
      <div className="md:col-span-3 flex flex-col space-y-16 md:pt-20">
        <div className="space-y-4 group cursor-default">
          <h3 className="font-display text-headline-lg text-brand-neon flex items-baseline tracking-tighter">
            3.5K<span className="text-headline-md ml-1 opacity-40 font-light">+</span>
          </h3>
          <p className="font-label-mono text-label-mono text-outline uppercase tracking-technical">
            Happy Clients
          </p>
          <div className="stat-divider mt-2 group-hover:bg-brand-neon/30 transition-colors duration-500"></div>
        </div>
        <div className="space-y-4 group cursor-default">
          <h3 className="font-display text-headline-lg text-primary flex items-baseline tracking-tighter">
            10<span className="text-headline-md ml-1 opacity-40 font-light">+</span>
          </h3>
          <p className="font-label-mono text-label-mono text-outline uppercase tracking-technical">
            Years of Expertise
          </p>
          <div className="stat-divider mt-2 group-hover:bg-brand-neon/30 transition-colors duration-500"></div>
        </div>
        <div className="space-y-4 group cursor-default">
          <h3 className="font-display text-headline-lg text-primary flex items-baseline tracking-tighter">
            600<span className="text-headline-md ml-1 opacity-40 font-light">+</span>
          </h3>
          <p className="font-label-mono text-label-mono text-outline uppercase tracking-technical">
            Project Collaborations
          </p>
          <div className="stat-divider mt-2 group-hover:bg-brand-neon/30 transition-colors duration-500"></div>
        </div>
      </div>
      
    </section>
  );
}
