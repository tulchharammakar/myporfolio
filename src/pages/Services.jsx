function Services() {
  return (
    <section className="services-page">
      <h1>My Services</h1>

      <div className="services-container">

        {/* Service 1 */}
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            I build modern, responsive and user-friendly websites 
            using React, JavaScript and other latest technologies.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <h2>Backend Development</h2>
          <p>
            I create secure and scalable APIs using Node.js, Express 
            and databases like MongoDB and MySQL.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <h2>Full Stack Solutions</h2>
          <p>
            I deliver complete end-to-end solutions combining frontend 
            and backend for seamless applications.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Services