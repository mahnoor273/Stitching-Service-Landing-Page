import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="position-relative w-100" style={{ height: '100vh', overflow: 'hidden' }}>
      
      {/* Background Image */}
      <img
        src={banner}
        alt="Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Centered Text and Button */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center px-3"
        style={{ zIndex: 2, color: 'white' }}
      >
        <h1 className="fw-bold" style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          lineHeight: '1.2'
        }}>
          Your Style, Your Fit,<br /> Your Way.
        </h1>

        <p className="my-3" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          lineHeight: '1.5'
        }}>
          Design your dream outfit today — with Fabrico,<br />
          it's stitched to perfection
        </p>

        <button
          className="fw-bold"
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '12px 30px',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '30px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }}
        >
          Start Now
        </button>
      </div>
    </div>
  )
}

export default Banner

