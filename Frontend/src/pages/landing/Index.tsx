import Navbar from '@/components/Navbar';
import Hero from './Hero';
import Service from './Service';
import HowitWorks from './HowitWorks';
import Newsletter from './Newsletter';
import Footer from './Footer';

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <section className="padding">
        <Service />
      </section>
      <div className="padding bg-yellow-200">
        <HowitWorks />
      </div>
      <div className="padding">
        <Newsletter />
      </div>
      <div className="padding bg-nexa-green">
        <Footer />
      </div>
    </main>
  );
}
export default Index;
