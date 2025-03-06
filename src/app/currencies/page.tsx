import CurrencyHero from "@/(Components)/CurrencyHero/CurrencyHero";
import CallToAction from "@/(Components)/CallToAction/CallToAction";
import Footer from "@/(Components)/Footer/Footer";
import CurrencyList from "@/(Components)/CurrencyList/CurrencyList";
import Header from "@/(Components)/Header/Header";

function Page() {
  return (
    <>
      <Header />
      <CurrencyHero />
      <CurrencyList />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Page;
