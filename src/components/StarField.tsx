import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkle: number;
    }> = [];

    const comets: Array<{
      x: number;
      y: number;
      speed: number;
      trail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2
      });
    }

    // Create comets
    for (let i = 0; i < 3; i++) {
      comets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        trail: []
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        star.twinkle += 0.02;
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity})`;
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity * 0.1})`;
        ctx.fill();
      });

      // Draw comets
      comets.forEach(comet => {
        comet.x += comet.speed;
        comet.y += comet.speed * 0.5;

        if (comet.x > canvas.width + 50) {
          comet.x = -50;
          comet.y = Math.random() * canvas.height;
          comet.trail = [];
        }

        // Add to trail
        comet.trail.push({ x: comet.x, y: comet.y, opacity: 1 });
        if (comet.trail.length > 20) {
          comet.trail.shift();
        }

        // Draw trail
        comet.trail.forEach((point, index) => {
          const trailOpacity = (index / comet.trail.length) * 0.8;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 255, ${trailOpacity})`;
          ctx.fill();
        });

        // Draw comet head
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.9)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #070d41 0%, #062b38 100%)' }}
    />
  );
};

export default StarField;