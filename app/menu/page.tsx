import Layout from '../../components/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

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
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
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
                      <span className="text-blue-600">{item.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
                      <span className="text-blue-600">{item.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}