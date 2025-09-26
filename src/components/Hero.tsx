import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ndwalane.jpg";

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
              <strong>NHLAKANIPHO NDWALANE</strong> is a freelance photographer specializing in portraits, editorial and lifestyle work. 
              He blends natural light with cinematic editing to craft images that feel both honest and elevated.
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

          <div className="flex items-center justify-center relative overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Ndwalane Media - Professional Photography"
              className="max-w-[280px] sm:max-w-[340px] max-h-[400px] sm:max-h-[480px] w-auto h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;