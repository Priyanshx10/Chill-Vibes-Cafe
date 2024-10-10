'use client'

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            Chill Vibes Cafe
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/menu" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Menu</Link>
            <Link href="/events" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Events</Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Contact</Link>
          </nav>
          <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <nav className="flex flex-col space-y-4 items-center">
              <Link href="/menu" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Menu</Link>
              <Link href="/events" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Events</Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4">Chill Vibes Cafe</h2>
              <p className="text-lg">123 Serenity Lane, Tranquil Town, TQ 54321</p>
              <p className="text-lg mt-2">Open daily: 7AM - 10PM</p>
            </div>
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <Link href="/menu" className="hover:underline transition-all text-lg">Menu</Link>
              <Link href="/events" className="hover:underline transition-all text-lg">Events</Link>
              <Link href="/about" className="hover:underline transition-all text-lg">About</Link>
              <Link href="/contact" className="hover:underline transition-all text-lg">Contact</Link>
            </nav>
          </div>
          <div className="mt-12 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Chill Vibes Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}