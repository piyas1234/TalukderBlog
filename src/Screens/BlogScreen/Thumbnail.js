import { Link } from "react-router-dom";

export default function Thumbnail({ result }) {
  return (
    <div className="gx-3 col-md-6 col-lg-4">
      <div className="  rounded p-3 text-white mt-5 shadow-lg">
        <Link to={`/details/${result._id}`}>
          <img
            layout="responsive"
            src={result.image}
            height="200px"
            width="300px"
          />
          <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h4 className="text-dark">{result.title}</h4>
            <p>
              <p className="text-dark">20-21-2021</p>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
