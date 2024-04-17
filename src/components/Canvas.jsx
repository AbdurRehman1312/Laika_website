import React, { useRef, useEffect } from "react";

const Canvas = ({ count, speed, radius, width, height, size, color, maxDistance, background }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let target = { x: width / 2, y: height / 2 };
    let particles = [];

    // Particle class
    class Particle {
      constructor(x, y, radius, angle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.angle = angle;
        this.color = color;
        this.orbit = radius * 2 + (radius * 30 * Math.random());
        this.closest = [];
      }

      update() {
        this.angle += speed;
        this.x = target.x + Math.cos(this.angle) * this.orbit;
        this.y = target.y + Math.sin(this.angle) * this.orbit;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Draw connecting lines
    const drawLines = (point) => {
      ctx.globalAlpha = 0.8;
      ctx.globalCompositeOperation = "screen";
      ctx.lineCap = 'round';

      point.closest.forEach(closest => {
        ctx.lineWidth = (size * 2) * closest.opacity;
        ctx.strokeStyle = {colo};
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(closest.x, closest.y);
        ctx.stroke();
      });
    };

    // Initialize particles
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = target.x + Math.cos(angle) * radius;
      const y = target.y + Math.sin(angle) * radius;
      particles.push(new Particle(x, y, size, angle));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
        drawLines(particle);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const handleMouseMove = (event) => {
      target = { x: event.clientX, y: event.clientY };
    };

    const handleResize = () => {
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, speed, radius, width, height, size, color]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
