import { Button } from "@/components/ui/button";
import corporate1 from "@/assets/corporate.jpg";
import corporateTeam from "@/assets/corporate2.jpg";
import corporateBuilding from "@/assets/corporate4.jpg";

const CorporateSection = () => {
  return (
    <section id="corporate" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-primary blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-accent to-primary blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-muted-foreground tracking-[3px] uppercase mb-4">
            Ndwalane Media
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Corporate
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Photography
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with professional corporate photography that captures 
            your team's expertise and your company's vision.
          </p>
        </div>

        {/* Corporate Images Grid */}
  <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Corporate Portrait */}
          <div className="lg:col-span-2 group cursor-pointer overflow-hidden rounded-lg">
            <div className="relative h-auto lg:h-[620px] overflow-hidden rounded-lg">
              <img
                src={corporate1}
                alt="Professional corporate headshot photography"
                className="w-full h-auto min-h-[380px] max-h-[620px] object-contain transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2"> </h3>
                  <p className="text-white/80"> </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Team & Building */}
          <div className="space-y-8">
            <div className="group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-56 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={corporateTeam}
                  alt="Corporate team photography"
                  className="w-full h-auto max-h-full object-contain transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold"> </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-56 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={corporateBuilding}
                  alt="Corporate architecture photography"
                  className="w-full h-auto max-h-full object-contain transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold"> </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "High End Photoshoots", desc: "Crafting powerful portraits that convey authority and approachability for your executive team." },
            { title: "Studio & Outdoor Sessions", desc: "Dynamic photography that captures the energy and connection in any setting" },
            { title: "Grad & Matric Dance", desc: "Elegant and timeless photography to celebrate academic milestones and formal celebrations." },
            { title: "Other", desc: "Comprehensive coverage of your events to document key moments and insights for future use" }
          ].map((service, index) => (
            <div key={index} className="glass-card text-center group hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Turn Moments into Memories?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
             Contact us to discuss your photography needs.
            </p>
            <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              <a href="#contact">Get Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;