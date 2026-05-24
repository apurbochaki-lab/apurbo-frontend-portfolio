"use client";

import { useState, useEffect } from "react";

export default function HeroOld() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState("09:41");
    const [date, setDate] = useState("Thu, Jun 26");

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );
            setDate(
                now.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen pt-32 flex flex-col justify-center relative hero-bg-gradient overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Profile Card Left Column */}
                    <div className="lg:col-span-5 animate-fade-in-up animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        <div className="relative group" data-purpose="profile-card-container">
                            {/* Profile Card */}
                            <div className="relative z-10 bg-[#141414] rounded-[2.5rem] p-6 profile-card-glow overflow-hidden">
                                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mb-8">
                                    <img
                                        alt="Alexander Isak Portrait"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYL7NDzj4DOPKxjunzF9WLh7GtJBXdQABzutGGl7i4uZFrmIm-pSvJTqoFyYhA66VezWAYrZW8kfanpCwnrOCW73GoGJU0nRar4vASh2FmfHX2yxUnKa0kKQDLffwHxwx6VuKhRdoIfZmiPvBWdY4oKNPISW82uCHN86GvlX5OenAOsjZQMQFvnTwQ-xAo47mYmpI-TL2cyhOoNY4LDOOw7TrdhMHJ9vyWa8TsYGN7IIqe80rqkU2FhSvtI2W_UJ5lTb-viLfwTY0F"
                                    />
                                    {/* Overlay Elements */}
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    {/* Floating Social Icons */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-3">
                                        <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-brand hover:text-dark transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </div>
                                        <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-brand hover:text-dark transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Vertical Tag */}
                                    <div className="absolute bottom-1/2 left-0 -translate-x-[40%] translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-brand/10 backdrop-blur-sm border border-brand/20 rounded-full">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
                                            <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
                                                Available for Work
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Hey, I'm Isak</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        I help startups grow with smart design and no-code development based in Cupertino, CA.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 pt-4">
                                        <button className="flex items-center gap-2 bg-brand text-dark px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-pointer">
                                            <div className="w-5 h-5 bg-dark text-brand rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="3"
                                                    />
                                                </svg>
                                            </div>
                                            Let's talk
                                        </button>
                                        <button className="flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/5 transition-colors cursor-pointer">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                            Download CV
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Right Column */}
                    <div className="lg:col-span-7 relative animate-fade-in-up animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        {/* Background Ribbon Image */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-40 mix-blend-screen pointer-events-none">
                            <img
                                alt="Futuristic Wave"
                                className="w-full h-full object-contain"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKW5yBCnJiPjhLH87iqMk50EhXThjbDDnEqgbaDMY6Gr-eEOwxJmhyP1gG6WUH_qASw33mmRAqu2qbKKusPnDvivqpHGq1Q93nopL6VS3UYkfNoXh9TrzEa-Ctp77AqEew1TnHxcb3vmxRe7HQPSPJYknLM3YiCe2jjH8p-TMkJuD1BA33udIv9_jN3rZTqoNifeQnay1hPe_Lp2oylnGE5EF3kXrE24bnLWW-MVPdlpyWSKvCfdm7zye6w27ZCEH_L8hJ45029fNM"
                            />
                        </div>
                        {/* Top Status Bar */}
                        <div className="flex justify-between items-start mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                    <img
                                        alt="Alexander Isak"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYL7NDzj4DOPKxjunzF9WLh7GtJBXdQABzutGGl7i4uZFrmIm-pSvJTqoFyYhA66VezWAYrZW8kfanpCwnrOCW73GoGJU0nRar4vASh2FmfHX2yxUnKa0kKQDLffwHxwx6VuKhRdoIfZmiPvBWdY4oKNPISW82uCHN86GvlX5OenAOsjZQMQFvnTwQ-xAo47mYmpI-TL2cyhOoNY4LDOOw7TrdhMHJ9vyWa8TsYGN7IIqe80rqkU2FhSvtI2W_UJ5lTb-viLfwTY0F"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Alexander Isak</p>
                                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold">
                                        UI Designer &amp; No-Code Developer
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-zinc-500">{date}</p>
                                <p className="text-lg font-bold text-white leading-none">{time}</p>
                            </div>
                        </div>
                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-12" data-purpose="hero-headline">
                            I'm building{" "}
                            <span className="px-4 py-1 bg-brand text-dark rounded-full inline-block">websites</span>
                            <br />
                            <span className="inline-block px-4 py-1 border-2 border-brand text-brand rounded-full mt-2">
                                &amp; brands
                            </span>{" "}
                            that people remember
                        </h1>
                        {/* Floating Badge */}
                        <div className="relative h-20 mb-16">
                            <div className="absolute right-20 top-0 w-32 h-32 flex items-center justify-center">
                                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                                    <svg
                                        className="w-full h-full fill-white/20 text-[10px] uppercase tracking-widest font-bold"
                                        viewBox="0 0 100 100"
                                    >
                                        <path
                                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                            fill="transparent"
                                            id="circlePath"
                                        />
                                        <text>
                                            <textPath href="#circlePath">AWARD WINNING AGENCY - SINCE 2022 - </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="w-16 h-16 bg-brand/20 backdrop-blur-xl rounded-full border border-brand/30 flex items-center justify-center">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="w-8 h-1 bg-brand rounded-full"></div>
                                        <div className="w-10 h-1 bg-brand/60 rounded-full"></div>
                                        <div className="w-8 h-1 bg-brand/40 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                            <div>
                                <p className="text-4xl font-bold mb-1">10+</p>
                                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Years of experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold mb-1">6x</p>
                                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Industry Awards</p>
                            </div>
                        </div>
                        {/* Client Section */}
                        <div className="mt-16 border-t border-white/5 pt-8">
                            <div className="flex items-center gap-2 mb-6 text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                                Our clients (2015-25©)
                            </div>
                            <div className="flex flex-wrap items-center gap-12 opacity-40 hover:opacity-70 transition-opacity duration-500">
                                <span className="text-lg font-black tracking-tighter italic">Logoipsum</span>
                                <div className="flex items-center gap-2 font-black italic">
                                    <div className="w-4 h-4 bg-white rounded-sm"></div> Logoipsum
                                </div>
                                <span className="text-lg font-bold tracking-widest">LOGOIPSUM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
