'use client'

const TechStacksOld = () => {
    return (
        <section className="w-[1440px] bg-[#131313] overflow-hidden relative px-5 md:px-20 lg:pb-10">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c1ff72]/5 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c1ff72]/5 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            {/* Main Container */}
            <div className="w-full max-w-[1280px] mx-auto py-24 lg:py-32">

                {/* Header */}
                <div className="text-center mb-20 lg:mb-24">

                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c1ff72]"></div>

                        <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold text-gray-400">
                            Built With Modern Technologies
                        </span>

                        <div className="w-1.5 h-1.5 rounded-full bg-[#c1ff72]"></div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-white leading-none">
                        TECH{" "}
                        <span className="text-[#c1ff72] drop-shadow-[0_0_18px_rgba(193,255,114,0.45)]">
                            STACK
                        </span>
                    </h1>

                    <div className="flex items-center justify-center gap-5 my-8">
                        <div className="h-[1px] w-20 sm:w-28 bg-gradient-to-r from-transparent to-[#c1ff72]"></div>

                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-300 font-mono">
                            The Engineering Ecosystem
                        </span>

                        <div className="h-[1px] w-20 sm:w-28 bg-gradient-to-l from-transparent to-[#c1ff72]"></div>
                    </div>

                    <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-400 leading-8">
                        A carefully curated set of technologies, frameworks,
                        and tools I use to build fast, scalable, and modern web
                        applications.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-7">

                    {/* Frontend */}
                    <div className="md:col-span-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c1ff72] hover:shadow-[0_10px_30px_rgba(193,255,114,0.05)]">

                        <div className="flex items-center gap-3 mb-10">
                            <h2 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                                Frontend
                            </h2>

                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        <div className="flex flex-wrap gap-8 lg:gap-12">

                            {[
                                {
                                    name: "HTML5",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                                },
                                {
                                    name: "CSS3",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                                },
                                {
                                    name: "JavaScript",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                                },
                                {
                                    name: "TypeScript",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                                },
                                {
                                    name: "Tailwind",
                                    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                                },
                            ].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-16 h-16 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-[#c1ff72]/50 group-hover:shadow-[0_0_30px_rgba(193,255,114,0.15)]">
                                        <img
                                            src={tech.img}
                                            alt={tech.name}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="md:col-span-5 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c1ff72] hover:shadow-[0_10px_30px_rgba(193,255,114,0.05)]">

                        <div className="flex items-center gap-3 mb-10">
                            <h2 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                                Backend
                            </h2>

                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        <div className="flex flex-wrap gap-10">

                            {[
                                {
                                    name: "Node.js",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                                },
                                {
                                    name: "Express",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                                },
                            ].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-16 h-16 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-[#c1ff72]/50 group-hover:shadow-[0_0_30px_rgba(193,255,114,0.15)]">
                                        <img
                                            src={tech.img}
                                            alt={tech.name}
                                            className="w-10 h-10 object-contain invert"
                                        />
                                    </div>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database */}
                    <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c1ff72] hover:shadow-[0_10px_30px_rgba(193,255,114,0.05)]">

                        <div className="flex items-center gap-3 mb-10">
                            <h2 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                                Database
                            </h2>

                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        <div className="flex justify-around">

                            {[
                                {
                                    name: "MongoDB",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                                },
                                {
                                    name: "Firebase",
                                    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
                                },
                            ].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-16 h-16 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-[#c1ff72]/50 group-hover:shadow-[0_0_30px_rgba(193,255,114,0.15)]">
                                        <img
                                            src={tech.img}
                                            alt={tech.name}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c1ff72] hover:shadow-[0_10px_30px_rgba(193,255,114,0.05)]">

                        <div className="flex items-center gap-3 mb-10">
                            <h2 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                                Frameworks
                            </h2>

                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        <div className="flex justify-around">

                            {[
                                {
                                    name: "React",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                                },
                                {
                                    name: "Next.js",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                                },
                            ].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-16 h-16 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-[#c1ff72]/50 group-hover:shadow-[0_0_30px_rgba(193,255,114,0.15)]">
                                        <img
                                            src={tech.img}
                                            alt={tech.name}
                                            className={`w-10 h-10 object-contain ${tech.name === "Next.js" ? "invert" : ""
                                                }`}
                                        />
                                    </div>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c1ff72] hover:shadow-[0_10px_30px_rgba(193,255,114,0.05)]">

                        <div className="flex items-center gap-3 mb-10">
                            <h2 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                                Tools
                            </h2>

                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        <div className="flex justify-around">

                            {[
                                {
                                    name: "Git",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                                },
                                {
                                    name: "GitHub",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                                },
                                {
                                    name: "Figma",
                                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                                },
                            ].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-[#c1ff72]/50 group-hover:shadow-[0_0_30px_rgba(193,255,114,0.15)]">
                                        <img
                                            src={tech.img}
                                            alt={tech.name}
                                            className={`w-8 h-8 object-contain ${tech.name === "GitHub" ? "invert" : ""
                                                }`}
                                        />
                                    </div>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer Actions */}
                <footer className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-20 lg:mt-18 max-w-5xl mx-auto" data-purpose="footer-section">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-full bg-black/60 border border-[#c1ff72]/30 flex items-center justify-center shadow-[0_0_20px_rgba(193,255,114,0.1)]">
                            <svg className="w-7 h-7 text-[#c1ff72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 003.24 3.03 14.98 14.98 0 009.39 15.15l-1.01 1.01m1.01-1.01a14.98 14.98 0 004.24-4.24M15.59 14.37l1.01 1.01m-1.01-1.01a14.98 14.98 0 00-4.24 4.24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white tracking-tight">Let's <span className="text-[#c1ff72]">Build</span> Together</h3>
                            <p className="text-xs text-gray-400">Open for collaborations and exciting <span className="text-[#c1ff72]">projects</span>.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Contact Handles */}
                        <a className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#c1ff72]/40 transition-colors group" href="#">
                            <img alt="GitHub" className="w-5 h-5 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqHGt-QVqz6L0IkuGwu4D69RNN1k-6ouCXU2pwONb2FedWJQu7eNxPwdMqhhmTM5fAJwhA0PvRrrTTZ2ad9fTuFsi-pfDu6iauZBIpMi4RhWilDdkuCB5czvYLYMG0EHQ9HzMzK1wk4P7187ArO7L4YZsWXXZykPjpK2FlX6_jlXCyiaLSuKdvIdxJGmebbWDAZbVElIr0Cz5BPoqBnJ0qCL1QdqVJF3EvQG1TM8OJkaKCl0TEN10igy8JeMm57FYtSIv3pqqA2SFZ" />
                            <span className="text-xs font-mono text-gray-300">/github_handle</span>
                        </a>
                        <a className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#c1ff72]/40 transition-colors group" href="#">
                            <img alt="LinkedIn" className="w-5 h-5 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaIrs64eKArIW-vaAw82lyu3Z2ZKfqjILi2hwfa55mhpLU8hkdOgJBOGXv0_V5xl1guxnZ6SouLiFJ-fxzUax26rcfCjHVDEIBBQJdI4a34tbHngx-F7kQCFzLcATbb6OgY-vdbNFPK_2KSdmuh02XYhLDkYn4m9VP6Fm00P6PKkoE3hh0F-GxBN8UQOie3dbHLQUwRxJOJcdOSWevf5xkDR__0_qDwbp0tG2nXQS5BkZyaM6cPgriTdON1ojLAg90_nqx5a1ydDJp" />
                            <span className="text-xs font-mono text-gray-300">/linkedin_profile</span>
                        </a>
                        <a className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#c1ff72]/40 transition-colors group" href="#">
                            <svg className="w-5 h-5 text-[#c1ff72] opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                            <span className="text-xs font-mono text-gray-300">hello@domain.com</span>
                        </a>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default TechStacksOld