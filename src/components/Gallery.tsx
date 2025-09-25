import { useState } from "react";
import { Button } from "@/components/ui/button";
import Lightbox from "./Lightbox";

import corporate1 from "@/assets/corporate.jpg";
import corporate2 from "@/assets/corporate2.jpg";
import corporate4 from "@/assets/corporate4.jpg";
import lifestyle1 from "@/assets/grad.jpg";
import lifestyle2 from "@/assets/grad2.jpg";
import editorial1 from "@/assets/brazo.jpg";
import editorial2 from "@/assets/zamsile.jpg";
import editorial3 from "@/assets/high-end3.jpg";
import editorial4 from "@/assets/high-end4.jpg";
import wedding1 from "@/assets/wedding1.jpg";
import wedding2 from "@/assets/wedding2.jpg";
import outdoor1 from "@/assets/outdoor.jpg";

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
    description: "Professional corporate photography",
    category: "portrait"
  },
  {
    id: "2",
    src: corporate2,
    title: "Business Professional",
    description: "Executive portraits",
    category: "portrait"
  },
  {
    id: "3",
    src: corporate4,
    title: "Corporate Leadership",
    description: "Corporate headshots",
    category: "portrait"
  },
  {
    id: "4",
    src: lifestyle1,
    title: "Graduation Celebration",
    description: "Graduation photography",
    category: "lifestyle"
  },
  {
    id: "5",
    src: lifestyle2,
    title: "Academic Achievement",
    description: "Professional graduation photography",
    category: "lifestyle"
  },
  {
    id: "6",
    src: outdoor1,
    title: "Outdoor Excellence",
    description: "Outdoor photography",
    category: "lifestyle"
  },
  {
    id: "7",
    src: editorial1,
    title: "Editorial Portrait",
    description: "Editorial photography",
    category: "editorial"
  },
  {
    id: "8",
    src: editorial2,
    title: "Fashion Editorial",
    description: "Fashion photography",
    category: "editorial"
  },
  {
    id: "9",
    src: editorial3,
    title: "High-End Fashion",
    description: "Premium fashion photography",
    category: "editorial"
  },
  {
    id: "10",
    src: editorial4,
    title: "Luxury Lifestyle",
    description: "High-end lifestyle photography",
    category: "editorial"
  },
  {
    id: "11",
    src: wedding1,
    title: "Wedding Romance",
    description: "Wedding photography",
    category: "lifestyle"
  },
  {
    id: "12",
    src: wedding2,
    title: "Wedding Elegance",
    description: "Wedding photography",
    category: "lifestyle"
  }
];

const filters = ["all", "portrait", "lifestyle", "editorial"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              className="gallery-item"
              onClick={() => { setLightboxImage(item); setCurrentIndex(idx); }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightboxImage(item);
                  setCurrentIndex(idx);
                }
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-xl" />
            </article>
          ))}
        </div>
      </div>

      {lightboxImage !== null && currentIndex !== null && (
        <Lightbox
          images={filteredItems}
          currentIndex={currentIndex}
          onClose={() => { setLightboxImage(null); setCurrentIndex(null); }}
          onNavigate={(newIndex: number) => setCurrentIndex(newIndex)}
        />
      )}
    </section>
  );
};

export default Gallery;