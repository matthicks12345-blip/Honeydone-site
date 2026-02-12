import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import PricingContent from "@/components/PricingContent";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroBanner />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10" id="pricing">
            <PricingContent />
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
