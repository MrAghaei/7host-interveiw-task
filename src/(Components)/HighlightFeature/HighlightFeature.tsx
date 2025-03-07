import Image from "next/image";

function HighlightFeature() {
  return (
    <div
      className="container d-flex flex-column align-items-center text-center mt-custom-24 gap-custom-24"
      style={{ maxWidth: "950px" }}
    >
      <div className="d-flex flex-column gap-custom-8">
        <h1 className="text-custom-primary fw-bolder fs-custom-12">
          Fully reinvented project management system to help you ship products
          faster
        </h1>
        <p className="text-custom-light-text2 fs-4">
          Focus on what matters most, our robots handle the rest ☕️
        </p>
      </div>

      <Image
        className="img-fluid"
        src={"/highlightFeature.webp"}
        alt={"highlight feature"}
        width={940}
        height={700}
      />
    </div>
  );
}

export default HighlightFeature;
