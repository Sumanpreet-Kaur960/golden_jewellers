import "./Featured.css";

function Featured() {
  const collections = [
    {
      title: "Rings",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500"
    },
    {
      title: "Necklaces",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500"
    },
    {
      title: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500"
    }
  ];

  return (
    <section className="featured">
      <h2>Featured Collections</h2>

      <div className="cards">
        {collections.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;