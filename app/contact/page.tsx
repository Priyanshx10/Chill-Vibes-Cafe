"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
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
            <Link href="/events" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Events</Link>
            <Link href="/contact" className="text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl text-center mb-12 text-stone-800">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-stone-800">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
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
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-stone-700">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" {...field} className="bg-stone-100 border-stone-300" />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="bg-stone-800 hover:bg-stone-700 text-white transition-colors">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-stone-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <p className="text-stone-600">123 Serenity Lane, Tranquil Town, TQ 54321</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <p className="text-stone-600">hello@chillvibescafe.com</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16">
            <h2 className="font-serif text-2xl mb-6 text-stone-800">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634994897!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635186714513!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              ></iframe>
            </div>
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