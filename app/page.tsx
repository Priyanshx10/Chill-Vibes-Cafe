import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Coffee, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Homepage() {
  return (
    <Layout>
      <section className="relative h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Chill Vibes Cafe interior"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Welcome to<br />Chill Vibes Cafe
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
            Your cozy corner for exceptional coffee, delectable treats, and a serene atmosphere.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-colors text-lg px-8 py-3">
            <Link href="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">Why Choose Chill Vibes Cafe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Coffee className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Artisanal Coffee</h3>
                <p className="text-lg text-gray-600">Savor our expertly crafted beverages, made with locally roasted, ethically sourced beans.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Calendar className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Vibrant Events</h3>
                <p className="text-lg text-gray-600">Immerse yourself in our community with live music, art shows, and engaging workshops.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-8">
                <MapPin className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Tranquil Ambiance</h3>
                <p className="text-lg text-gray-600">Experience our warm, inviting space perfect for work, study, or catching up with friends.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}