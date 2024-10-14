"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Coffee, Clock, MapPin, Instagram, Facebook, Twitter, Cake, Star } from "lucide-react"
import { useState, useEffect } from "react"

const heroImages = [
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
]

const featured_dishes = [
  {
    name: "Savory Cabbage Soup",
    description: "Delicious savoy cabbage soup with smoked paprika and roasted tomatoes.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Chocolate Fondant",
    description: "Rich chocolate fondant with a molten center, served with a scoop of vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Gourmet Burger",
    description: "Juicy gourmet beef burger topped with cheddar cheese, leafy greens, and special sauce, served with fries.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
  }
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

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
            <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">About</Link>
            <Link href="/events" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Events</Link>
            <Link href="/contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[70vh] overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Chill Vibes Cafe ambiance ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white p-4 max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Welcome to Chill Vibes Cafe
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Experience the perfect blend of artisanal coffee and serene ambiance
            </p>
            <Button asChild size="lg" className="bg-stone-800 hover:bg-stone-700 text-white transition-colors text-sm px-6 py-3">
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-center mb-12 text-stone-800">Featured Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featured_dishes.map((dish, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-2 text-stone-800">{dish.name}</h3>
                    <p className="text-stone-600 mb-4">{dish.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-stone-700">${(Math.random() * (20 - 8) + 8).toFixed(2)}</span>
                      <Button variant="outline" className="hover:bg-stone-100">
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-center mb-12 text-stone-800">Today's Specials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6 flex items-center">
                  <div className="mr-4">
                    <Coffee className="h-12 w-12 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-stone-800">Pumpkin Spice Latte</h3>
                    <p className="text-stone-600 mb-2">Seasonal favorite with real pumpkin and aromatic spices</p>
                    <span className="text-lg font-semibold text-amber-600">$4.99</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex items-center">
                  <div className="mr-4">
                    <Cake className="h-12 w-12 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-stone-800">Apple Cinnamon Muffin</h3>
                    <p className="text-stone-600 mb-2">Freshly baked with local apples and a crunchy streusel topping</p>
                    <span className="text-lg font-semibold text-amber-600">$3.50</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-center mb-12 text-stone-800">Why Choose Chill Vibes Cafe?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Coffee className="h-12 w-12 text-stone-700 mb-4" />
                  <h3 className="font-serif text-xl mb-2 text-stone-800">Artisanal Coffee</h3>
                  <p className="text-stone-600">Expertly roasted beans and crafted beverages for the perfect cup every time.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-stone-700 mb-4" />
                  <h3 className="font-serif text-xl mb-2 text-stone-800">Relaxed Atmosphere</h3>
                  <p className="text-stone-600">A cozy space to unwind, work, or catch up with friends.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MapPin className="h-12 w-12 text-stone-700 mb-4" />
                  <h3 className="font-serif text-xl mb-2 text-stone-800">Prime Location</h3>
                  <p className="text-stone-600">Conveniently situated in the heart of the city for easy access.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-stone-800 hover:bg-stone-700 text-white transition-colors">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-center mb-12 text-stone-800">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah L.", quote: "The best coffee in town! Love the cozy atmosphere.", rating: 5 },
                { name: "Mike R.", quote: "Great place to work remotely. Fast Wi-Fi and delicious pastries.", rating: 4 },
                { name: "Emily T.", quote: "Their latte art is Instagram-worthy! Friendly staff too.", rating: 5 },
              ].map((review, index) => (
                <Card key={index} className="bg-stone-50">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="inline-block h-5 w-5 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-stone-600 mb-4 italic">"{review.quote}"</p>
                    <p className="font-semibold text-stone-800">- {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl mb-6">Stay Connected</h2>
            <p className="mb-8 max-w-2xl mx-auto">Sign up for our newsletter to receive updates on events, new menu items, and exclusive offers.</p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-white text-stone-800" />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white transition-colors">Subscribe</Button>
            </form>
          </div>
        </section>
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