import HeaderDesktop from "@/(Components)/HeaderDesktop/HeaderDesktop";
import CurrencyHero from "@/(Components)/CurrencyHero/CurrencyHero";
import CallToAction from "@/(Components)/CallToAction/CallToAction";
import Footer from "@/(Components)/Footer/Footer";
import CurrencyList from "@/(Components)/CurrencyList/CurrencyList";

function Page() {
  return (
    <>
      <HeaderDesktop />
      <CurrencyHero />
      <CurrencyList />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Page;
