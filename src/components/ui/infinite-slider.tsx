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
  const scrollLeft = useRef(0);
  const animationRef = useRef<number>();
  
  const animate = useCallback(() => {
    if (!containerRef.current || !contentRef.current || isDragging.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    const container = containerRef.current;
    const content = contentRef.current;
    const originalWidth = content.scrollWidth / 2;
    
    if (direction === 'left') {
      container.scrollLeft += speed;
      if (container.scrollLeft >= originalWidth) {
        container.scrollLeft -= originalWidth;
      }
    } else {
      container.scrollLeft -= speed;
      if (container.scrollLeft <= 0) {
        container.scrollLeft += originalWidth;
      }
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [direction, speed]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
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
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    
    const originalWidth = contentRef.current.scrollWidth / 2;
    let newScrollLeft = scrollLeft.current - walk;
    
    if (newScrollLeft >= originalWidth) {
      newScrollLeft -= originalWidth;
      startX.current = x;
      scrollLeft.current = newScrollLeft;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += originalWidth;
      startX.current = x;
      scrollLeft.current = newScrollLeft;
    }
    
    containerRef.current.scrollLeft = newScrollLeft;
  };

  return (
    <div 
      className={cn("overflow-hidden cursor-grab flex w-full", className)}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .infinite-slider-container::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div 
        ref={contentRef} 
        className="flex w-max infinite-slider-container"
        style={{ touchAction: 'pan-y' }}
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
