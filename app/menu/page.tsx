'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coffee, Clock, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { useState } from "react"

const menuItems = {
  drinks: [
    { name: "Serenity Blend", price: "$4.50", description: "Our signature blend, smooth with notes of chocolate and caramel", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80" },
    { name: "Zen Cappuccino", price: "$5.25", description: "Espresso topped with velvety steamed milk and a touch of cinnamon", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80" },
    { name: "Chilled Harmony Latte", price: "$5.75", description: "Cold brew coffee with your choice of milk over ice, sweetened with lavender syrup", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
  ],
  food: [
    { name: "Mindful Avocado Toast", price: "$9.50", description: "Smashed avocado on artisan sourdough with cherry tomatoes and microgreens", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
    { name: "Tranquil Turkey Panini", price: "$11.75", description: "Roasted turkey with pesto, fresh mozzarella, and sun-dried tomatoes on ciabatta", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
    { name: "Zen Garden Bowl", price: "$13.50", description: "Quinoa, roasted seasonal vegetables, avocado, and tahini dressing", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
  ],
}

export default function MenuPage() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

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
            <Link href="/menu" className="text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">Menu</Link>
            <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">About</Link>
            <Link href="/events" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Events</Link>
            <Link href="/contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl text-center mb-12 text-stone-800">Our Menu</h1>
          <Tabs defaultValue="drinks" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="drinks" className="text-lg">Drinks</TabsTrigger>
              <TabsTrigger value="food" className="text-lg">Food</TabsTrigger>
            </TabsList>
            <TabsContent value="drinks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.drinks.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Image src={item.image} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className="text-amber-600">{item.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stone-600 mb-4">{item.description}</p>
                      <Button onClick={() => addToCart(item)} className="w-full bg-stone-800 hover:bg-stone-700 text-white transition-colors">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="food">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.food.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Image src={item.image} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className="text-amber-600">{item.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stone-600 mb-4">{item.description}</p>
                      <Button onClick={() => addToCart(item)} className="w-full bg-stone-800 hover:bg-stone-700 text-white transition-colors">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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