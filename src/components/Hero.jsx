import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const animationRef = useRef(null);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const newParticles = Array.from(
        { length: Math.min(90, Math.floor(window.innerWidth / 15)) },
        () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.8 + 0.7,
        })
      );
      setParticles(newParticles);
    };

    const animateNetwork = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      setParticles((prevParticles) => {
        const updatedParticles = prevParticles.map((point) => {
          let newX = point.x + point.vx;
          let newY = point.y + point.vy;
          let newVx = point.vx;
          let newVy = point.vy;

          if (newX < 0 || newX > window.innerWidth) newVx *= -1;
          if (newY < 0 || newY > window.innerHeight) newVy *= -1;

          newX = Math.max(0, Math.min(window.innerWidth, newX));
          newY = Math.max(0, Math.min(window.innerHeight, newY));

          return {
            ...point,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });

        // Draw particles and connections
        updatedParticles.forEach((point, index) => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(89, 230, 181, 0.72)';
          ctx.fill();

          for (let next = index + 1; next < updatedParticles.length; next += 1) {
            const other = updatedParticles[next];
            const distance = Math.hypot(point.x - other.x, point.y - other.y);
            if (distance < 128) {
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(66, 198, 255, ${0.18 - distance / 900})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        return updatedParticles;
      });

      animationRef.current = requestAnimationFrame(animateNetwork);
    };

    resizeCanvas();
    animateNetwork();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={`${baseUrl}assets/backend-hero.png`} alt="" />
      <canvas className="system-canvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero-shade"></div>
      <div className="hero-content">
        <p className="eyebrow" data-reveal>Senior Software Engineer | Backend Systems</p>
        <h1 id="hero-title" data-reveal>
          Crafting dependable backend systems for modern teams.
        </h1>
        <p className="hero-copy" data-reveal>
          Mumbai-based backend engineer currently at Wissen Technology, with 4+ years across
          product and services-led teams building secure API platforms, event-driven services,
          database abstractions, Azure workflows, and production-ready infrastructure.
        </p>
        <div className="hero-actions" data-reveal>
          <a className="button primary" href="#projects">View Work</a>
          <a className="button secondary" href={`${baseUrl}assets/Krunal_Goswami_Senior_Software.pdf`} target="_blank" rel="noreferrer">Resume</a>
        </div>
        <div className="metrics" data-reveal aria-label="Career highlights">
          <article>
            <strong>4+</strong>
            <span>Years across Wissen, Enablistar, and Zeus Learning</span>
          </article>
          <article>
            <strong>60%</strong>
            <span>REST API login latency reduction</span>
          </article>
          <article>
            <strong>98%</strong>
            <span>Audio CAPTCHA response improvement</span>
          </article>
        </div>
      </div>
      <figure className="hero-profile" data-reveal>
        <img src={`${baseUrl}assets/krunal-goswami-professional-photo.png`} alt="Krunal Goswami professional portrait" />
        <figcaption>
          <strong>Krunal Goswami</strong>
          <span>Senior Software Engineer · Mumbai</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero;
