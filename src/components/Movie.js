export default function Movie({ data }) {
  const movie = data;
  return (
    <div key={movie.id}>
      <h2>
        <a href="">{movie.title}</a>
      </h2>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
