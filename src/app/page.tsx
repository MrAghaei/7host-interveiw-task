import Header from "@/(Components)/Header/Header";
import Hero from "@/(Components)/Hero/Hero";
import MiniFeature from "@/(Components)/MiniFeature/MiniFeature";
import BigFeature from "@/(Components)/BigFeature/BigFeature";
import Slider from "@/(Components)/Slider/Slider";
import HighlightFeature from "@/(Components)/HighlightFeature/HighlightFeature";

export default function Home() {
  //region data
  const bigFeatureData = [
    {
      id: 1,
      heading: "Revolutionize your workflow",
      headingColor: "custom-purple",
      text: "We have designed our app for increased efficiency and it will help you to start getting more things done.",
      image: "/rev.png",
      isRtl: false,
    },
    {
      id: 2,
      heading: "Free template library included",
      headingColor: "custom-orange",
      text: "We have got quite a few already made templates for better project management that you can use now.",
      image: "/temp.png",
      isRtl: true,
    },
    {
      id: 3,
      heading: "Used by teams from all over the globe",
      headingColor: "custom-red",
      text: "Our app has been trusted by many different teams from around the world and we have got some great reviews.",
      image: "/global.png",
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
    </>
  );
}
