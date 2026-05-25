'use client'

import { useEffect } from 'react'
import { Download, ArrowRight, Play, Users, Briefcase, Rocket } from 'lucide-react'

const stats = [
    {
        icon: <Users size={20} />,
        value: '15+',
        label: 'Completed UI Sections',
    },
    {
        icon: <Briefcase size={20} />,
        value: '20+',
        label: 'Responsive Web Projects',
    },
    {
        icon: <Rocket size={20} />,
        value: '100%',
        label: 'Focus on Clean User Experience',
    },
]

const AboutMeNew = () => {

    useEffect(() => {
        // Atmospheric mouse glow effect
        const handleMouseMoveBlob = (e) => {
            const blobs = document.querySelectorAll('.glow-blob-about')
            const x = e.clientX
            const y = e.clientY

            blobs.forEach((blob, index) => {
                const speed = (index + 1) * 0.02
                const shiftX = (x - window.innerWidth / 2) * speed
                const shiftY = (y - window.innerHeight / 2) * speed
                blob.style.transform = `translate(${shiftX}px, ${shiftY}px)`
            })
        }

        window.addEventListener('mousemove', handleMouseMoveBlob)

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
            window.removeEventListener('mousemove', handleMouseMoveBlob)
            cards.forEach((card) => {
                card.removeEventListener('mousemove', handleMouseMove)
                card.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <section className='relative overflow-hidden bg-[#0e0e0e] text-[#e5e2e1] py-24 lg:py-32 px-5 md:px-20 w-full'>
            <div className="noise-overlay"></div>

            {/* Background Blobs */}
            <div className="glow-blob-about -top-48 -left-48"></div>
            <div className="glow-blob-about -bottom-48 -right-48"></div>

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

                                {/*       */}

                                <p>
                                    I&apos;m a frontend web developer focused on building{' '}
                                    <span className='font-medium text-[#c1ff72]'>
                                        modern, responsive <span className='text-[#c2c9b3]'>and</span> user-friendly
                                    </span>{' '}
                                    digital experiences. I combine clean design with functional development to create websites that not only{' '}
                                    <span className='font-medium text-[#c1ff72]'>
                                        look professional
                                    </span>
                                     but also feel <span className='font-medium text-[#c1ff72]'>smooth, fast,</span> and intuitive for users.
                                    
                                </p>

                                {/* <p>
                                    Every project is an opportunity to create something meaningful,
                                    and I thrive on bringing{' '}
                                    <span className='font-medium text-[#c1ff72]'>
                                        clarity and impact
                                    </span>{' '}
                                    to every digital interaction.
                                </p> */}

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
                            src='https://i.ibb.co.com/pvvybtGW/Apurbo-Chaki.png'
                            alt='Apurbo Chaki'
                            className='h-full w-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0'
                        />

                        {/* Overlay */}
                        <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-8 backdrop-blur-sm'>

                            <div className='flex items-end justify-between'>

                                <div className='space-y-1'>
                                    <p className='font-mono text-sm tracking-widest text-[#c1ff72]'>
                                        FONTEND WEB DEVELOPER
                                    </p>

                                    <h3 className='text-2xl font-semibold text-white'>
                                        Apurbo Chaki
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

export default AboutMeNew