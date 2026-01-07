import React from 'react'

const Testimonials = () => {
  return (
//    
    <div>
  <section>
    {/* Heading Section */}
    <div class="row">
      <div class="col-md-10 col-xl-8">
        <h3
          class="mb-4 text-start"
          style={{
            fontWeight: "bold",
            fontSize: "70px",
            lineHeight: "1.2",
            // Tum yahan margin ya padding kaafi easily adjust kar sakti ho
            marginLeft: "50px", // optional
            color: "#000", // optional
          }}
        >
          Testimonials
        </h3>
      </div>
    </div>

    {/* Testimonials Cards Section */}
    <div class="row text-center" style={{ marginTop: "80px" }}>
      {/* Card 1 */}
      <div class="col-md-4 mb-5 mb-md-0">
        <div class="d-flex justify-content-center mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            class="rounded-circle shadow-1-strong"
            width="150"
            height="150"
          />
        </div>
        <h5 class="mb-3" style={{ fontSize: "40px" }}>Maria Smantha</h5>
        <p class="px-xl-3">
          <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit. Quod eos id officiis hic tenetur <br /> quae quaerat ad velit ab hic tenetur.
        </p>
        <ul class="list-unstyled d-flex justify-content-center mb-0">
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star-half-alt fa-sm text-warning"></i></li>
        </ul>
      </div>

      {/* Card 2 */}
      <div class="col-md-4 mb-5 mb-md-0">
        <div class="d-flex justify-content-center mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            class="rounded-circle shadow-1-strong"
            width="150"
            height="150"
          />
        </div>
        <h5 class="mb-3" style={{ fontSize: "40px" }}>Lisa Cudrow</h5>
        <p class="px-xl-3">
          <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit. Quod eos id officiis hic tenetur <br /> quae quaerat ad velit ab hic tenetur.
        </p>
        <ul class="list-unstyled d-flex justify-content-center mb-0">
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
        </ul>
      </div>

      {/* Card 3 */}
      <div class="col-md-4 mb-0">
        <div class="d-flex justify-content-center mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            class="rounded-circle shadow-1-strong"
            width="150"
            height="150"
          />
        </div>
        <h5 class="mb-3" style={{ fontSize: "40px" }}>John Smith</h5>
        <p class="px-xl-3">
          <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit. Quod eos id officiis hic tenetur <br /> quae quaerat ad velit ab hic tenetur.
        </p>
        <ul class="list-unstyled d-flex justify-content-center mb-0">
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="fas fa-star fa-sm text-warning"></i></li>
          <li><i class="far fa-star fa-sm text-warning"></i></li>
        </ul>
      </div>
    </div>
  </section>
</div>

  )
}

export default Testimonials
