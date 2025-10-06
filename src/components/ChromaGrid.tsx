import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

interface ChromaGridItem {
  image: string;
  title: string;
  subtitle: string;
  handle: string;
  borderColor: string;
  gradient: string;
  url: string;
}

interface ChromaGridProps {
  items: ChromaGridItem[];
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out"
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const overlay = overlayRef.current;
    const fade = fadeRef.current;
    
    if (!grid || !overlay || !fade) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(grid, {
        duration: damping,
        ease: ease,
        "--x": `${x}%`,
        "--y": `${y}%`,
        "--r": `${radius}px`
      });

      // Update card mouse positions
      const cards = grid.querySelectorAll('.chroma-card');
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = ((e.clientX - cardRect.left) / cardRect.width) * 100;
        const cardY = ((e.clientY - cardRect.top) / cardRect.height) * 100;
        
        gsap.set(card, {
          "--mouse-x": `${cardX}%`,
          "--mouse-y": `${cardY}%`
        });
      });
    };

    const handleMouseLeave = () => {
      gsap.to(fade, {
        duration: 0.25,
        ease: "power2.out",
        opacity: fadeOut
      });
    };

    const handleMouseEnter = () => {
      gsap.to(fade, {
        duration: 0.25,
        ease: "power2.out",
        opacity: 1
      });
    };

    grid.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('mouseleave', handleMouseLeave);
    grid.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
      grid.removeEventListener('mouseleave', handleMouseLeave);
      grid.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [radius, damping, fadeOut, ease]);

  return (
    <div className="chroma-grid-container">
      <div 
        ref={gridRef}
        className="chroma-grid"
        style={{ 
          '--cols': Math.min(3, items.length),
          '--r': `${radius}px`
        } as React.CSSProperties}
      >
        {items.map((item, index) => (
          <button 
            key={`${item.handle}-${index}`}
            className="chroma-card"
            style={{
              '--card-border': item.borderColor,
              '--card-gradient': item.gradient
            } as React.CSSProperties}
            onClick={() => window.open(item.url, '_blank')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(item.url, '_blank');
              }
            }}
            aria-label={`View ${item.title} - ${item.subtitle}`}
          >
            <div className="chroma-img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="chroma-info">
              <div className="name">{item.title}</div>
              <div className="role">{item.subtitle}</div>
              <div className="handle">{item.handle}</div>
            </div>
          </button>
        ))}
      </div>
      <div ref={overlayRef} className="chroma-overlay"></div>
      <div 
        ref={fadeRef} 
        className="chroma-fade" 
        style={{ opacity: fadeOut }}
      ></div>
    </div>
  );
};

export default ChromaGrid;
