'use client'

import { useEffect } from 'react'
import "../app/globals.css";

const Footer = () => {

    useEffect(() => {

        const handleMouseMove = (e) => {

            const particles = document.querySelectorAll('.footer-particle')

            const x = e.clientX
            const y = e.clientY

            particles.forEach((particle, index) => {

                const speed = (index + 1) * 0.015

                const shiftX = (x - window.innerWidth / 2) * speed
                const shiftY = (y - window.innerHeight / 2) * speed

                particle.style.transform =
                    `translate(${shiftX}px, ${shiftY}px)`
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    return (
        <footer className="relative w-full border-t border-[#c1ff72]/10 overflow-hidden">

            {/* Main Footer Container */}
            <div className="w-full bg-[rgba(12,12,12,0.88)] backdrop-blur-2xl relative z-10">

                <div className='max-w-[1400px] mx-auto'>
                    {/* Glass Footer Panel */}
                    <div className="w-full bg-[rgba(12,12,12,0.88)] backdrop-blur-2xl px-6 md:px-10 lg:px-14 py-12 md:py-16">

                        {/* Top Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">

                            {/* COLUMN 1 */}
                            <div className="lg:col-span-4 flex flex-col gap-8">

                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                        <span className="text-white">Apurbo</span>
                                        <span className="text-[#c1ff72]"> Chaki</span>
                                    </h2>

                                    <p className="font-mono text-xs text-[#c1ff72] mt-2 tracking-[0.25em] uppercase">
                                        Frontend Developer & UI Designer
                                    </p>
                                </div>

                                <p className="text-gray-400 max-w-md leading-relaxed text-sm">
                                    Building modern, responsive, and user-focused web experiences
                                    with clean frontend engineering and premium UI design.
                                </p>

                                {/* Highlight Box */}
                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-center gap-4 w-fit pr-8">
                                    <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-[#c1ff72]/10 text-[#c1ff72]">
                                        <span
                                            className="material-symbols-outlined"
                                            style={{ fontVariationSettings: "'FILL' 1" }}
                                        >
                                            auto_awesome
                                        </span>
                                    </div>

                                    <span className="text-white font-medium text-sm">
                                        Crafting Interfaces That Feel Premium.
                                    </span>
                                </div>
                            </div>

                            {/* COLUMN 2 */}
                            <div className="lg:col-span-4 flex flex-col gap-8">

                                <h3 className="font-mono text-xs text-[#c1ff72] tracking-[0.25em] flex items-center gap-2 uppercase">
                                    <span className="material-symbols-outlined text-sm">
                                        alternate_email
                                    </span>
                                    Quick Contact
                                </h3>

                                <div className="space-y-4">

                                    {/* Mail */}
                                    <a
                                        href="mailto:apurbochaki11@gmail.com"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/5">
                                            <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-[#c1ff72] transition-colors">
                                                mail
                                            </span>
                                        </div>

                                        <span className="text-gray-400 group-hover:text-[#c1ff72] transition-colors text-sm">
                                            apurbochaki11@gmail.com
                                        </span>
                                    </a>

                                    {/* Phone */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/5">
                                            <span className="material-symbols-outlined text-[18px] text-gray-400">
                                                call
                                            </span>
                                        </div>

                                        <span className="text-gray-400 text-sm">
                                            01874760967
                                        </span>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/5">
                                            <span className="material-symbols-outlined text-[18px] text-gray-400">
                                                location_on
                                            </span>
                                        </div>

                                        <span className="text-gray-400 text-sm">
                                            Naogaon, Rajshahi, Bangladesh
                                        </span>
                                    </div>
                                </div>

                                {/* Resume Button */}
                                <a
                                    href="#"
                                    className="mt-2 flex items-center justify-between p-5 rounded-2xl bg-[#c1ff72] text-black font-bold hover:shadow-[0_0_25px_rgba(193,255,114,0.25)] transition-all duration-300 w-full md:w-[280px]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="material-symbols-outlined"
                                            style={{ fontVariationSettings: "'FILL' 1" }}
                                        >
                                            description
                                        </span>

                                        <span>View Resume</span>
                                    </div>

                                    <span className="material-symbols-outlined">
                                        open_in_new
                                    </span>
                                </a>
                            </div>

                            {/* COLUMN 3 */}
                            <div className="lg:col-span-4 flex flex-col gap-4">

                                <h3 className="font-mono text-xs text-[#c1ff72] tracking-[0.25em] flex items-center gap-2 mb-2 uppercase">
                                    <span className="material-symbols-outlined text-sm">
                                        groups
                                    </span>
                                    Connect With Me
                                </h3>

                                {/* CARD */}
                                <a
                                    href="#"
                                    className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c1ff72]/30 hover:bg-white/[0.05] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 text-[#c1ff72] group-hover:scale-110 transition-transform duration-300">
                                            <span className="material-symbols-outlined">
                                                code
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-medium text-sm">
                                                GitHub Repository
                                            </h4>

                                            <p className="text-xs text-gray-400">
                                                Explore my source code
                                            </p>
                                        </div>
                                    </div>

                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-[#c1ff72] group-hover:translate-x-1 transition-all">
                                        arrow_forward
                                    </span>
                                </a>

                                {/* CARD */}
                                <a
                                    href="#"
                                    className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c1ff72]/30 hover:bg-white/[0.05] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 text-[#c1ff72] group-hover:scale-110 transition-transform duration-300">
                                            <span className="material-symbols-outlined">
                                                work
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-medium text-sm">
                                                LinkedIn Network
                                            </h4>

                                            <p className="text-xs text-gray-400">
                                                Professional connection
                                            </p>
                                        </div>
                                    </div>

                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-[#c1ff72] group-hover:translate-x-1 transition-all">
                                        arrow_forward
                                    </span>
                                </a>

                                {/* CARD */}
                                <a
                                    href="#"
                                    className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c1ff72]/30 hover:bg-white/[0.05] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 text-[#c1ff72] group-hover:scale-110 transition-transform duration-300">
                                            <span className="material-symbols-outlined">
                                                person
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-medium text-sm">
                                                Facebook Profile
                                            </h4>

                                            <p className="text-xs text-gray-400">
                                                Personal updates
                                            </p>
                                        </div>
                                    </div>

                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-[#c1ff72] group-hover:translate-x-1 transition-all">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* FEATURE STRIP */}
                        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 rounded-[1.7rem] bg-black/40 border border-white/10 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10">

                            {/* ITEM */}
                            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.03] transition-colors group">

                                <div className="p-3 rounded-full bg-[#c1ff72]/10 text-[#c1ff72] group-hover:scale-110 transition-transform flex-shrink-0">
                                    <span className="material-symbols-outlined">
                                        devices
                                    </span>
                                </div>

                                <div>
                                    <h5 className="text-white font-medium">
                                        Responsive Design
                                    </h5>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Perfect viewing on any device resolution.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.03] transition-colors group">

                                <div className="p-3 rounded-full bg-[#c1ff72]/10 text-[#c1ff72] group-hover:scale-110 transition-transform flex-shrink-0">
                                    <span className="material-symbols-outlined">
                                        terminal
                                    </span>
                                </div>

                                <div>
                                    <h5 className="text-white font-medium">
                                        Clean Code
                                    </h5>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Maintainable and performant architecture.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM */}
                            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.03] transition-colors group">

                                <div className="p-3 rounded-full bg-[#c1ff72]/10 text-[#c1ff72] group-hover:scale-110 transition-transform flex-shrink-0">
                                    <span className="material-symbols-outlined">
                                        design_services
                                    </span>
                                </div>

                                <div>
                                    <h5 className="text-white font-medium">
                                        Modern UI/UX
                                    </h5>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Immersive aesthetics and smart workflows.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* COPYRIGHT */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-white/10">

                            <div className="text-sm text-gray-400 font-mono">
                                © 2025{' '}
                                <span className="text-[#c1ff72]">
                                    Apurbo Chaki.
                                </span>{' '}
                                All rights reserved.
                            </div>

                            <div className="text-sm text-gray-500 italic">
                                Design. Develop. Deliver.
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-400">
                                    Built with passion
                                </span>

                                <span
                                    className="material-symbols-outlined text-[#c1ff72] text-[16px]"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    favorite
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
