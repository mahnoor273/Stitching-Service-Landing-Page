import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Maria Smantha",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      stars: 4.5,
    },
    {
      name: "Lisa Cudrow",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      stars: 5,
    },
    {
      name: "John Smith",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      stars: 4,
    },
  ];

  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="row mb-5">
        <div className="col-12 col-md-10 col-xl-8">
          <h3
            className="text-start fw-bold"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.2 }}
          >
            Testimonials
          </h3>
        </div>
      </div>

      {/* Testimonials Cards */}
      <div className="row text-center">
        {testimonialsData.map((t, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="rounded-circle shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
            <h5 style={{ fontSize: "clamp(1.25rem, 2vw, 2rem)" }} className="mb-3">
              {t.name}
            </h5>
            <p className="px-2 px-md-4">
              <i className="fas fa-quote-left pe-2"></i>
              {t.text}
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              {Array.from({ length: 5 }).map((_, i) => {
                if (i < Math.floor(t.stars)) {
                  return <li key={i}><i className="fas fa-star text-warning"></i></li>;
                } else if (i < t.stars) {
                  return <li key={i}><i className="fas fa-star-half-alt text-warning"></i></li>;
                } else {
                  return <li key={i}><i className="far fa-star text-warning"></i></li>;
                }
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

