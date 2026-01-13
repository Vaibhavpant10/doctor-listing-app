"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold text-base tracking-tight hover:opacity-90">
              Doctor Listing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground/80 hover:text-foreground">Home</Link>
            <Link href="/doctors" className="text-sm text-foreground/80 hover:text-foreground">Doctors</Link>
            <Link href="/about" className="text-sm text-foreground/80 hover:text-foreground">About</Link>
            <Link href="/contact" className="text-sm text-foreground/80 hover:text-foreground">Contact</Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/login" className="hidden sm:inline-flex h-9 items-center rounded-md border border-foreground/20 px-3 text-sm hover:bg-foreground/5">
              Sign in
            </Link>
            <Link href="/signup" className="inline-flex h-9 items-center rounded-md bg-foreground px-3 text-sm text-background hover:bg-foreground/90">
              Get started
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/20 hover:bg-foreground/5 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link href="/" className="rounded-md px-2 py-2 text-sm hover:bg-foreground/5">Home</Link>
              <Link href="/doctors" className="rounded-md px-2 py-2 text-sm hover:bg-foreground/5">Doctors</Link>
              <Link href="/about" className="rounded-md px-2 py-2 text-sm hover:bg-foreground/5">About</Link>
              <Link href="/contact" className="rounded-md px-2 py-2 text-sm hover:bg-foreground/5">Contact</Link>
              <div className="mt-2 flex items-center gap-2">
                <Link href="/login" className="flex-1 rounded-md border border-foreground/20 px-3 py-2 text-sm text-center hover:bg-foreground/5">Sign in</Link>
                <Link href="/signup" className="flex-1 rounded-md bg-foreground px-3 py-2 text-sm text-background text-center hover:bg-foreground/90">Get started</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}