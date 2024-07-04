import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">
                We&apos;re here to help! Get in touch with us for any questions
                or feedback.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Contact Details</h2>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  <span>support@grosco.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5" />
                  <span>123 Main St, Anytown USA</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Business Hours</h2>
              <div className="space-y-2 text-muted-foreground">
                <div>Monday - Friday: 9am - 6pm</div>
                <div>Saturday: 10am - 4pm</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
