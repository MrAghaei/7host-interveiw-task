import MiniFeatureCard from "@/(Components)/MiniFeatureCard/MiniFeatureCard";

function MiniFeature() {
  //region data
  const featureData = [
    { id: 1, name: "Transparent Pricing", image: "/transparent.png" },
    { id: 2, name: "Easy Integration", image: "/easyIntegration.png" },
    { id: 3, name: "Superb Efficiency", image: "/efficiency.png" },
  ];
  //endregion

  return (
    <div className="container d-flex align-items-center flex-column gap-5">
      <div className="d-flex flex-column align-items-center">
        <h2 className="fs-1">
          <span className="text-custom-light-text4 fw-bolder">
            Get more done in
          </span>
          <span className="text-custom-secondary fw-bolder"> less time</span>
        </h2>
        <p className="text-custom-light-text2 fs-4">
          Simple, fast, effortlessly
        </p>
      </div>
      <div className="d-flex gap-custom-24">
        {featureData.map((data) => (
          <MiniFeatureCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MiniFeature;
