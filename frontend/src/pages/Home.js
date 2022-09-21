import home from "./home.module.css";
import HeaderBar from "../components/Header Bar/HeaderBar";
import HeroBar from "../components/Hero Section/HeroBar";
import InfoCalc from "../components/InfoCalc/InfoCalc";
import OurMission from "../components/Our Mission/OurMission";
import WorkingClosely from "../components/Working with Us/WorkingClosely";
import TenantSupport from "../components/Tenant Support/TenantSupport";
import Testimonials from "../components/Testimonials/Testimonials";
import ImgBanner from "../components/Image Banner/ImgBanner";
import Contact from "../components/Contact Us/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={home.homePage}>
      <HeaderBar />
      <HeroBar />
      <InfoCalc />
      <OurMission />
      <WorkingClosely />
      <TenantSupport />
      <Testimonials />
      <ImgBanner />
      <Contact />
      <Footer />
    </div>
  );
}
