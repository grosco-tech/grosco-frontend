const About = () => {
  return (
    <section className="h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-bold">About Zeptone</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="mb-6 text-muted-foreground">
              At Zeptone, our mission is to provide our customers with the
              highest quality groceries and household essentials, delivered
              right to their doorstep. We believe in supporting local farmers
              and producers, and offering a wide selection of organic,
              sustainable, and ethically sourced products.
            </p>
            <h2 className="mb-4 text-2xl font-bold">Our Values</h2>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Commitment to quality and freshness</li>
              <li>Sustainable and ethical sourcing</li>
              <li>Exceptional customer service</li>
              <li>Continuous innovation and improvement</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
            <p className="mb-6 text-muted-foreground">
              Zeptone was founded in 2018 by a team of passionate entrepreneurs
              who saw an opportunity to revolutionize the grocery industry.
              Frustrated by the lack of convenient and reliable grocery delivery
              options, they set out to create a platform that would provide
              customers with a seamless and enjoyable shopping experience.
            </p>
            <p className="mb-6 text-muted-foreground">
              Since then, Zeptone has grown to become a trusted name in the
              online grocery market, serving customers across the country with a
              wide range of high-quality products and exceptional service. We
              are committed to continuously expanding our offerings and
              improving the customer experience, always striving to be the best
              in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
