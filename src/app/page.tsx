import HeaderDesktop from "@/(Components)/HeaderDesktop/HeaderDesktop";
import Hero from "@/(Components)/Hero/Hero";
import MiniFeature from "@/(Components)/MiniFeature/MiniFeature";
import BigFeature, {
  BigFeatureDataProps,
} from "@/(Components)/BigFeature/BigFeature";
import Slider from "@/(Components)/Slider/Slider";
import HighlightFeature from "@/(Components)/HighlightFeature/HighlightFeature";
import Faq from "@/(Components)/Faq/Faq";
import CallToAction from "@/(Components)/CallToAction/CallToAction";
import Footer from "@/(Components)/Footer/Footer";
import HeaderMobile from "@/(Components)/HeaderMobile/HeaderMobile";
import Header from "@/(Components)/Header/Header";

export default function Home() {
  //region data
  const bigFeatureData: (BigFeatureDataProps & { id: number })[] = [
    {
      id: 1,
      heading: "Revolutionize your workflow",
      color: "purple",
      text: "We have designed our app for increased efficiency and it will help you to start getting more things done.",
      image: "/rev.webp",
      isRtl: false,
    },
    {
      id: 2,
      heading: "Free template library included",
      color: "orange",
      text: "We have got quite a few already made templates for better project management that you can use now.",
      image: "/temp.webp",
      isRtl: true,
    },
    {
      id: 3,
      heading: "Used by teams from all over the globe",
      color: "red",
      text: "Our app has been trusted by many different teams from around the world and we have got some great reviews.",
      image: "/global.webp",
      isRtl: false,
    },
  ];
  //endregion

  return (
    <>
      <Header />
      <Hero />
      <MiniFeature />
      {bigFeatureData.map((data) => (
        <BigFeature key={data.id} data={data} />
      ))}
      <Slider />
      <HighlightFeature />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
}
