"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/companies", label: "Company" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-6 flex max-w-[1320px] items-center justify-between gap-4 rounded-2xl bg-[#222222] px-6 py-2">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="HireLoop"
            width={154}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[16px] font-normal text-white/95 transition-colors hover:text-white/70"
                  style={{ letterSpacing: "-0.2px", fontFamily: "var(--font-sans)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="h-6 w-px bg-white/25" aria-hidden />

          <div className="flex items-center gap-3">
            <Button
              render={<Link href="/signin" />}
              nativeButton={false}
              className="h-[52px] rounded-xl border border-black/10 bg-white px-6 text-[18px] font-semibold text-[#5c53fe] shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-white/90"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Sign In
            </Button>
            <Button
              render={<Link href="/signup" />}
              nativeButton={false}
              className="h-[52px] rounded-xl border border-black/10 bg-[#5c53fe] px-6 text-[18px] font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-[#4b44e8]"
              style={{ fontFamily: "var(--font-instrument)" }}
            >
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </Button>
              }
            />
            <SheetContent
              side="right"
              className="w-72 border-white/10 bg-[#222222] text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-[16px] text-white/90 transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-white/15" />
                <Button
                  render={<Link href="/signin" />}
                  nativeButton={false}
                  className="h-12 w-full rounded-xl border border-black/10 bg-white text-[18px] font-semibold text-[#5c53fe]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Sign In
                </Button>
                <Button
                  render={<Link href="/signup" />}
                  nativeButton={false}
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#5c53fe] text-[18px] font-medium text-white"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
