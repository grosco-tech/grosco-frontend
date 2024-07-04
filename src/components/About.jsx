const About = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h1 className="mb-4 text-3xl font-bold">About Grosco</h1>
              <p className="text-muted-foreground">
                Welcome to Grocso, your reliable and efficient grocery delivery
                service designed to bring the freshest products right to your
                doorstep. At Grocso, we believe that grocery shopping should be
                simple, convenient, and time-saving. Inspired by the needs of
                modern households and the pace of urban life, we aim to redefine
                how you shop for groceries.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                Our mission at Grocso is to provide an unmatched grocery
                shopping experience that combines convenience, quality, and
                affordability. We are committed to delivering fresh produce,
                everyday essentials, and specialty items with speed and
                precision, ensuring that your pantry is always stocked with the
                best.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">What We Offer</h2>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  <h2 className="text-lg font-bold">
                    Wide Selection of Products
                  </h2>
                  <p className="text-muted-foreground">
                    From farm-fresh fruits and vegetables to pantry staples,
                    dairy products, and household essentials, Grocso offers a
                    comprehensive range of items to meet all your grocery needs.
                  </p>
                </li>
                <li>
                  <h2 className="text-lg font-bold">Freshness Guaranteed</h2>
                  <p className="text-muted-foreground">
                    We partner with trusted local farmers, suppliers, and brands
                    to ensure that every product we deliver meets our high
                    standards of quality and freshness.
                  </p>
                </li>
                <li>
                  <h2 className="text-lg font-bold">
                    Fast and Reliable Delivery
                  </h2>
                  <p className="text-muted-foreground">
                    With our state-of-the-art logistics and dedicated delivery
                    team, we guarantee quick and reliable delivery right to your
                    doorstep. Choose a delivery time that suits your schedule,
                    and leave the rest to us.
                  </p>
                </li>
                <li>
                  <h2 className="text-xl font-bold">
                    User-Friendly Experience
                  </h2>
                  <p className="text-muted-foreground">
                    Our easy-to-navigate app and website make shopping for
                    groceries a breeze. Enjoy a seamless ordering process,
                    secure payment options, and real-time order tracking.
                  </p>
                </li>
                <li>
                  <h2 className="text-xl font-bold">Eco-Friendly Practices </h2>
                  <p className="text-muted-foreground">
                    {" "}
                    Grocso is committed to sustainability. We use eco-friendly
                    packaging and aim to reduce our carbon footprint by
                    optimizing delivery routes and supporting local producers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Values</h2>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  <h2 className="text-xl font-bold">Customer Satisfaction</h2>
                  <p className="text-muted-foreground">
                    Your satisfaction is our top priority. We strive to provide
                    excellent customer service, from the moment you place your
                    order to the time it is delivered.
                  </p>
                </li>
                <li>
                  <h2 className="text-xl font-bold">Quality Assurance</h2>
                  <p className="text-muted-foreground">
                    We believe in delivering only the best. Every product is
                    carefully selected and inspected to ensure it meets our
                    quality standards.
                  </p>
                </li>
                <li>
                  <h2 className="text-xl font-bold">Innovation</h2>
                  <p className="text-muted-foreground">
                    We continually innovate to improve our service,
                    incorporating the latest technology and listening to
                    customer feedback to enhance your shopping experience.
                  </p>
                </li>
                <li>
                  <h2 className="text-xl font-bold">Community Focus</h2>
                  <p className="text-muted-foreground">
                    Grocso supports local communities by sourcing products from
                    local farmers and suppliers. We believe in building strong
                    relationships with our partners and customers.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Join the Grocso Family
              </h2>
              <p className="text-muted-foreground">
                Experience the future of grocery shopping with Grocso. Download
                our app or visit our website to start your order today. Whether
                you&apos;re stocking up for the week or need a last-minute item,
                Grocso is here to make your life easier, one delivery at a time.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Team</h2>
              <p className="text-muted-foreground">
                Our team of dedicated professionals is passionate about
                providing our customers with the best possible experience. From
                our sourcing experts to our delivery drivers, we are committed
                to excellence in every aspect of our business.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-10 mt-24 text-4xl font-bold">
            Thank you for choosing Grocso – where convenience meets quality.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
