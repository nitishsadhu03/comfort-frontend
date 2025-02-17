// components/StarryBackground.tsx
"use client";

import { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star properties
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    const starCount = 200; // Number of stars

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5, // Random size between 0.5 and 2
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        speed: Math.random() * 0.5 + 0.1, // Random speed between 0.1 and 0.6
      });
    }

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    };

    // Animate stars
    const animateStars = () => {
      drawStars();
      stars.forEach((star) => {
        star.y += star.speed; // Move stars downward
        if (star.y > canvas.height) {
          star.y = 0; // Reset star to the top
          star.x = Math.random() * canvas.width; // Randomize horizontal position
        }
      });
      requestAnimationFrame(animateStars);
    };

    animateStars();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarsBackground;