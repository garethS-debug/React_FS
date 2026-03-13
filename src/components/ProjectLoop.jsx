import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "./assets/techLogos/AWS.svg", alt: "AWS", href: "https://aws.amazon.com" },
  { src: "./assets/techLogos/Nextjs.svg", alt: "Next.js", href: "https://nextjs.org" },
  { src: "./assets/techLogos/React.svg", alt: "React", href: "https://react.dev" },
  { src: "./assets/techLogos/Git.svg", alt: "Git", href: "https://git-scm.com" },
];

function App() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={20}
        direction="left"
        logoHeight={75}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
        speed={20}
        direction="left"
        logoHeight={75}
        gap={60}
        hoverSpeed={0}
        fadeOut
        useCustomRender={false}
      />
    </div>
  );
}

export default App;