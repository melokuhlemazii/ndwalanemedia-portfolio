import { X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  image: {
    src: string;
    title: string;
    description: string;
  };
  onClose: () => void;
}

const Lightbox = ({ image, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div 
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        className="absolute top-6 right-6 p-2 bg-black/40 text-white rounded-lg hover:bg-black/60 transition-colors z-50"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>
      
      <div 
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="flex-1 flex items-center justify-center bg-black">
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-[70vh] object-contain"
          />
        </div>
        
        <div className="w-full lg:w-96 p-6 space-y-4">
          <h3 id="lightbox-title" className="text-xl font-semibold text-foreground">
            {image.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {image.description}
          </p>
          <div className="pt-4 border-t border-border text-sm text-muted-foreground">
            Camera • Lens • Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;