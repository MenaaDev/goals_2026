// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="hero-container">
        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}></div>
          <div className="shape shape-2" style={{ transform: `translate(${-mousePos.x}px, ${mousePos.y}px)` }}></div>
          <div className="shape shape-3" style={{ transform: `translate(${mousePos.x}px, ${-mousePos.y}px)` }}></div>
          <div className="shape shape-4" style={{ transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)` }}></div>
        </div>

        {/* Chihuahuas realistas */}
        <div className="chihuahuas-container">
          {/* Chihuahua Blanca con manchitas */}
          <div className="chihuahua chi-white">
            <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
              {/* Cuerpo */}
              <ellipse cx="100" cy="130" rx="45" ry="35" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1"/>
              
              {/* Patas traseras */}
              <ellipse cx="80" cy="155" rx="8" ry="18" fill="#f5f5f5"/>
              <ellipse cx="120" cy="155" rx="8" ry="18" fill="#f5f5f5"/>
              <ellipse cx="80" cy="172" rx="10" ry="6" fill="#1a1a1a"/>
              <ellipse cx="120" cy="172" rx="10" ry="6" fill="#1a1a1a"/>
              
              {/* Patas delanteras */}
              <ellipse cx="75" cy="145" rx="7" ry="20" fill="#ffffff"/>
              <ellipse cx="125" cy="145" rx="7" ry="20" fill="#ffffff"/>
              <ellipse cx="75" cy="164" rx="9" ry="5" fill="#1a1a1a"/>
              <ellipse cx="125" cy="164" rx="9" ry="5" fill="#1a1a1a"/>
              
              {/* Cuello */}
              <ellipse cx="100" cy="100" rx="28" ry="25" fill="#ffffff"/>
              
              {/* Cabeza */}
              <ellipse cx="100" cy="70" rx="35" ry="40" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1"/>
              
              {/* Manchas cafés */}
              <ellipse cx="85" cy="55" rx="12" ry="14" fill="#8b7355" opacity="0.8"/>
              <ellipse cx="115" cy="50" rx="14" ry="16" fill="#8b7355" opacity="0.8"/>
              <ellipse cx="90" cy="75" rx="8" ry="9" fill="#8b7355" opacity="0.7"/>
              
              {/* Orejas grandes */}
              <ellipse cx="75" cy="45" rx="18" ry="28" fill="#f5f5f5" stroke="#d4d4d4" strokeWidth="1" transform="rotate(-25 75 45)"/>
              <ellipse cx="125" cy="45" rx="18" ry="28" fill="#f5f5f5" stroke="#d4d4d4" strokeWidth="1" transform="rotate(25 125 45)"/>
              
              {/* Interior de orejas */}
              <ellipse cx="75" cy="48" rx="10" ry="18" fill="#ffb88c" transform="rotate(-25 75 48)"/>
              <ellipse cx="125" cy="48" rx="10" ry="18" fill="#ffb88c" transform="rotate(25 125 48)"/>
              
              {/* Hocico */}
              <ellipse cx="100" cy="85" rx="18" ry="15" fill="#f9f9f9"/>
              
              {/* Nariz */}
              <ellipse cx="100" cy="88" rx="6" ry="5" fill="#1a1a1a"/>
              
              {/* Boca */}
              <path d="M 100 88 Q 95 92 90 90" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              <path d="M 100 88 Q 105 92 110 90" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              
              {/* Ojos grandes */}
              <ellipse cx="85" cy="68" rx="8" ry="10" fill="#2d2d2d"/>
              <ellipse cx="115" cy="68" rx="8" ry="10" fill="#2d2d2d"/>
              
              {/* Pupilas */}
              <ellipse cx="85" cy="69" rx="5" ry="6" fill="#000000"/>
              <ellipse cx="115" cy="69" rx="5" ry="6" fill="#000000"/>
              
              {/* Brillos en ojos */}
              <circle cx="87" cy="66" r="2.5" fill="#ffffff"/>
              <circle cx="117" cy="66" r="2.5" fill="#ffffff"/>
              <circle cx="83" cy="70" r="1.5" fill="#ffffff" opacity="0.7"/>
              <circle cx="113" cy="70" r="1.5" fill="#ffffff" opacity="0.7"/>
              
              {/* Cejas */}
              <path d="M 78 62 Q 85 60 90 62" stroke="#666" strokeWidth="1" fill="none" opacity="0.4"/>
              <path d="M 122 62 Q 115 60 110 62" stroke="#666" strokeWidth="1" fill="none" opacity="0.4"/>
              
              {/* Cola */}
              <path d="M 145 130 Q 165 120 170 105" stroke="#f5f5f5" strokeWidth="14" fill="none" strokeLinecap="round">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 145 130"
                  to="15 145 130"
                  dur="0.6s"
                  repeatCount="indefinite"
                  additive="sum"/>
              </path>
              
              {/* Lengua (opcional) */}
              <ellipse cx="100" cy="93" rx="4" ry="6" fill="#ff6b9d" opacity="0.8"/>
            </svg>
          </div>

          {/* Chihuahua Beige/Dorada */}
          <div className="chihuahua chi-beige">
            <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
              {/* Cuerpo */}
              <ellipse cx="100" cy="130" rx="45" ry="35" fill="#ffefd5" stroke="#ffe4b5" strokeWidth="1"/>
              
              {/* Patas traseras */}
              <ellipse cx="80" cy="155" rx="8" ry="18" fill="#ffe4b5"/>
              <ellipse cx="120" cy="155" rx="8" ry="18" fill="#ffe4b5"/>
              <ellipse cx="80" cy="172" rx="10" ry="6" fill="#1a1a1a"/>
              <ellipse cx="120" cy="172" rx="10" ry="6" fill="#1a1a1a"/>
              
              {/* Patas delanteras */}
              <ellipse cx="75" cy="145" rx="7" ry="20" fill="#ffefd5"/>
              <ellipse cx="125" cy="145" rx="7" ry="20" fill="#ffefd5"/>
              <ellipse cx="75" cy="164" rx="9" ry="5" fill="#1a1a1a"/>
              <ellipse cx="125" cy="164" rx="9" ry="5" fill="#1a1a1a"/>
              
              {/* Cuello */}
              <ellipse cx="100" cy="100" rx="28" ry="25" fill="#ffefd5"/>
              
              {/* Cabeza */}
              <ellipse cx="100" cy="70" rx="35" ry="40" fill="#ffefd5" stroke="#ffe4b5" strokeWidth="1"/>
              
              {/* Orejas grandes */}
              <ellipse cx="75" cy="45" rx="18" ry="28" fill="#ffe4b5" stroke="#ffdab9" strokeWidth="1" transform="rotate(-25 75 45)"/>
              <ellipse cx="125" cy="45" rx="18" ry="28" fill="#ffe4b5" stroke="#ffdab9" strokeWidth="1" transform="rotate(25 125 45)"/>
              
              {/* Interior de orejas */}
              <ellipse cx="75" cy="48" rx="10" ry="18" fill="#ffb88c" transform="rotate(-25 75 48)"/>
              <ellipse cx="125" cy="48" rx="10" ry="18" fill="#ffb88c" transform="rotate(25 125 48)"/>
              
              {/* Hocico */}
              <ellipse cx="100" cy="85" rx="18" ry="15" fill="#fff8e7"/>
              
              {/* Nariz */}
              <ellipse cx="100" cy="88" rx="6" ry="5" fill="#1a1a1a"/>
              
              {/* Boca */}
              <path d="M 100 88 Q 95 92 90 90" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              <path d="M 100 88 Q 105 92 110 90" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              
              {/* Ojos grandes */}
              <ellipse cx="85" cy="68" rx="8" ry="10" fill="#2d2d2d"/>
              <ellipse cx="115" cy="68" rx="8" ry="10" fill="#2d2d2d"/>
              
              {/* Pupilas */}
              <ellipse cx="85" cy="69" rx="5" ry="6" fill="#000000"/>
              <ellipse cx="115" cy="69" rx="5" ry="6" fill="#000000"/>
              
              {/* Brillos en ojos */}
              <circle cx="87" cy="66" r="2.5" fill="#ffffff"/>
              <circle cx="117" cy="66" r="2.5" fill="#ffffff"/>
              <circle cx="83" cy="70" r="1.5" fill="#ffffff" opacity="0.7"/>
              <circle cx="113" cy="70" r="1.5" fill="#ffffff" opacity="0.7"/>
              
              {/* Cejas */}
              <path d="M 78 62 Q 85 60 90 62" stroke="#b8905b" strokeWidth="1" fill="none" opacity="0.4"/>
              <path d="M 122 62 Q 115 60 110 62" stroke="#b8905b" strokeWidth="1" fill="none" opacity="0.4"/>
              
              {/* Cola */}
              <path d="M 145 130 Q 165 120 170 105" stroke="#ffe4b5" strokeWidth="14" fill="none" strokeLinecap="round">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 145 130"
                  to="15 145 130"
                  dur="0.6s"
                  repeatCount="indefinite"
                  additive="sum"/>
              </path>
              
              {/* Lengua (opcional) */}
              <ellipse cx="100" cy="93" rx="4" ry="6" fill="#ff6b9d" opacity="0.8"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="badge">
            <span className="sparkle">✨</span>
            <span>Nuevo Año, Nuevas Metas</span>
            <span className="sparkle">✨</span>
          </div>
          
          <h1 className="main-title">
            <span className="title-learning">Learning</span>
            <span className="title-2026">2026</span>
          </h1>
          
          <div className="subtitle">

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default App;