export default function Header({ searchQuery, setSearchQuery, setMovieData }) {
  async function getData() {
    const response = await fetch("http://127.0.0.1:3000/?name=" + searchQuery);
    console.log(response);
    const data = await response.json();
    setMovieData(data);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
      <div className="container-fluid">
        <a className="navbar-brand">OMDb API</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            onClick={(e) => {
              e.preventDefault();
              getData();
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
