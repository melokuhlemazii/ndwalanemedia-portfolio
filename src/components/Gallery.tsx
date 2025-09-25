import { useState } from "react";
import { Button } from "@/components/ui/button";
import Lightbox from "./Lightbox";

// Import all portfolio images
import corporate1 from "@/assets/corporate-1.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import studioSetup from "@/assets/studio-setup.jpg";
import graduation1 from "@/assets/graduation-1.jpg";
import outdoorSession from "@/assets/outdoor-session.jpg";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: corporate1,
    title: "Corporate Excellence",
    description: "Professional corporate photography capturing leadership and success",
    category: "portrait"
  },
  {
    id: "2",
    src: lifestyle1,
    title: "Lifestyle Moments",
    description: "Capturing authentic lifestyle moments with natural elegance",
    category: "lifestyle"
  },
  {
    id: "3",
    src: editorial1,
    title: "Editorial Fashion",
    description: "High-end editorial photography with dramatic artistic vision",
    category: "editorial"
  },
  {
    id: "4",
    src: portrait1,
    title: "Professional Portrait",
    description: "Studio portrait photography with perfect lighting and composition",
    category: "portrait"
  },
  {
    id: "5",
    src: wedding1,
    title: "Wedding Romance",
    description: "Romantic wedding photography capturing love and celebration",
    category: "lifestyle"
  },
  {
    id: "6",
    src: studioSetup,
    title: "Studio Excellence",
    description: "Behind the scenes of professional studio photography",
    category: "editorial"
  },
  {
    id: "7",
    src: graduation1,
    title: "Graduation Day",
    description: "Celebrating milestone moments with professional graduation photography",
    category: "portrait"
  },
  {
    id: "8",
    src: outdoorSession,
    title: "Natural Beauty",
    description: "Outdoor photography sessions capturing natural beauty and personality",
    category: "lifestyle"
  },
];

const filters = ["all", "portrait", "lifestyle", "editorial"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`capitalize ${
                  activeFilter === filter 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-transparent border-border text-muted-foreground hover:text-accent hover:border-accent"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          <div className="text-muted-foreground text-sm">
            Showing {filteredItems.length} works
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="gallery-item"
              onClick={() => setLightboxImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightboxImage(item);
                }
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-xl" />
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </section>
  );
};

export default Gallery;