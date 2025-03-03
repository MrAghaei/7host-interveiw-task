import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function SliderTest() {
  //region data
  const slidesData = [
    {
      id: 1,
      image: "/sliderImage.png", // Replace with actual images
      title: "Risk-free 30 day trial to level up your team’s productivity.",
      description:
        "Get started now and take advantage of our 30-day free trial today. No credit card required.",
      isActive: false,
    },
    {
      id: 2,
      image: "/sliderImage.png",
      title: "Boost collaboration with real-time team updates.",
      description:
        "Stay connected and get instant insights on your team’s workflow.",
      isActive: true,
    },
    {
      id: 3,
      image: "/sliderImage.png",
      title: "Manage tasks effortlessly with our intuitive dashboard.",
      description:
        "Streamline your workflow with a user-friendly interface and powerful tools.",
      isActive: false,
    },
  ];
  //endregion
  return (
    <div className="container">
      <div className="d-flex mt-custom-24 w-100 gap-custom-3 overflow-hidden">
        {slidesData.map((data) => (
          <div
            key={data.id}
            className="col col-8 rounded-5 position-relative overflow-hidden "
            style={{ borderRadius: "56px" }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
              style={{ opacity: "60%" }}
            ></div>
            <Image
              className="img-fluid"
              src={data.image}
              alt={data.title}
              width={816}
              height={432}
            />
            <div className="d-flex flex-column gap-custom-8 justify-content-center position-absolute text-white px-custom-16 top-0 start-0 w-100 h-100">
              <h2 className=" fw-bolder fs-custom-9">{data.title}</h2>
              <p className="fw-normal fs-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderTest;
