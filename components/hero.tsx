"use client";

import Image from "next/image";
import { Search, MapPin } from "lucide-react";

import globe from "@/app/images/globe.png";

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#010103] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#5c53fe]/30 blur-[140px]" />
        <div className="absolute top-20 right-[-10%] h-[600px] w-[600px] rounded-full bg-[#5c53fe]/20 blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute right-[-200px] top-[-100px] hidden opacity-40 md:block">
        <Image
          src={globe}
          alt=""
          width={1440}
          height={1882}
          priority
          className="h-[900px] w-auto"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-24 pb-20">
        <div
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5c53fe]">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-sm font-medium text-white/90">50,000+ new jobs this month</span>
        </div>

        <h1
          className="max-w-[784px] text-center text-5xl font-bold leading-tight tracking-tight md:text-[56px]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Find Your Dream Job Today
        </h1>

        <p
          className="mt-5 max-w-[784px] text-center text-lg text-white/80 md:text-xl"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        <form className="mt-10 flex w-full max-w-[784px] flex-col gap-2 overflow-hidden rounded-2xl bg-[#101010] p-2 md:flex-row md:items-stretch md:gap-0">
          <div className="flex flex-1 items-center gap-3 px-4 py-2 md:py-0">
            <Search className="h-5 w-5 shrink-0 text-white/50" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-base text-white placeholder:text-white/40 outline-none"
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>
          <div className="hidden w-px bg-white/10 md:block" />
          <div className="flex flex-1 items-center gap-3 px-4 py-2 md:py-0">
            <MapPin className="h-5 w-5 shrink-0 text-white/50" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-base text-white placeholder:text-white/40 outline-none"
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5c53fe] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#4b44e8] md:w-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span
            className="text-sm text-white/60"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Trending Position
          </span>
          {trending.map((t) => (
            <button
              key={t}
              type="button"
              className="rounded-full bg-[#1a1a1b] px-4 py-1.5 text-sm text-white/90 transition-colors hover:bg-[#2a2a2b]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
