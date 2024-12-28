import {Navbar} from '@/components/Navbar';
import { Features } from '@/components/feature';
import { Hero } from '@/components/hero';

function Landing() {
  console.log("hello")
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

export default Landing;
