import React from "react";
import axios from "axios";

// function searchAnime(data) {
//   console.log(data);
//   axios
//     .get("/api/search?q=naruto&active-user=12344", {
//       params: {
//         q: data
//       }
//     })
//     .then(response => response.status(200).send(response))
//     .catch(error => console.log(error));
// }

export default function Header() {
  //   const [searchAnimes, setSearchAnimes] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("/api/anime")
  //       .then(response => {
  //         setSearchAnimes(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a
        className="navbar-brand"
        href="/"
        style={{ color: "black", fontSize: "2.5rem" }}
      >
        Acme School
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/" style={{ color: "black" }}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/favorites"
              style={{ color: "black" }}
            >
              School List
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/favorites"
              style={{ color: "black" }}
            >
              Student List
            </a>
          </li>
        </ul>

        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
}
