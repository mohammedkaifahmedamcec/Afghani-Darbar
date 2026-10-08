import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import FamilyTable from "@/components/FamilyTable";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <FamilyTable />
        <Story />
        <Menu />
        <Gallery />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}