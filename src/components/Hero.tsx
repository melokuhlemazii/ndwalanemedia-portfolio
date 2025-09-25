import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-photographer.jpg";

const Hero = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Catching moments. Creating mood.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a freelance photographer specializing in portraits, editorial and lifestyle work. 
              I blend natural light with cinematic editing to craft images that feel both honest and elevated.
            </p>
            <p className="text-muted-foreground">
              Available for commissions worldwide. Select a gallery below to explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero btn-primary">
                <a href="#portfolio">View Our Work</a>
              </Button>
              <Button asChild variant="outline" className="btn-hero btn-secondary">
                <a href="#contact">Contact Us Now</a>
              </Button>
            </div>
          </div>

          <div className="glass-card min-h-[400px] flex items-center justify-center">
            <img
              src={heroImage}
              alt="Professional photography showcase"
              className="w-full h-80 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;