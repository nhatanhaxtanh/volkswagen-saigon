import Hero from "@/components/Hero";
import CarModels from "@/components/CarModels";
import TestDriveForm from "@/components/TestDriveForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import LatestNews from "@/components/LatestNews";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CarModels />
      <TestDriveForm />
      <WhyChooseUs />
      <CustomerReviews />
      <LatestNews />
      <CTABanner />
      <Footer />
      <FloatingContact />
    </main>
  );
}
