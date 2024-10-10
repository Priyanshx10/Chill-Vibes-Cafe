import Layout from '../../components/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  { name: "Emma Serenity", role: "Founder & Head Barista", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80", bio: "Emma's passion for creating the perfect brew and fostering a welcoming community led her to found Chill Vibes Cafe." },
  { name: "Liam Harmony", role: "Chef", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80", bio: "With a background in farm-to-table cuisine, Liam crafts our menu using locally-sourced, organic ingredients." },
  { name: "Zoe Tranquility", role: "Events Coordinator", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80", bio: "Zoe's expertise in music and art curation helps create our vibrant lineup of events and community gatherings." },
]

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Chill Vibes Cafe</h1>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Chill Vibes Cafe was born from a dream to create more than just a coffee shop. Founded in 2020, we set out to build a sanctuary where people could come together, enjoy exceptional coffee, and feel truly at home. In the heart of Tranquil Town, we&lsquo;ve quickly become a beloved part of the community, offering not just delicious beverages and food, but a warm, welcoming atmosphere for work, study, or simply unwinding.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Our mission is to provide a cozy haven where everyone feels welcome, creativity flourishes, and connections are made over the perfect cup of coffee. We&#39;re deeply committed to sustainability, supporting local artists and musicians, and being an active, positive force in our vibrant community. At Chill Vibes Cafe, we believe that great coffee has the power to inspire, comfort, and bring people together.
          </p>
        </div>
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image src={member.image} alt={member.name} width={300} height={300} className="rounded-full mx-auto mb-4" />
                <CardTitle className="text-center">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-2">{member.role}</p>
                <p className="text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}