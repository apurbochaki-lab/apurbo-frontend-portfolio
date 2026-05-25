'use client'

import { useEffect } from 'react'

const MyProjects = () => {
    useEffect(() => {
        // Atmospheric interaction: tracking mouse for subtle glow movement
        const handleMouseMove = (e) => {
            const glows = document.querySelectorAll('.radial-glow-proj')
            if (glows.length < 2) return

            const x = e.clientX
            const y = e.clientY

            // Adjust the first glow slightly based on mouse pos
            glows[0].style.transform = `translate(${x / 50}px, ${y / 50}px)`
            glows[1].style.transform = `translate(${-x / 50}px, ${-y / 50}px)`
        }

        // Hover effect for cards to add light intensity
        const handleCardMouseEnter = () => {
            const glows = document.querySelectorAll('.radial-glow-proj')
            glows.forEach(glow => {
                glow.style.opacity = '0.08'
            })
        }

        const handleCardMouseLeave = () => {
            const glows = document.querySelectorAll('.radial-glow-proj')
            glows.forEach(glow => {
                glow.style.opacity = '0.05'
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        const cards = document.querySelectorAll('.glass-card-project')
        cards.forEach(card => {
            card.addEventListener('mouseenter', handleCardMouseEnter)
            card.addEventListener('mouseleave', handleCardMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cards.forEach(card => {
                card.removeEventListener('mouseenter', handleCardMouseEnter)
                card.removeEventListener('mouseleave', handleCardMouseLeave)
            })
        }
    }, [])

    return (
        <section className="w-full bg-[#050505] relative overflow-hidden py-24 lg:py-24 px-5 md:px-20">
            {/* Background elements */}
            <div className="noise-overlay"></div>
            <div className="radial-glow-proj top-[-400px] left-[-200px] opacity-5"></div>
            <div className="radial-glow-proj bottom-[-400px] right-[-200px] opacity-5"></div>

            <div className="w-full max-w-[1280px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="text-xs font-mono text-[#c1ff72] mb-4 tracking-[0.2em] uppercase">// MY WORK</span>
                    <h2 className="font-display text-5xl md:text-[48px] font-bold uppercase tracking-tighter text-white mb-6">
                        MY <span className="text-[#c1ff72] neon-glow-text">PROJECTS</span>
                    </h2>
                    <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
                        Here are some of the projects I've built with passion and precision. Each project is crafted to solve real world problems and deliver exceptional user experiences.
                    </p>
                    <div className="w-full max-w-4xl px-4 flex justify-center items-center">
                        <div className="neon-divider flex-grow"></div>
                        <div className="w-2 h-2 rounded-full bg-[#c1ff72] mx-4 shadow-[0_0_10px_#c1ff72]"></div>
                        <div className="neon-divider flex-grow"></div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Card 1: SportNest */}
                    <div className="glass-card glass-card-project rounded-[24px] p-6 flex flex-col h-full group premium-ambient-glow edge-lit-glass">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                            <img
                                alt="SportNest"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                src="https://i.ibb.co/mVXmHwwp/Screenshot-770.png"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                        </div>
                        <span className="text-xs font-mono text-[#c1ff72] mb-2 tracking-wider">PROJECT 01</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">SportNest</h3>
                        <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed">
                            A modern and responsive sports facility booking management platform where users can explore sports facilities, book available time slots, and manage their own facilities seamlessly.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Next.js</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Tailwind CSS 4</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">JavaScript</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Better Auth</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Express.js</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">MongoDB</span>
                        </div>
                        <a className="flex items-center justify-center gap-2 w-full py-4 rounded-xl btn-glow text-[#c1ff72] font-mono text-xs tracking-wider transition-all duration-300 hover:text-white" href="https://sportnest-sports-facility.vercel.app">
                            View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    </div>

                    {/* Card 2: TaskFlow */}
                    <div className="glass-card glass-card-project rounded-[24px] p-6 flex flex-col h-full group premium-ambient-glow edge-lit-glass">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                            <img
                                alt="TaskFlow"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                src="https://i.ibb.co/VZd5wRx/Screenshot-771.png"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                        </div>
                        <span className="text-xs font-mono text-[#c1ff72] mb-2 tracking-wider">PROJECT 02</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">WanderLast Traveling Agency</h3>
                        <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed">
                            This is a website that you can you post new destination with in-detailed information for people can buy it for visiting the place.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Next.js</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Tailwind CSS 4</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">JavaScript</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Better Auth</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Express.js</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">MongoDB</span>
                        </div>
                        <a className="flex items-center justify-center gap-2 w-full py-4 rounded-xl btn-glow text-[#c1ff72] font-mono text-xs tracking-wider transition-all duration-300 hover:text-white" href="https://wanderlast-traveling-agency.vercel.app">
                            View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    </div>

                    {/* Card 3: Urbanic */}
                    <div className="glass-card glass-card-project rounded-[24px] p-6 flex flex-col h-full group premium-ambient-glow edge-lit-glass">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                            <img
                                alt="Urbanic"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                src="https://i.ibb.co/Dg7r6QLK/Screenshot-772.png"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                        </div>
                        <span className="text-xs font-mono text-[#c1ff72] mb-2 tracking-wider">PROJECT 03</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Tiles Gallery</h3>
                        <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed">
                            A modern and responsive web application to showcase a beautiful collection of tiles. Users can explore, search, and view detailed information about different tiles, along with authentication and profile management features.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Next.js</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">JavaScript</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Tailwind CSS 4</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Mongo DB</span>
                            <span className="px-3 py-1 bg-[#c1ff72]/10 border border-[#c1ff72]/20 rounded-full text-[10px] font-mono text-[#c1ff72] uppercase">Hero UI</span>
                        </div>
                        <a className="flex items-center justify-center gap-2 w-full py-4 rounded-xl btn-glow text-[#c1ff72] font-mono text-xs tracking-wider transition-all duration-300 hover:text-white" href="https://tiles-gallery-rust.vercel.app">
                            View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    </div>

                </div>

                {/* GitHub Action Section */}
                <div className="mt-18 flex justify-center">
                    <a className="group relative flex items-center gap-4 px-10 py-5 rounded-full border border-white/5 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#c1ff72]/50 btn-glow github-glow" href="https://github.com/apurbochaki-lab" target="_blank" rel="noopener noreferrer">
                        {/* Inner Glow */}
                        <div className="absolute inset-0 bg-[#c1ff72] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <span className="material-symbols-outlined text-[#c1ff72] text-3xl">terminal</span>
                        <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">Check Out More on GitHub</span>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#c1ff72] transition-colors duration-300">
                            <svg className="w-5 h-5 fill-current text-white group-hover:text-[#050505]" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12" />
                            </svg>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default MyProjects
