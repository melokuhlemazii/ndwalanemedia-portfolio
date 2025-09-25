import studioSetup from "@/assets/studio-setup.jpg";

const StudioSection = () => {
  return (
    <section id="studio" className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-sm font-semibold text-muted-foreground tracking-[3px] uppercase">
              About Studio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Moments in Focus
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a commitment to excellence and a dedication to capturing the essence of each subject, 
                our studio approaches every project with enthusiasm and professionalism. From intimate 
                portraits to stunning landscapes, we ensure that each photograph reflects our passion 
                for the art of photography.
              </p>
              <p>
                Welcome to our world, where every click of the shutter is a journey into the extraordinary.
              </p>
            </div>
          </div>

          <div className="glass-card min-h-[400px] flex items-center justify-center">
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