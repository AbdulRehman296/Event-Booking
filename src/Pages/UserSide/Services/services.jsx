import "./services.css";

function Services({data}) {
  return (
    
    <div className="services-container">

      {/* HEADING */}
      <h2>Services We Provide</h2>

      {/* EVENT CARDS */}
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <div className="event-container">

        <div className="event-card">
          <img src="event-img.jpg" alt="wedding" />
          <h3>Wedding Events</h3>
          <p>Make your wedding special with us.</p>
        </div>

        <div className="event-card">
          <img src="birthday.webp" alt="birthday" />
          <h3>Birthday Parties</h3>
          <p>Celebrate your birthday with style.</p>
        </div>

        <div className="event-card">
          <img src="music.webp" alt="concert" />
          <h3>Music Concerts</h3>
          <p>Enjoy amazing music events.</p>
        </div>

        <div className="event-card">
          <img src="corporate.avif" alt="corporate" />
          <h3>Corporate Events</h3>
          <p>Professional organization for your business events.</p>
        </div>

        <div className="event-card">
          <img src="festival.webp" alt="festival" />
          <h3>Festivals</h3>
          <p>Participate in or organize vibrant festival events.</p>
        </div>

        <div className="event-card">
          <img src="workshop.webp" alt="workshop" />
          <h3>Workshops</h3>
          <p>Educational and skill-building workshop events.</p>
        </div>

      </div>
    </div>
  );
}

export default Services;