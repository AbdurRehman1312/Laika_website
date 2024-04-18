import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Assuming you're using GSAP library

const Canvas = () => {
  const canvasRef = useRef(null);
  let canvas = null;
  const options = {
    count: 70,
    speed: 0.1,
    radius: 13,
    size: 20,
    color: '10, 130, 150',
    maxDistance: 120,
    background: ['0, 0, 0', '0, 0, 0']
  };

  const PI2 = Math.PI * 2;
  const HALF_PI = Math.PI / 2;

  const isTouch = 'ontouchstart' in window;

  const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  // Vector class for handling coordinates
  function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  Vector.prototype.distanceTo = function (vector, abs) {
    var distance = Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
    return abs || false ? Math.abs(distance) : distance;
  };

  // Particle class
  function Particle(options) {
    options = { ...options };
    this.options = { ...this.options, ...options };

    this.position = this.shift = new Vector(this.options.x, this.options.y);
    this.speed = this.options.speed || 0.01 + Math.random() * 0.02;
    this.angle = this.options.angle || 0;

    if (this.options.color) {
      var color = this.options.color.split(',');
      var colorIndex = -1;
      while (++colorIndex < 3) {
        color[colorIndex] = Math.round(parseInt(color[colorIndex], 10) + (Math.random() * 100) - 50);

        // Clamp
        color[colorIndex] = Math.min(color[colorIndex], 255);
        color[colorIndex] = Math.max(color[colorIndex], 0);
      }
      this.color = color.join(', ');
    }

    this.options.size = this.options.size || 7;
    this.size = 1 + Math.random() * this.options.size;
    this.targetSize = this.options.targetSize || this.options.size;
    this.orbit = this.options.radius * 0.2 + (this.options.radius * 0.7 * Math.random());
  }

  Particle.prototype.update = function (target, index) {
    this.angle += this.speed;

    this.shift.x += (target.x - this.shift.x) * this.speed;
    this.shift.y += (target.y - this.shift.y) * this.speed;

    this.position.x = this.shift.x + Math.cos(index + this.angle) * this.orbit;
    this.position.y = this.shift.y + Math.sin(index + this.angle) * this.orbit;

    if (!isSafari) {
      this.size += (this.targetSize - this.size) * 0.03;

      if (Math.round(this.size) === Math.round(this.targetSize)) {
        this.targetSize = 1 + Math.random() * this.options.size;
      }
    }
  };

  // Canvas class
  const Canvas = function (options) {
    options = { ...options };
    this.options = { ...this.options, ...options };

    this.el = this.options.el;
    this.ctx = this.el.getContext('2d');
    this.dpr = window.devicePixelRatio || 1;
    let prevTarget = new Vector(this.width / 2, this.height / 2); // Initialize prevTarget for smooth transition

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this), false);
    this.resetTarget();

    if (!isMobileDevice()) { // Only add mouse events if not on a mobile device
      window.addEventListener('mousemove', this.mouseMove.bind(this), false);
      window.addEventListener('mouseout', this.resetTarget.bind(this), false);
    }

    this.setupParticles();
    this.loop();

    // Smooth transition logic
    this.target.x += (prevTarget.x - this.target.x) * 0.05;
    this.target.y += (prevTarget.y - this.target.y) * 0.05;
    prevTarget = new Vector(this.target.x, this.target.y);
  };

  // Update dimensions of the canvas
  Canvas.prototype.updateDimensions = function () {
    this.width = this.el.width = (typeof this.options.width === 'function' ? this.options.width() : this.options.width) * this.dpr;
    this.height = this.el.height = (typeof this.options.height === 'function' ? this.options.height() : this.options.height) * this.dpr;
    this.el.style.width = (typeof this.options.width === 'function' ? this.options.width() : this.options.width) + 'px';
    this.el.style.height = (typeof this.options.height === 'function' ? this.options.height() : this.options.height) + 'px';
  };

 // Update the orb target on mouse move
Canvas.prototype.mouseMove = function (event) {
  const boundingRect = this.el.getBoundingClientRect();
  const mouseX = event.clientX - boundingRect.left;
  const mouseY = event.clientY - boundingRect.top;

  if (mouseX >= 0 && mouseX <= this.width && mouseY >= 0 && mouseY <= this.height) {
    this.target = new Vector(mouseX * this.dpr, mouseY * this.dpr);
  }
};

// Reset target to center when mouse out
Canvas.prototype.resetTarget = function () {
  this.target = new Vector(this.width / 2, this.height / 2);
};


  // Setup particles
  Canvas.prototype.setupParticles = function () {
    this.particles = [];
    var index = -1;
    var between = PI2 / this.options.count;
    while (++index < this.options.count) {
      var x;
      var y;
      var angle;
      var max = Math.max(this.width, this.height);

      angle = (index + 1) * between;

      x = Math.cos(angle) * max;
      x += this.width / 2;

      y = Math.sin(angle) * max;
      y += this.height / 2;

      var particle = new Particle({
        x: x,
        y: y,
        radius: this.options.radius,
        size: this.options.size,
        angle: angle,
        color: this.options.color
      });

      this.particles.push(particle);
    }
  };

  // Find closest particles
  Canvas.prototype.findClosest = function () {
    var index = -1;
    var pointsLength = this.particles.length;

    while (++index < pointsLength) {
      var closestIndex = -1;
      this.particles[index].closest = [];

      while (++closestIndex < pointsLength) {
        var closest = this.particles[closestIndex];
        var distance = this.particles[index].position.distanceTo(closest.position);
        if (distance < this.options.maxDistance) {
          var vector = new Vector(closest.position.x, closest.position.y);
          vector.opacity = 1 - (distance / this.options.maxDistance);
          vector.distance = distance;
          this.particles[index].closest.push(vector);
        }
      }
    }
  };

  // Main loop for animation
  Canvas.prototype.loop = function () {
    this.clear();
    if (isSafari) {
      this.ghost();
    } else {
      this.ghostGradient();
    }
    if (this.options.maxDistance > 0) {
      this.findClosest();
    }
    this.draw();

    window.requestAnimationFrame(this.loop.bind(this));
  };

  // Clear canvas
  Canvas.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };

  // Draw background
  Canvas.prototype.ghost = function () {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.rect(0, 0, this.width, this.height);
    if (typeof this.options.background === 'string') {
      this.ctx.fillStyle = "rgb(" + this.options.background + ")";
    } else {
      this.ctx.fillStyle = "rgb(" + this.options.background[0] + ")";
    }
    this.ctx.fill();
  };

  // Draw background with gradient
  Canvas.prototype.ghostGradient = function () {
    var gradient;

    if (typeof this.options.background === 'string') {
      this.ctx.fillStyle = 'rgb(' + this.options.background + ')';
    } else {
      gradient = this.ctx.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, Math.max(this.width, this.height) / 2);

      var length = this.options.background.length;
      for (var i = 0; i < length; i++) {
        gradient.addColorStop((i + 1) / length, 'rgb(' + this.options.background[i] + ')');
      }
      this.ctx.fillStyle = gradient;
    }

    this.ctx.globalOpacity = 0.1;
    this.ctx.globalCompositeOperation = "darken";
    this.ctx.fillRect(0, 0, this.width, this.height);
  };

  // Draw particles and lines
  Canvas.prototype.draw = function () {
    var index = -1;
    var length = this.particles.length;
    while (++index < length) {
      var point = this.particles[index];
      var color = point.color || this.options.color;
      point.update(this.target, index);

      this.ctx.globalAlpha = 0.3;
      this.ctx.globalCompositeOperation = "lighten";
      this.ctx.fillStyle = 'rgb(' + color + ')';
      this.ctx.beginPath();
      this.ctx.arc(point.position.x, point.position.y, point.size, 0, PI2, false);
      this.ctx.closePath();
      this.ctx.fill();

      if (this.options.maxDistance > 0) {
        this.drawLines(point, color);
      }
    }
  };

  // Draw connecting lines between particles
  Canvas.prototype.drawLines = function (point, color) {
    color = color || this.options.color;
    var index = -1;
    var length = point.closest.length;
    this.ctx.globalAlpha = 0.2;
    this.ctx.globalCompositeOperation = "screen";
    this.ctx.lineCap = 'round';
    while (++index < length) {
      this.ctx.lineWidth = (point.size * 2) * point.closest[index].opacity;
      this.ctx.strokeStyle = 'rgba(' + color + ', ' + point.closest[index].opacity + ')';
      this.ctx.beginPath();
      this.ctx.moveTo(point.position.x, point.position.y);
      this.ctx.lineTo(point.closest[index].x, point.closest[index].y);
      this.ctx.stroke();
    }
  };

  // Function to detect mobile devices
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  // Initialize Canvas instance
  useEffect(() => {
    canvas = new Canvas({
      el: canvasRef.current,
      width: () => window.innerWidth,
      height: () => window.innerHeight,
      ...options
    });
    canvas.loop();

    gsap.fromTo(
      canvasRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }
    );

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return <canvas className='z-[-100] rounded-[30%]' ref={canvasRef} id="canvas" style={{ width: '100%', height: '100%', backgroundColor: 'black' }} onTouchStart={() => {}} onTouchMove={() => {}}></canvas>;
};

export default Canvas;
