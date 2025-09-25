const About = () => {
  const services = [
    "Grad & Matric Dances",
    "Umemulo & Wedding/Umembeso",
    "Outdoor & Studio Sessions",
    "Hi End Photoshoots"
  ];

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card space-y-6">
            <h3 className="text-2xl font-semibold">About me</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi — I'm <strong className="text-foreground">NHLAKANIPHO NDWALANE</strong>, 
              a photographer focused on capturing authentic moments with cinematic lighting. 
              I shoot commercial, editorial and personal projects. My work has been featured 
              in various online and print publications.
            </p>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;