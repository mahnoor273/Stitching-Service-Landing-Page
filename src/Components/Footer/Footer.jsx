import React from 'react'
import icons from '../../assets/icons.png'

const Footer = () => {
  return (
    <div className="container py-5">
      <div className="row gx-5 gy-4">
        {/* QUICK LINKS SECTION */}
        <div className="col-12 col-md-4">
          <h2 className="mb-3">Quick Links</h2>
          <ul className="list-unstyled fs-5 lh-lg">
            <li>About Us</li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>FAQS</li>
            <li>Contact Us</li>
          </ul>
          <p className="mt-4 small">&copy; 2025 Fabrico. All rights reserved.</p>
        </div>

        {/* REVIEW FORM SECTION */}
        <div className="col-12 col-md-8">
          <h2 className="mb-3">Submit Your Reviews/Complain</h2>

          <form className="d-flex flex-column gap-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              style={{ fontSize: '1rem' }}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              style={{ fontSize: '1rem' }}
            />
            <textarea
              placeholder="Reviews/Complain"
              rows={5}
              className="form-control"
              style={{ fontSize: '1rem', resize: 'vertical' }}
            />
          </form>

          {/* ICONS + BUTTON */}
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 mt-3">
            <img src={icons} alt="Icons" style={{ height: '43px' }} />

            <button
              className="btn fw-bold"
              style={{
                backgroundColor: '#7303a0ff',
                color: 'black',
                padding: '12px 30px',
                fontSize: '1rem',
                borderRadius: '5px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'black'
                e.target.style.color = '#7303a0ff'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#7303a0ff'
                e.target.style.color = 'black'
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

