function Slider() {
  return (
    <div
      id="customCarousel"
      className="container carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/1200x600?text=Slide+1"
              className="d-block w-100 rounded-4"
              alt="Slide 1"
            />
            <div className="overlay-text">
              <h2>
                Risk-free 30 day trial to level up your team’s productivity.
              </h2>
              <p>
                Get started now and take advantage of our 30 day free trial. No
                credit card required.
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/1200x600?text=Slide+2"
              className="d-block w-100 rounded-4"
              alt="Slide 2"
            />
            <div className="overlay-text">
              <h2>Another Slide Heading</h2>
              <p>Short description for your second slide.</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/1200x600?text=Slide+3"
              className="d-block w-100 rounded-4"
              alt="Slide 3"
            />
            <div className="overlay-text">
              <h2>Third Slide Heading</h2>
              <p>Short description for your third slide.</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
