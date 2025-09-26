import studioSetup from "@/assets/studio.jpg";

const StudioSection = () => {
  return (
    <section id="studio" className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-sm font-semibold text-muted-foreground tracking-[3px] uppercase">
              Ndwalane Media
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Our Studio Craft
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a commitment to excellence, Ndwalane Media specializes in transforming studio photoshoots into a
                gallery of timeless memories. We approach every portrait, headshot, and creative session with
                professionalism and a keen eye for capturing your unique essence. 
                
              </p>
              <p>
                Welcome to our controlled studio environment, where we craft extraordinary images. Here, every click of
                the shutter is dedicated to turning your special moments into polished, everlasting memories.
              </p>
            </div>
          </div>

          <div className="min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={studioSetup}
              alt="Studio portrait photography"
              className="w-full h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;