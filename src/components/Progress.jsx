import { useEffect, useRef } from 'react';

const Progress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="progress" ref={progressRef} aria-hidden="true"></div>;
};

export default Progress;
