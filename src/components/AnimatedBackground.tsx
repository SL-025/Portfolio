import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform background properties based on scroll
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const hueRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 120;
    const mouse = { x: 0, y: 0, radius: 150 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      baseColor: { r: number, g: number, b: number };

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.baseColor = { r: 100, g: 150, b: 255 };
        this.color = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${Math.random() * 0.3 + 0.1})`;
      }

      update(scrollFactor: number) {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 2;
          const directionY = forceDirectionY * force * 2;
          
          this.x -= directionX;
          this.y -= directionY;
        }

        // Particles move faster as user scrolls
        this.x += this.speedX * (1 + scrollFactor * 2);
        this.y += this.speedY * (1 + scrollFactor * 2);

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw(scrollFactor: number) {
        if (!ctx) return;
        
        // Color shifts from blue to purple/cyan as user scrolls
        const r = Math.floor(this.baseColor.r + scrollFactor * 100);
        const g = Math.floor(this.baseColor.g - scrollFactor * 50);
        const b = Math.floor(this.baseColor.b + scrollFactor * 50);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.2 + scrollFactor * 0.3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (1 + scrollFactor), 0, Math.PI * 2);
        ctx.fill();
        
        // Add a glow effect as user scrolls deep
        if (scrollFactor > 0.5) {
          ctx.shadowBlur = 10 * scrollFactor;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      const scrollFactor = scrollYProgress.get();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw dynamic grid
      ctx.strokeStyle = `rgba(100, 150, 255, ${0.05 + scrollFactor * 0.1})`;
      ctx.lineWidth = 0.5;
      const step = 50 - scrollFactor * 20; // Grid tightens as you scroll
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(scrollFactor * 0.1); // Subtle rotation
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      for (let x = -canvas.width; x < canvas.width * 2; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, -canvas.height);
        ctx.lineTo(x, canvas.height * 2);
        ctx.stroke();
      }
      for (let y = -canvas.height; y < canvas.height * 2; y += step) {
        ctx.beginPath();
        ctx.moveTo(-canvas.width, y);
        ctx.lineTo(canvas.width * 2, y);
        ctx.stroke();
      }
      ctx.restore();

      particles.forEach((particle, index) => {
        particle.update(scrollFactor);
        particle.draw(scrollFactor);

        // Draw lines between nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 150 + scrollFactor * 100; // Connection range increases
          if (distance < maxDist) {
            ctx.beginPath();
            const alpha = (0.1 + scrollFactor * 0.2) * (1 - distance / maxDist);
            ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
            ctx.lineWidth = 0.5 + scrollFactor;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrollYProgress]);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{ 
        opacity: bgOpacity,
        scale,
        filter: `hue-rotate(${hueRotate.get()}deg)`,
        background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000 100%)'
      }}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};
