import TopEarners from "@/components/AlltimeTopEarners/TopEarners";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function AlltimeTopEarners() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <TopEarners />
      <Footer />
    </>
  );
}
