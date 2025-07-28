import About from "@/components/HomeComponents/About";
import Account from "@/components/HomeComponents/Account";
import Activity from "@/components/HomeComponents/Activity";
import Banner from "@/components/HomeComponents/Banner";
import LifetimeIncome from "@/components/HomeComponents/LifetimeIncome";
import Newsletter from "@/components/HomeComponents/Newsletter";
import Offers from "@/components/HomeComponents/Offers";
import TopEarners from "@/components/HomeComponents/TopEarners";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Test from "@/components/Test";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Account />
      <LifetimeIncome />
      <Offers />
      <TopEarners />
      <Activity />
      {/* <Join />
      <Roadmap /> */}
      <Test />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
