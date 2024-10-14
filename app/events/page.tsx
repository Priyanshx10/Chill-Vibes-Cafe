"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Instagram, Facebook, Twitter } from "lucide-react"

const events = [
  { id: 1, title: "Acoustic Sunset Sessions", date: new Date(2024, 9, 15, 19, 0), description: "Enjoy soulful acoustic performances as the sun sets", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
  { id: 2, title: "Mindful Poetry Evening", date: new Date(2024, 9, 22, 18, 30), description: "Local poets share their latest works in a serene atmosphere", image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
  { id: 3, title: "Latte Art Masterclass", date: new Date(2024, 9, 29, 14, 0), description: "Learn to create stunning latte art designs from our expert baristas", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80" },
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export default function EventsPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
    // Here you would typically send this data to your backend
  }

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
            <Link href="/events" className="text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">Events</Link>
            <Link href="/contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl text-center mb-12 text-stone-800">Upcoming Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <Image src={event.image} alt={event.title} width={400} height={300} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-stone-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-600 mb-2">{format(event.date, "MMMM d, yyyy 'at' h:mm a")}</p>
                  <p className="text-stone-600">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-stone-800 hover:bg-stone-700 text-white transition-colors">RSVP</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-xl text-stone-800">RSVP for {event.title}</DialogTitle>
                        <DialogDescription className="text-stone-600">Enter your details to reserve your spot.</DialogDescription>
                      </DialogHeader>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-stone-700">Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} className="bg-stone-100 border-stone-300" />
                                </FormControl>
                                <FormMessage className="text-red-600" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-stone-700">Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your email" {...field} className="bg-stone-100 border-stone-300" />
                                </FormControl>
                                <FormMessage className="text-red-600" />
                              </FormItem>
                            )}
                          />
                          <DialogFooter>
                            <Button type="submit" className="bg-stone-800 hover:bg-stone-700 text-white transition-colors">Submit RSVP</Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
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