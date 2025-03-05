import MiniFeatureCard from "@/(Components)/MiniFeatureCard/MiniFeatureCard";
import style from "./MiniFeature.module.scss";
function MiniFeature() {
  //region data
  const featureData = [
    { id: 1, name: "Transparent Pricing", image: "/transparent.png" },
    { id: 2, name: "Easy Integration", image: "/easyIntegration.png" },
    { id: 3, name: "Superb Efficiency", image: "/efficiency.png" },
  ];
  //endregion

  return (
    <div className="container-fluid d-flex align-items-center flex-column gap-2 gap-lg-5">
      <div className="d-flex flex-column align-items-center">
        <h2 className={`fs-1 text-center ${style.customWidth}`}>
          <span className="text-custom-light-text4 fw-bolder">
            Get more done in
          </span>
          <span className="text-custom-secondary fw-bolder"> less time</span>
        </h2>
        <p className="text-custom-light-text2 fs-4">
          Simple, fast, effortlessly
        </p>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-custom-24">
        {featureData.map((data) => (
          <MiniFeatureCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MiniFeature;
