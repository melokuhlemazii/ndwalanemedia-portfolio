import { X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: Array<{
    id?: string;
    src: string;
    title?: string;
    description?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNavigate }: LightboxProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(Math.max(0, currentIndex - 1));
      if (e.key === 'ArrowRight') onNavigate(Math.min(images.length - 1, currentIndex + 1));
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(Math.max(0, currentIndex - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(Math.min(images.length - 1, currentIndex + 1));
  };

  const image = images[currentIndex];

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute top-6 right-6 p-2 bg-black/40 text-white rounded-lg hover:bg-black/60 transition-colors z-50"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="flex-1 flex items-center justify-center bg-black relative">
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-50 hover:bg-black/60"
            onClick={prev}
            aria-label="Previous"
          >
            ‹
          </button>

          <img
            src={image.src}
            alt={image.title || 'Portfolio image'}
            className="max-w-full max-h-[85vh] object-contain"
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-50 hover:bg-black/60"
            onClick={next}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;