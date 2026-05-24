'use client'

import { useEffect } from 'react'
import { Download, ArrowRight, Play, Users, Briefcase, Rocket } from 'lucide-react'

const stats = [
    {
        icon: <Users size={20} />,
        value: '3.5K+',
        label: 'Happy Clients',
    },
    {
        icon: <Briefcase size={20} />,
        value: '10+',
        label: 'Years Expertise',
    },
    {
        icon: <Rocket size={20} />,
        value: '600+',
        label: 'Projects',
    },
]

const AboutMeOld = () => {

    useEffect(() => {
        const container = document.getElementById('particle-container')

        if (!container) return

        container.innerHTML = ''

        const particleCount = 15

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')

            particle.className =
                'absolute rounded-full bg-[#c1ff72]/20 blur-xl'

            const size = Math.random() * 200 + 100

            particle.style.width = `${size}px`
            particle.style.height = `${size}px`

            particle.style.left = `${Math.random() * 100}%`
            particle.style.top = `${Math.random() * 100}%`

            particle.animate(
                [
                    {
                        transform: 'translate(0,0) scale(1)',
                    },
                    {
                        transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.1)`,
                    },
                    {
                        transform: 'translate(0,0) scale(1)',
                    },
                ],
                {
                    duration: Math.random() * 5000 + 5000,
                    iterations: Infinity,
                    easing: 'ease-in-out',
                }
            )

            container.appendChild(particle)
        }

        const cards = document.querySelectorAll('.glass-card')

        cards.forEach((card) => {
            card.addEventListener('mousemove', handleMouseMove)
            card.addEventListener('mouseleave', handleMouseLeave)
        })

        function handleMouseMove(e) {
            const card = e.currentTarget
            const rect = card.getBoundingClientRect()

            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = (y - centerY) / 20
            const rotateY = (centerX - x) / 20

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
            `
        }

        function handleMouseLeave(e) {
            const card = e.currentTarget

            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
            `
        }

        return () => {
            cards.forEach((card) => {
                card.removeEventListener('mousemove', handleMouseMove)
                card.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <section className='relative overflow-hidden bg-[#0e0e0e] text-[#e5e2e1] py-20 px-5 md:px-20'>

            {/* Background Particles */}
            <div
                id='particle-container'
                className='pointer-events-none absolute inset-0 opacity-20'
            />

            <div className='mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 relative z-10'>

                {/* Left Content */}
                <div className='order-2 flex flex-col items-start space-y-10 lg:col-span-7 lg:order-1'>

                    {/* Heading */}
                    <div className='space-y-4'>
                        <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm'>
                            <span className='h-2 w-2 animate-pulse rounded-full bg-[#c1ff72] shadow-[0_0_8px_#c1ff72]' />
                            <span className='font-mono text-sm tracking-[0.2em] text-[#c2c9b3]'>
                                WHO I AM
                            </span>
                        </div>

                        <div className='relative'>
                            <h1 className='text-5xl font-bold leading-tight tracking-[-0.04em] md:text-6xl lg:text-[80px]'>
                                About{' '}
                                <span className='text-[#c1ff72]'>
                                    Me
                                </span>
                            </h1>

                            <div className='mt-1 h-[2px] w-[120px] bg-gradient-to-r from-[#c1ff72] to-transparent' />
                        </div>
                    </div>

                    {/* Description */}
                    <div className='space-y-8'>

                        <div className='space-y-6'>

                            <div className='flex items-center gap-2'>
                                <span className='h-2 w-2 rounded-full bg-[#c1ff72]' />

                                <p className='font-mono text-sm tracking-wide text-[#c1ff72]'>
                                    Let's Connect And Create Together
                                </p>
                            </div>

                            <div className='space-y-4 text-lg leading-[1.8] text-[#c2c9b3]'>

                                <p>
                                    I&apos;m Fin Harper, a UI/UX designer with over{' '}
                                    <span className='font-medium text-[#c1ff72]'>
                                        15 years
                                    </span>{' '}
                                    of experience turning ideas into engaging digital experiences.
                                    I&apos;ve partnered with agencies, startups, and visionary individuals
                                    to design solutions where{' '}
                                    <span className='font-medium text-[#c1ff72]'>
                                        creativity meets usability
                                    </span>.
                                </p>

                                <p>
                                    Every project is an opportunity to create something meaningful,
                                    and I thrive on bringing{' '}
                                    <span className='font-medium text-[#c1ff72]'>
                                        clarity and impact
                                    </span>{' '}
                                    to every digital interaction.
                                </p>

                            </div>

                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3'>

                            {
                                stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className='glass-card group rounded-3xl border border-white/5 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#c1ff72]/20 hover:bg-white/[0.08]'
                                    >

                                        <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c1ff72] transition-colors group-hover:border-[#c1ff72]/30'>
                                            {stat.icon}
                                        </div>

                                        <div className='space-y-1'>
                                            <h3 className='text-3xl font-bold text-white transition-colors group-hover:text-[#c1ff72]'>
                                                {stat.value}
                                            </h3>

                                            <p className='font-mono text-[10px] uppercase tracking-[0.25em] text-[#656464]'>
                                                {stat.label}
                                            </p>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className='flex flex-wrap gap-4 pt-4'>

                        <button className='flex items-center gap-3 rounded-xl bg-[#c1ff72] px-8 py-4 font-bold text-black shadow-[0_0_24px_rgba(193,255,114,0.2)] transition-all duration-300 hover:scale-105 active:scale-95'>
                            <Download size={20} />
                            <span>DOWNLOAD CV</span>
                        </button>

                        <button className='group rounded-xl border border-white/20 p-4 transition-all duration-300 hover:border-[#c1ff72]'>
                            <ArrowRight className='text-white transition-colors group-hover:text-[#c1ff72]' />
                        </button>

                    </div>

                </div>

                {/* Right Image */}
                <div className='order-1 relative flex justify-center lg:col-span-5 lg:order-2 lg:justify-end'>

                    <div className='pointer-events-none absolute inset-0 scale-75 rounded-full bg-[#c1ff72]/5 blur-[120px]' />

                    <div className='glass-card group relative aspect-[0.75/1] w-full max-w-[480px] overflow-hidden rounded-3xl border border-[#c1ff72]/20 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c1ff72]/40'>

                        <img
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuAfrFh8mxH_bh2R1wJ6zCAGp6-JmRVRXo5cG-bz1RYeaCp5pO_kq0OI4HC63KnI44IYbOF_0UAFNE39kpqrW9ZOU-KD9G2JnpqEMrzSbI7Qz3BMjatHbd0tvzhQedmq6Rd9CNgGVPxm2H6JOJ1r9Y9Z_hpRNKxjnVO-pbJqP1EXbzM1Yb3YAl-_xSWCmjgk1C-UYhzNredgmPGeGDNkjaSlPiyJ33wJsiHeuCsPa4l8TrqSYhCKRh0H0idbdZY-xraBZLezsrutEIl6'
                            alt='Fin Harper'
                            className='h-full w-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0'
                        />

                        {/* Overlay */}
                        <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-8 backdrop-blur-sm'>

                            <div className='flex items-end justify-between'>

                                <div className='space-y-1'>
                                    <p className='font-mono text-sm tracking-widest text-[#c1ff72]'>
                                        SENIOR DESIGNER
                                    </p>

                                    <h3 className='text-2xl font-semibold text-white'>
                                        Fin Harper
                                    </h3>
                                </div>

                                <button className='group/btn flex h-12 w-12 items-center justify-center rounded-full border border-[#c1ff72]/30 bg-[#c1ff72]/10 transition-all duration-300 hover:bg-[#c1ff72]'>
                                    <Play className='text-[#c1ff72] transition-colors group-hover/btn:text-black' />
                                </button>

                            </div>

                        </div>

                        <div className='pointer-events-none absolute inset-0 rounded-3xl border border-white/5' />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutMeOld