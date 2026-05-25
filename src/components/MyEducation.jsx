'use client'

import { useEffect } from 'react'

const MyEducation = () => {
    // Subtle parallax effect for floating modules
    useEffect(() => {
        const handleMouseMove = (e) => {
            const modules = document.querySelectorAll('.glass-module')
            if (modules.length === 0) return
            
            const x = (window.innerWidth / 2 - e.clientX) / 50
            const y = (window.innerHeight / 2 - e.clientY) / 50
            
            modules.forEach((module, index) => {
                const factor = (index + 1) * 0.2
                module.style.transform = `translate(${x * factor}px, ${y * factor}px)`
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <section className="w-full bg-[#0a0a0a] relative overflow-hidden py-24 lg:py-24 px-5 md:px-20 data-grid">
            {/* Scanline Effect */}
            <div className="scanline pointer-events-none z-50"></div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none opacity-20 mix-blend-screen scale-110">
                <img 
                    alt="background texture" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_SX--LKDZSLOPmfUaPJ9g_8aj3E6jlLkvo65yb6VNWKaqS-R9wznwlLkyX0ly0cC5TyYo7OblREe0RHCfF4vDGVAx3AmDpFKX2ZD9mlhfRzUlhh8ag_AkD1DFeaUkWgKrBziaSPLK2VBry4Dxa_fzr9OkzFb0I2ioNbaJrEoTDcBYdmbD0Ky8XH9koNH60kwwUBV-CesCEdeiOyFGaETlmb7NEvJ68TPGml67oonu4CT6aMm35sFJlAvO5JmjeEK73Q1JKoeQzjh"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] -z-10 pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto relative z-10">
                {/* Section Header Reimagined */}
                <header className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-8">
                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-[#c1ff72]"></div>
                        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                            My <span className="text-[#c1ff72]">Education</span>
                        </h2>
                        <p className="font-mono text-[10px] sm:text-xs text-gray-400 mt-2 uppercase tracking-[0.4em]">Academic Path & Certification Records</p>
                    </div>
                    <div className="flex flex-col items-end text-right font-mono text-[10px]">
                        <span className="text-[#c1ff72] opacity-50 uppercase">LOCATION: BANGLADESH</span>
                        <span className="text-[#c1ff72] uppercase mt-1">STATUS: CONTINUOUS LEARNING</span>
                    </div>
                </header>

                {/* Grid Cluster Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative min-h-[800px]">
                    {/* Decoration: Neural Link (Visual Element) */}
                    <div className="hidden lg:block absolute top-1/4 left-1/3 w-64 h-64 -z-10 float-anim opacity-40">
                        <img 
                            alt="floating module" 
                            className="w-full h-full object-contain rounded-full border border-[#c1ff72]/20" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs1czFdYsK01uaPDMjPob7hh_xOhiDpgVUCVkpTmMfJNFslR7A2VnffwtTIL2XqedLYow6XvprBjUDxqk2ijjPGi0IWY54PBv9QmOaz8GMpRVjPGQoVpnFKkwRiVCgI0Ruhkg1WgQz591e64r6-VVZN7DX6g2lLYBjhAFy4F8pDjBEmQKoPB5r-WmSoOAXVmiz7RiHr5hEoTRM_wMQo28gFS6Hvon4y_3KlmOikVW8PAsXhVOQiSH5dTDtvRdoImykrQjOdalFtVZ9"
                        />
                    </div>

                    {/* Item 1: Undergraduate */}
                    <div className="md:col-span-6 h-fit">
                        <div className="glass-module rounded-xl relative overflow-hidden group p-4">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#c1ff72]/10 flex items-center justify-center text-[#c1ff72] border border-[#c1ff72]/20">
                                    <span className="material-symbols-outlined text-lg">terminal</span>
                                </div>
                                <span className="font-mono text-[9px] py-0.5 px-2 rounded-sm border border-[#c1ff72]/40 text-[#c1ff72] uppercase tracking-widest">SECONDARY</span>
                            </div>
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-1">Secondary School Certificate (SSC)</h3>
                            <p className="font-mono text-gray-400 mb-4 text-xs">Betkhoir High School, Bogura</p>
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 font-mono text-[10px]">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">PERIOD</span>
                                    <span className="text-[#c1ff72] text-[11px] mt-0.5">2018 — 2019</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">SCORE</span>
                                    <span className="text-white text-[11px] mt-0.5">GPA: 5.00 / 5.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 border-l-2 border-[#c1ff72]/20">
                            <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Built a strong academic foundation with focus on discipline, consistency, and analytical learning.</p>
                        </div>
                    </div>

                    {/* Item 2: Certification (Shifted) */}
                    <div className="md:col-span-6 lg:col-start-8 md:mt-24 h-fit">
                        <div className="glass-module rounded-xl relative overflow-hidden group p-4">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#c1ff72]/10 flex items-center justify-center text-[#c1ff72] border border-[#c1ff72]/20">
                                    <span className="material-symbols-outlined text-lg">architecture</span>
                                </div>
                                <span className="font-mono text-[9px] py-0.5 px-2 rounded-sm border border-[#c1ff72]/40 text-[#c1ff72] uppercase tracking-widest">HIGHER SECONDARY</span>
                            </div>
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-1">Higher Secondary Certificate (HSC)</h3>
                            <p className="font-mono text-gray-400 mb-4 text-xs">Govt. Begum Nurunnahar Tarkabagish Honours College</p>
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 font-mono text-[10px]">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">PERIOD</span>
                                    <span className="text-[#c1ff72] text-[11px] mt-0.5">2020 — 2022</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">SCORE</span>
                                    <span className="text-white text-[11px] mt-0.5">GPA: 4.80 / 5.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4 border-r-2 border-[#c1ff72]/20 text-right">
                            <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Focused on academic growth, problem-solving skills, and technology-driven learning.</p>
                        </div>
                    </div>

                    {/* Visual Core Element */}
                    <div className="hidden lg:flex md:col-span-3 items-center justify-center pointer-events-none relative">
                        <div className="w-16 h-16 rounded-full border border-[#c1ff72]/30 animate-ping absolute"></div>
                        <div className="w-4 h-4 bg-[#c1ff72] rounded-full shadow-[0_0_20px_#c1ff72] z-10"></div>
                    </div>

                    {/* Item 3: Post-Grad */}
                    <div className="md:col-span-7 lg:col-start-2 lg:-mt-12 h-fit">
                        <div className="glass-module rounded-xl relative overflow-hidden group p-4">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#c1ff72]/10 flex items-center justify-center text-[#c1ff72] border border-[#c1ff72]/20">
                                    <span className="material-symbols-outlined text-lg">biotech</span>
                                </div>
                                <span className="font-mono text-[9px] py-0.5 px-2 rounded-sm border border-[#c1ff72]/40 text-[#c1ff72] uppercase tracking-widest">UNDERGRADUATE</span>
                            </div>
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-1">Bachelor of Social Science (BSS)</h3>
                            <p className="font-mono text-gray-400 mb-4 text-xs">Govt. Azizul Haque College, Bogura</p>
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 font-mono text-[10px]">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">PERIOD</span>
                                    <span className="text-[#c1ff72] text-[11px] mt-0.5">Education Running</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mt-4 p-4 border-l-2 border-[#c1ff72]/20">
                            <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Continuing higher education while building practical skills in frontend development and modern web technologies.</p>
                        </div>
                    </div>

                    {/* Small Floating Data Module */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-3 h-fit lg:mt-32">
                        <div className="p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur-md">
                            <div className="text-[9px] font-mono text-[#c1ff72]/50 mb-4 tracking-[0.3em]">ENVIRONMENT_DATA</div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></div>
                                <span className="font-mono text-[10px] text-gray-300">ZURICH LABS // ONLINE</span>
                            </div>
                            <div className="mt-6 opacity-20">
                                <img 
                                    alt="Engineering Lab" 
                                    className="w-full h-24 object-cover grayscale rounded-lg" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb3mxEaAg1D5l31S7E79iwSBmz98bdkTURVkp0hZfc1UCJfh4WwwIG58yh4faS-XXqtcwvgQIwjHyYSoWFqhUiE0gaezelrGtgZucqDfWmWVrmEK7PTAdgnq_R4yRhw1ZRc7hWnUGmCxq62BaRYE4vzWWSYrSBzhgZgQD9ip4yK0avXWnw9DAdY4xS2-PjTyc6IVx77PhupYcDH3_rOMQ819isbwb10U9KAIsHIkA5uXsj1u1XtEWqLPn63BkB0QXZbEMmGca0ZKY1"
                                />
                            </div>
                            <div className="mt-4 font-mono text-[8px] text-gray-500 text-center">STUDY_ENVIRONMENT_ARCHIVE_01</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyEducation
