'use client'

import { useEffect, useState } from 'react'

const LetsConnect = () => {
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        // Atmospheric mouse glow effect
        const handleMouseMove = (e) => {
            const blobs = document.querySelectorAll('.glow-blob')
            const x = e.clientX
            const y = e.clientY
            
            blobs.forEach((blob, index) => {
                const speed = (index + 1) * 0.02
                const shiftX = (x - window.innerWidth / 2) * speed
                const shiftY = (y - window.innerHeight / 2) * speed
                blob.style.transform = `translate(${shiftX}px, ${shiftY}px)`
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)

        // Simulate network delay
        setTimeout(() => {
            setSubmitting(false)
            setSuccess(true)
            e.target.reset()

            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }, 1500)
    }

    return (
        <section className="w-full bg-[#050505] relative overflow-hidden py-16 lg:py-24 px-5 md:px-20">
            <div className="noise-overlay"></div>
            
            {/* Background Blobs */}
            <div className="glow-blob -top-48 -left-48"></div>
            <div className="glow-blob -bottom-48 -right-48"></div>

            <div className="relative z-10 w-full max-w-[1280px] mx-auto">
                <div className="glass-panel rounded-[28px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    
                    {/* Left Column: Branding & Info */}
                    <div className="p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                        <div>
                            <h2 className="font-display text-5xl md:text-[80px] mb-6 tracking-tight leading-none font-bold">
                                <span className="text-white">LET'S</span><br/>
                                <span className="text-[#c1ff72] neon-text-glow">CONNECT.</span>
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 max-w-sm mb-12 opacity-80 leading-relaxed font-sans">
                                I’m currently open to high-impact collaborations and technical leadership opportunities. Let’s build something definitive.
                            </p>
                            <div className="space-y-8">
                                {/* Email */}
                                <div className="group">
                                    <span className="block font-mono text-[10px] text-[#c1ff72] tracking-[0.2em] mb-2">INQUIRIES</span>
                                    <a className="text-xl font-bold text-white hover:text-[#c1ff72] transition-colors duration-300" href="mailto:hello@architect-core.io">
                                        apurbokumarchaki@gmail.com
                                    </a>
                                </div>
                                {/* Direct Contacts */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#c1ff72]">call</span>
                                        <span className="font-mono text-gray-300 text-sm">+8801853-253943</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#c1ff72]">location_on</span>
                                        <span className="font-mono text-gray-300 text-sm">Bogura, Rajshahi, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Socials */}
                        <div className="mt-16 pt-8 border-t border-white/5 flex gap-8">
                            <a className="font-mono text-[11px] text-gray-400 hover:text-[#c1ff72] tracking-[0.25em] transition-colors" href="https://github.com/apurbochaki-lab">GITHUB</a>
                            <a className="font-mono text-[11px] text-gray-400 hover:text-[#c1ff72] tracking-[0.25em] transition-colors" href="https://www.linkedin.com/in/apurbo-chaki8">LINKEDIN</a>
                            {/* <a className="font-mono text-[11px] text-gray-400 hover:text-[#c1ff72] tracking-[0.25em] transition-colors" href="#">TWITTER</a> */}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="p-8 md:p-16 bg-white/[0.01]">
                        <form className="space-y-12" id="contactForm" onSubmit={handleSubmit}>
                            <div className="space-y-1">
                                <label className="font-mono text-[10px] text-[#c1ff72] tracking-[0.2em]" htmlFor="name">YOUR NAME</label>
                                <input className="input-line w-full text-white text-sm" id="name" name="name" placeholder="John Doe" required type="text"/>
                            </div>
                            <div className="space-y-1">
                                <label className="font-mono text-[10px] text-[#c1ff72] tracking-[0.2em]" htmlFor="email">YOUR EMAIL</label>
                                <input className="input-line w-full text-white text-sm" id="email" name="email" placeholder="john@example.com" required type="email"/>
                            </div>
                            <div className="space-y-1">
                                <label className="font-mono text-[10px] text-[#c1ff72] tracking-[0.2em]" htmlFor="message">YOUR MESSAGE</label>
                                <textarea className="input-line w-full text-white text-sm resize-none" id="message" name="message" placeholder="How can I help you today?" required rows={4}></textarea>
                            </div>
                            <div className="pt-4">
                                <button 
                                    className={`btn-primary-glow w-full h-16 text-[#050505] font-mono text-sm font-bold rounded-[18px] flex items-center justify-center gap-3 group transition-all duration-300 ${success ? 'bg-white' : 'bg-[#c1ff72]'}`}
                                    type="submit"
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <>
                                            <span className="animate-pulse">TRANSMITTING...</span>
                                            <span className="material-symbols-outlined animate-spin">sync</span>
                                        </>
                                    ) : success ? (
                                        <>
                                            <span>MESSAGE RECEIVED</span>
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>SEND MESSAGE</span>
                                            <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="font-mono text-[10px] text-gray-500 text-center uppercase tracking-widest">
                                Encrypted Data Transmission Protocol Active
                            </p>
                        </form>
                    </div>

                </div>

                {/* Decorative Bottom Tag */}
                <div className="mt-8 text-center opacity-20 hover:opacity-100 transition-opacity cursor-default">
                    <span className="font-mono text-[9px] tracking-[0.5em] text-gray-400">ENGINEER_OS_VERSION_1.0 // SYSTEM_STABLE</span>
                </div>
            </div>
        </section>
    )
}

export default LetsConnect
