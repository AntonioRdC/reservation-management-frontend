import { FAQ } from '@/components/FAQ';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { News } from '@/components/News';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <News />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
