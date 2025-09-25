import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingCouple from "@/assets/wedding-couple.jpg";
import weddingReception from "@/assets/wedding-reception.jpg";

const WeddingSection = () => {
  return (
    <section id="wedding" className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-accent tracking-[3px] uppercase mb-4">
            Wedding Photography
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Your Perfect Day
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Capturing the magic, emotion, and timeless beauty of your special day with 
            artistic vision and heartfelt storytelling.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Large Image - Ceremony */}
          <div className="lg:col-span-2 group relative">
            <div className="glass-card overflow-hidden h-[400px] lg:h-[500px]">
              <img 
                src={weddingCeremony} 
                alt="Wedding ceremony photography" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Sacred Moments</h3>
                  <p className="text-sm opacity-90">Capturing the emotion of your vows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Smaller Images */}
          <div className="space-y-6 lg:space-y-8">
            {/* Couple Portrait */}
            <div className="group relative">
              <div className="glass-card overflow-hidden h-[190px] lg:h-[235px]">
                <img 
                  src={weddingCouple} 
                  alt="Wedding couple portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">Romance</h3>
                    <p className="text-xs opacity-90">Golden hour magic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="group relative">
              <div className="glass-card overflow-hidden h-[190px] lg:h-[235px]">
                <img 
                  src={weddingReception} 
                  alt="Wedding reception photography" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">Celebration</h3>
                    <p className="text-xs opacity-90">Joy and festivities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#contact" 
              className="btn-hero btn-primary inline-flex items-center gap-2 group"
            >
              Book Your Wedding
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <div className="text-sm text-muted-foreground">
              Limited dates available for 2025
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default WeddingSection;