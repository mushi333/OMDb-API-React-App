export default function Body({ movieData }) {
  const movies = movieData.map((movie) => (
    <tr key={movie.toString()}>
      <td style={{ fontWeight: "bold" }}>{movie.Title}</td>
      <td>{movie.Released}</td>
      <td>{movie.Director}</td>
      <td>{movie.Type}</td>
    </tr>
  ));

  return (
    <main className="container">
      <div className="bg-light p-5 rounded">
        <h1>Movie Detail</h1>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Date Released</th>
              <th>Director</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{movies}</tbody>
        </table>
      </div>
    </main>
  );
}
