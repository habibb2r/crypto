import TopEarners from "@/components/MonthlyTopEarners/TopEarners";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function MonthlyTopEarners() {
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
