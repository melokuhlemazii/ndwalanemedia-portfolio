import { Button } from "@/components/ui/button";
import umemuloImage from "@/assets/umemulo-ceremony.jpg";

const UmemuloSection = () => {
  return (
    <section id="umemulo" className="py-20 px-6 bg-gradient-to-br from-card/50 to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card min-h-[400px] flex items-center justify-center">
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
              Creating<br />Memories
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a passionate photographer, our team has an innate ability to freeze moments in time, 
                turning them into everlasting memories. With a keen eye for detail and a creative flair, 
                we specialize in portraiture, weddings and corporate photography.
              </p>
              <p>
                Driven by a desire to tell stories through imagery, we believe that every photograph 
                has a unique tale to tell. Whether it's a candid moment between loved ones or the 
                breathtaking beauty of nature, we strive to evoke emotion and inspire through our work.
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