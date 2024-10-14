'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Facebook, Twitter } from "lucide-react"

const teamMembers = [
  { name: "Emma Serenity", role: "Founder & Head Barista", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80", bio: "Emma's passion for creating the perfect brew and fostering a welcoming community led her to found Chill Vibes Cafe." },
  { name: "Liam Harmony", role: "Chef", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80", bio: "With a background in farm-to-table cuisine, Liam crafts our menu using locally-sourced, organic ingredients." },
  { name: "Zoe Tranquility", role: "Events Coordinator", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80", bio: "Zoe's expertise in music and art curation helps create our vibrant lineup of events and community gatherings." },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <header className="sticky top-0 z-50 w-full border-b bg-stone-50/90 backdrop-blur supports-[backdrop-filter]:bg-stone-50/60">
        <div className="container flex h-20 items-center">
          <Link href="/" className="flex items-center space-x-6 ml-6">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.svg"
                alt="Chill Vibes Cafe Logo"
                layout="fill"
                className="text-stone-800"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium text-stone-800">Chill Vibes</span>
              <span className="text-sm text-stone-600">Cafe & Roastery</span>
            </div>
          </Link>
          <nav className="ml-auto flex gap-6">
            <Link href="/menu" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Menu</Link>
            <Link href="/about" className="text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">About</Link>
            <Link href="/events" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Events</Link>
            <Link href="/contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl text-center mb-12 text-stone-800">About Chill Vibes Cafe</h1>
          <div className="mb-16">
            <h2 className="font-serif text-3xl mb-6 text-stone-800">Our Story</h2>
            <p className="text-lg mb-4 leading-relaxed text-stone-600">
              Chill Vibes Cafe was born from a dream to create more than just a coffee shop. Founded in 2020, we set out to build a sanctuary where people could come together, enjoy exceptional coffee, and feel truly at home. In the heart of Tranquil Town, we've quickly become a beloved part of the community, offering not just delicious beverages and food, but a warm, welcoming atmosphere for work, study, or simply unwinding.
            </p>
            <p className="text-lg mb-4 leading-relaxed text-stone-600">
              Our mission is to provide a cozy haven where everyone feels welcome, creativity flourishes, and connections are made over the perfect cup of coffee. We're deeply committed to sustainability, supporting local artists and musicians, and being an active, positive force in our vibrant community. At Chill Vibes Cafe, we believe that great coffee has the power to inspire, comfort, and bring people together.
            </p>
          </div>
          <h2 className="font-serif text-3xl mb-8 text-stone-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image src={member.image} alt={member.name} width={300} height={300} className="rounded-full mx-auto mb-4" />
                  <CardTitle className="text-center font-serif text-xl text-stone-800">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-amber-600 mb-2">{member.role}</p>
                  <p className="text-center text-stone-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-stone-800 text-stone-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-2xl mb-2 text-white">Chill Vibes Cafe</h3>
              <p className="text-sm">Elevating your coffee experience, one cup at a time.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 Chill Vibes Cafe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}