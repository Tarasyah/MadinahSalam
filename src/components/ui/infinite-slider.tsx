"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // pixels per frame
  className?: string;
  itemClassName?: string;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  direction = 'left',
  speed = 1,
  className,
  itemClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startTranslateX = useRef(0);
  const currentX = useRef(0);
  const animationRef = useRef<number>();
  
  const animate = useCallback(() => {
    if (!containerRef.current || !contentRef.current || isDragging.current || isPaused.current || isHovered.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    const content = contentRef.current;
    const originalWidth = content.scrollWidth / 2;
    
    let x = currentX.current;
    if (direction === 'left') {
      x -= speed;
      if (x <= -originalWidth) {
        x += originalWidth;
      }
    } else {
      x += speed;
      if (x >= 0) {
        x -= originalWidth;
      }
    }
    
    currentX.current = x;
    content.style.transform = `translate3d(${x}px, 0, 0)`;
    
    animationRef.current = requestAnimationFrame(animate);
  }, [direction, speed]);

  const isPaused = useRef(false);
  const isHovered = useRef(false);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startTranslateX.current = currentX.current;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
      containerRef.current.style.userSelect = 'none';
    }
  };

  const handlePointerLeave = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.userSelect = 'auto';
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.userSelect = 'auto';
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current || !contentRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX.current);
    
    const originalWidth = contentRef.current.scrollWidth / 2;
    let newX = startTranslateX.current + walk;
    
    if (newX <= -originalWidth) {
      newX += originalWidth;
      startX.current = x;
      startTranslateX.current = newX;
    } else if (newX >= 0) {
      newX -= originalWidth;
      startX.current = x;
      startTranslateX.current = newX;
    }
    
    currentX.current = newX;
    contentRef.current.style.transform = `translate3d(${newX}px, 0, 0)`;
  };

  return (
    <div 
      className={cn("overflow-hidden cursor-grab flex w-full", className)}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerLeave={() => { handlePointerLeave(); isHovered.current = false; }}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
      onClick={() => { isPaused.current = !isPaused.current; }}
      style={{ touchAction: 'pan-y' }}
    >
      <div 
        ref={contentRef} 
        className="flex w-max"
        style={{ willChange: 'transform' }}
      >
        <div className={cn("flex", itemClassName)}>
          {children}
        </div>
        <div className={cn("flex", itemClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
};
