"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SideNavigation from "@/components/SideNavigation";
import AboutMeNew from "@/components/AboutMeNew";
import MyProjects from "@/components/MyProjects";
import TechStacks from "@/components/TechStacks";
import MyEducation from "@/components/MyEducation";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Micro-interaction for mouse following glow inside the About Section
    const handleMouseMove = (e) => {
      const glow = document.querySelector(".neon-glow-bg");
      if (glow) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
        glow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Simple Dynamic Fade-in Scroll Observer for all sections and fade-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll("section, .animate-fade-in");
    animatedElements.forEach((el) => {
      el.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-12");
      observer.observe(el);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full min-h-screen">
        <HeroSection />
        <AboutMeNew />
        <MyProjects />
        <TechStacks />
        <MyEducation />
        <LetsConnect />
      </main>
      <SideNavigation />
      <Footer />
    </>
  );
}
