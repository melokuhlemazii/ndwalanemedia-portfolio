import { Button } from "@/components/ui/button";
import umemuloImage from "@/assets/umemulo.jpg";

const UmemuloSection = () => {
  return (
    <section id="umemulo" className="py-20 px-6 bg-gradient-to-br from-card/50 to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={umemuloImage}
              alt="Umemulo photography"
              className="w-full h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div className="text-sm font-semibold text-muted-foreground tracking-[3px] uppercase">
              Ndwalane Media
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Your Umembeso<br />Our Memory
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As Ndwalane Media, we are passionate about immortalizing profound cultural celebrations like the, 
                Umembeso wedding ceremony. With a deep respect for tradition and a creative eye, we specialize in 
                capturing the vibrant emotions and significant moments that tell your unique story.
              </p>
              <p>
                We believe these cherished rituals are powerful narratives. From the heartfelt exchanges of gifts to the 
                joyous traditional dances, our goal is to transform these wonderful, fleeting moments into a timeless 
                tapestry of memories for generations to cherish.
              </p>
            </div>
            <Button asChild className="btn-hero btn-primary">
              <a href="#contact">Book Us Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmemuloSection;