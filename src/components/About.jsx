
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Aboutus() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Our Company</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are a dedicated team committed to simplifying grocery shopping with innovative solutions that prioritize convenience and quality.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              alt="About Us"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to Grosco, where convenience meets quality right at your doorstep. Founded in December 2023,
                our journey began with a simple yet powerful idea: to transform the way people experience grocery shopping.
              </p>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                It all started with a shared frustration—endless queues, crowded aisles, and wasted time. Determined to make a difference,
                our founders set out to create a service that would not only save time but also enhance the overall shopping experience.
              </p>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Since our humble beginnings, we have grown rapidly, expanding our range of products and perfecting our delivery services.
                Through continuous innovation and listening to our customers' feedback, we have developed a platform that prioritizes reliability, convenience, and customer satisfaction
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From day one, our mission has been clear: to provide a seamless and personalized grocery shopping experience that fits into the busy lives of our customers.
                We believe that everyone deserves access to fresh, high-quality products without the hassle of traditional shopping.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 text-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">CEO</p>
              </div>
              <p className="text-sm text-muted-foreground">
                John is the founder and CEO of our company. He has over 15 years of experience in the tech industry and
                is passionate about building innovative solutions.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 text-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Jane Appleseed</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Jane is our Chief Technology Officer. She has a deep understanding of software engineering and is
                committed to driving innovation in our products.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 text-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Sarah Musk</h3>
                <p className="text-sm text-muted-foreground">COO</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Sarah is our Chief Operating Officer. She has a proven track record of building efficient and scalable
                operations, and is passionate about creating a great work environment for our team.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 text-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Michael Johnson</h3>
                <p className="text-sm text-muted-foreground">VP of Engineering</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Michael is our Vice President of Engineering. He has over a decade of experience leading high-performing
                engineering teams and is passionate about building scalable and reliable systems.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
