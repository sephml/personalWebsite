import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: "#10b981" },
      number: { value: 55, density: { enable: true, area: 900 } },
      links: {
        enable: true,
        color: "#10b981",
        distance: 130,
        opacity: 0.12,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.5,
        straight: false,
      },
      opacity: {
        value: { min: 0.2, max: 0.5 },
        animation: { enable: true, speed: 0.5, sync: false },
      },
      size: { value: { min: 1, max: 2.5 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Particles id="tsparticles" options={options} />
    </div>
  );
}

export default Particle;
